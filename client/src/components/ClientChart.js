import { useEffect, useState } from "react"
import { useParams, useHistory } from 'react-router-dom';
import defaultProfilePhoto from '../assets/default-profile.png'
import styled from "styled-components";
import axios from 'axios';
import ClientPhoto from "./ClientPhoto";
import { Button } from "../styled-components/Buttons";

const ButtonDiv = styled.div`
  margin: 0 5rem;
  justify-content: space-around;
`;


const CardDetails = styled.div`
    background-color: white;
    margin: 4rem 1rem; 
    border-radius: 10px;
    overflow: clip;  
`

const Profile = styled.div`
    background-color: var(--light-blue);
    margin: 2rem 5rem;
    border-radius: 15px;
    
`

function ClientChart() {
    const { id } = useParams();
    const [client, setClient] = useState([])
    const {firstname, lastname, image, county, isActive, funding_id, age, gender, race, ethnicity, street_address, city, state, zip, case_manager, funding} = client
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

    function handleAssessmentClick() {
        history.push(`/assessment/${id}`)
    }

    function handleUpdateFileCLick() {
        history.push(`/client-details/${id}`)
    }

    return(
        <div >
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
                <ButtonDiv className="flex">
                    <Button style={{padding: "2rem"}} className="no-margin font-sort-mill-goudy" onClick={handleUpdateFileCLick}>Client Details</Button>
                    <Button className="no-margin font-sort-mill-goudy" onClick={handleTreatmentPlanClick}>Treatment Plan</Button>
                    <Button className="no-margin font-sort-mill-goudy" onClick={handleProgressNoteClick}>Progress Notes</Button>
                    <Button className="no-margin font-sort-mill-goudy" onClick={handleAssessmentClick}>Assessments</Button>
                </ButtonDiv> 
        </div>
    )
}

export default ClientChart