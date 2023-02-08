import styled from "styled-components";
import { useParams, useHistory } from "react-router-dom";
import {useState, useEffect} from 'react'
import PerceptionOfCareCard from "./PerceptionOfCareCard";
import PerceptionOfCareForm from "./PerceptionOfCareForm";
import SampleAssessmentForm from "./SampleAssessmentForm";
import SampleAssessmentCard from "./SampleAssessmentCard";
import SaLineChart from "../components/charts/SaLineChart"

const Card = styled.li`
border: 1px solid;
max-width: 90%;
min-width: 90%;
flex-wrap: wrap;
border-radius: 10px;
background-color: var(--white);
box-shadow: 0px 0px 2px 2px;
min-height: 40rem;
overflow: clip;
list-style-type: none;
margin: 10px
`;

const Profile = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border-right: solid;
min-width: 20rem;
max-width: 20rem;
text-align: center;
`

function Assessments(){
    const { id } = useParams();
    const [client, setClient] = useState([])
    const [pocs, setPocs] = useState([])
    const [viewPocs, setViewPocs] = useState(false)
    const [viewSas, setViewSas] = useState(false)
    const [addPocMenu, setAddPocMenu] = useState(false)
    const [sas, setSas] = useState([])
    const [addSaMenu, setAddSaMenu] = useState(false)
    const {firstname, lastname, image, county, isActive, mentor_id, funding_id} = client
    const history = useHistory()

    
  
    useEffect(() => {
        Promise.all([
            fetch(`/clients/${id}`),
            fetch('/perception_of_cares'),
            fetch('/sample_assessments'),
        ])
        .then(([resClient, resPoc, resSa]) =>
            Promise.all([resClient.json(), resPoc.json(), resSa.json()])
        )
        .then(([dataClient, dataPoc, dataSa]) => {
            setClient(dataClient);
            setPocs(dataPoc)
            setSas(dataSa)
        })
    }, [])

    function handleCreatePocClick(){
        setAddPocMenu(!addPocMenu)
    }

    function handleViewPocClick(){
        setViewPocs(!viewPocs)
    }

    function handleViewSaClick(){
        setViewSas(!viewSas)
    }

    function handleCreateSaClick(){
        setAddSaMenu(!addSaMenu)
    }

    function setUpdatePoc(newPoc) {
        setPocs([...pocs, newPoc])
    }

    function setUpdateSa(newSa) {
        setPocs([...sas, newSa])
    }

    let clientId = parseInt(id)

    const findClientPoc = pocs.filter(poc => (poc.client_id === clientId))

    const displayPocs = findClientPoc.map(poc => 
        <PerceptionOfCareCard key={poc.id} poc={poc} />
        )

    const findClientSas = sas.filter(sa => (sa.client_id === clientId))

    const displaySas = findClientSas.map(sa => 
        <SampleAssessmentCard key={sa.id} sa={sa} />
        )

        console.log(displaySas)

    return(
        <Card className="flex">
            <Profile className="center">
                    <h2>{`${firstname} ${lastname}`}</h2>
                    <h4>County: {county}</h4>
                    <label><strong>Mentee ID</strong></label>
                    <p>{client.id}</p>
                    {mentor_id === null ? (
                        <button>Assign Mentor to Case</button>
                    ) : (
                    <p>{`Funding: ${mentor_id}`}</p>
                    )}
                    {funding_id === null ? (
                        <button>Add Funding</button>
                    ) : (
                    <p>{`Funding: ${funding_id}`}</p>
                    )
                    }
                    {isActive === true? (
                        <p>
                        <strong>Status:</strong> Active
                        </p>  
                        ) : (
                            <p>
                        <strong>Status:</strong> Inactive
                        </p> 
                        )}
                </Profile>
                <section>
                <h2>Mentee Assessments</h2>
                    {viewPocs === false ? (
                        <button onClick={handleViewPocClick}>Perception of Care</button>
                    ) : (
                        <>
                        <button onClick={handleViewPocClick}>Close</button>
                        {addPocMenu === false ? (
                        <button onClick={handleCreatePocClick} >New Perception of Care</button>
                    ) : (
                        <>
                        <button onClick={handleCreatePocClick} >Close Form</button>
                        <PerceptionOfCareForm onNewPoc={setUpdatePoc} onCloseForm={handleCreatePocClick} />
                        
                        </>
                    )}
                        {
                            displayPocs
                        }
                        </>
                    )}

                    {viewSas === false ? (
                        <button onClick={handleViewSaClick}>Sample Assessments</button>

                    ) : (
                        <>
                        <button onClick={handleViewSaClick}>Close</button>
                        {addSaMenu === false ? (
                            <>
                            <button onClick={handleCreateSaClick} >New Sample Assessment</button>
                            <SaLineChart
                            client={client} paramId={id} />
                            </>
                        ) : (
                            <>
                            <button onClick={handleCreateSaClick} >Close Form</button>
                            <SampleAssessmentForm onNewSa={setUpdateSa} onCloseForm={handleCreateSaClick} />
                            </>
                        )}
                        
                        {
                            displaySas
                        }
                        </>
                    )}

                   
                </section>
        </Card>
    )
}

export default Assessments

