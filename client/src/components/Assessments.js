import styled from "styled-components";
import { useParams, useHistory } from "react-router-dom";
import {useState, useEffect} from 'react'
import PerceptionOfCareCard from "./PerceptionOfCareCard";
import PerceptionOfCareForm from "./PerceptionOfCareForm";
import SampleAssessmentForm from "./SampleAssessmentForm";
import SampleAssessmentCard from "./SampleAssessmentCard";
import SaLineChart from "../components/charts/SaLineChart"
import ClientPhoto from "./ClientPhoto";
import { Button } from "../styled-components/Buttons";

const Profile = styled.div`
    background-color: var(--light-blue);
    margin: 2rem 5rem;
    border-radius: 15px;
`
const ButtonDiv = styled.div`
    margin: 0 5rem;
`

const CardDetails = styled.div`
    background-color: white;
    margin: 4rem 1rem; 
    border-radius: 10px;
    overflow: clip;  
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
    const {firstname, lastname, image, county, isActive, case_manager, funding} = client
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

    return(
        <div >
            <h2 style={{margin: "2rem 5rem"}}>Mentee Assessments</h2>
            <Profile className="flex">
            <div style={{margin: "2rem 2rem 2rem 4rem"}}>
                <ClientPhoto />
            </div>
            <CardDetails>
                <div style={{margin:"1rem 7rem 0 2rem"}}>
                    <h2 className="no-margin font-sort-mill-goudy">{`${firstname} ${lastname}`}</h2>
                    <p className="no-margin font-sort-mill-goudy"><strong>County: </strong>{county}</p>
                    <p className="no-margin font-sort-mill-goudy"><strong>Mentee ID: </strong>{client.id}</p>
                </div>
            </CardDetails>
            <CardDetails>
                <div style={{margin:"1rem 7rem 1rem 2rem"}}>
                    <label className="font-sort-mill-goudy" style={{fontSize:"22px"}}><strong>Case Status</strong></label>
                    <br/>
                        {case_manager === null || case_manager === undefined ? <p className="no-margin font-sort-mill-goudy" style={{color: "red"}}>Assign Case Worker</p> : <p className="no-margin font-sort-mill-goudy"><strong>Case Worker: </strong>{case_manager.firstname} {case_manager.lastname}</p>}
                        {funding === null || funding === undefined ? (
                            <p className="no-margin font-sort-mill-goudy" style={{color: "red"}}>Unfunded</p>
                        ) : (
                        <p className="no-margin font-sort-mill-goudy"><strong>Funding: </strong>{` ${funding.name}`}</p>
                        )
                        }
                    {isActive === true? (
                        <p className="no-margin font-sort-mill-goudy">
                        <strong>Status:</strong> Active
                        </p>  
                        ) : (
                            <p className="no-margin font-sort-mill-goudy">
                        <strong>Status:</strong> Inactive
                        </p> 
                        )}
                </div>
            </CardDetails>
            </Profile>
            <div style={{margin:"0 5rem"}}>
                <ButtonDiv className="flex" style={{justifyContent:"space-around"}}>
                    {viewPocs === false ? <Button onClick={handleViewPocClick}>Perception of Care</Button> : <Button onClick={handleViewPocClick}>Close</Button> }
                    {viewSas === false ? <Button onClick={handleViewSaClick}>Sample Assessments</Button> : <Button onClick={handleViewSaClick}>Close</Button>}
                </ButtonDiv>
                    {viewPocs === false ? (
                        null
                    ) : (
                        <>
                        {addPocMenu === false ? (
                        <Button onClick={handleCreatePocClick} >New Perception of Care</Button>
                    ) : (
                        <>
                            <Button onClick={handleCreatePocClick} >Close Form</Button>
                            <PerceptionOfCareForm client={client} onNewPoc={setUpdatePoc} onCloseForm={handleCreatePocClick} />
                        </>
                    )}
                        <div >
                            { displayPocs }
                        </div>
                        

                        </>
                    )}

                    {viewSas === false ? (
                        null
                    ) : (
                        <>
                        
                        {addSaMenu === false ? (
                        <>
                            <Button onClick={handleCreateSaClick} >New Sample Assessment</Button>
                            <SaLineChart
                            client={client} paramId={id} />
                        </>
                    ) : (
                        <>
                            <Button onClick={handleCreateSaClick} >Close Form</Button>
                            <SampleAssessmentForm client={client} onNewSa={setUpdateSa} onCloseForm={handleCreateSaClick} />
                        </>
                        )}
                        
                        {
                            displaySas
                        }
                        </>
                    )}
            </div>
        </div>
    )
}

export default Assessments

