import { useEffect, useState } from "react"
import { useParams, useHistory } from 'react-router-dom';
import styled from "styled-components";
import axios from 'axios';

const Card = styled.li`
  border: 1px solid;
  max-width: 90%;
  min-width: 90%;
  flex-wrap: wrap;
  border-radius: 10px;
  background-color: var(--white);
  box-shadow: 0px 0px 2px 2px;
  max-height: 40rem;
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

const ProfileImg = styled.img`
height: 15rem; 
width: 15rem;
border-radius: 50%;
object-fit: cover
`

function ClientDetails() {
    const { id } = useParams();
    const [client, setClient] = useState([])
    const {firstname, lastname, image, county, isActive, mentor_id, funding_id, age, gender, race, ethnicity, street_address, city, state, zip} = client
    const history = useHistory()
  
    useEffect(() => {
        fetch(`/clients/${id}`)
        .then(res => res.json())
        .then(clientData => setClient(clientData))
    }, [])

    function handleTreatmentPlanClick() {
        history.push(`/treatment-plan/${id}`)
    }

    function handleProgressNoteClick() {
        history.push(`/progress-note/${id}`)
    }

    return(
        <div >
            <Card className="flex" >
                <Profile className="center">
                    <h2>{`${firstname} ${lastname}`}</h2>
                    <h3>County: {county}</h3>
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
                <section style={{marginLeft:"20px"}}>
                    <h2>Mentee Demographic</h2>
                    <p><strong>Full Legal Name:</strong>{` ${firstname} ${lastname}`}</p>
                    <p><strong>Age:</strong> {age}</p>
                    <p><strong>Gender:</strong> {gender}</p>
                    <p><strong>Race:</strong> {race}</p>
                    <p><strong>Ethnicity:</strong> {ethnicity}</p>
                    <h3>Home Address</h3>
                    <p><strong>Street:</strong> {street_address}</p>
                    <p><strong>City:</strong> {city}</p>
                    <p><strong>State:</strong> {state}</p>
                    <p><strong>Zip Code:</strong> {zip}</p>
                </section>
                <button onClick={handleTreatmentPlanClick}>Treatment Plan</button>
                <button onClick={handleProgressNoteClick}>Progress Notes</button>
                <button>Assessments</button>
            </Card>
        </div>
    )
}

export default ClientDetails