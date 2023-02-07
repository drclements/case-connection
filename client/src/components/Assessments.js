import styled from "styled-components";
import { useParams, useHistory } from "react-router-dom";
import {useState, useEffect} from 'react'
import PerceptionOfCareCard from "./PerceptionOfCareCard";
import PerceptionOfCareForm from "./PerceptionOfCareForm";

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
    const [pocMenu, setPocMenu] = useState(false)
    const {firstname, lastname, image, county, isActive, mentor_id, funding_id} = client
    const history = useHistory()

    
  
    useEffect(() => {
        Promise.all([
            fetch(`/clients/${id}`),
            fetch('/perception_of_cares'),
        ])
        .then(([resClient, resPoc]) =>
            Promise.all([resClient.json(), resPoc.json()])
        )
        .then(([dataClient, dataPoc]) => {
            setClient(dataClient);
            setPocs(dataPoc)
        })
    }, [])

    function handleCreatePocClick(){
        setPocMenu(!pocMenu)
    }

    function setUpdatePoc(newPoc) {
        setPocs([...pocs, newPoc])
    }

    let clientId = parseInt(id)

    const findClientPoc = pocs.filter(poc => (poc.client_id === clientId))

    const displayPocs = findClientPoc.map(poc => 
        <PerceptionOfCareCard key={poc.id} poc={poc} />
        )

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
                    {pocMenu === false ? (
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
                </section>
        </Card>
    )
}

export default Assessments

