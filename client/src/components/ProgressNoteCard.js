import styled from "styled-components"
import { useHistory } from 'react-router-dom';
import {useState} from 'react'


const Card = styled.li`
  border: 1px solid;
 
  flex-wrap: wrap;
  border-radius: 10px;
  background-color: var(--white);
  box-shadow: 0px 0px 2px 2px;
  max-height: 100rem;
  min-height: 15rem;
  overflow: clip;
  list-style-type: none;
  margin-left: 10px
`;

function ProgressNoteCard ({ progressNote }) {
    const {firstname, lastname, date_of_service, service_provided, location, chart_id, code_of_service, date_of_note, contact_type, service_time, travel_time, documentation_time, total_time, treatment_goals, session_focus, interventions, client_response, plan, staff_name, created_at } = progressNote
    const [expandPN, setExpandPN] = useState(false)
    function handleExpandPN () {
        setExpandPN(!expandPN)
    }

    return (
        <div className="flex column">
            <Card >
                <div  >
                    <h3>Progress Note</h3>
                    <h4>{date_of_service}</h4>
                    
                </div>
                {expandPN === false ? (
                    <button onClick={handleExpandPN}>View Progress Note</button>
                ) : (
                <>
                    <button onClick={handleExpandPN}>Close Details</button>
                        <h4>{`${firstname} ${lastname}`}</h4>
                    <div className="flex row">
                        <p><strong>Service Provided:</strong> {service_provided}</p>
                        <p><strong>Service Code:</strong> {code_of_service}</p>
                    </div>
                    <div className="flex row">
                        <p><strong>Contact Type:</strong> {contact_type}</p>
                        <p><strong>Location:</strong> {location}</p>
                    </div>
                    <div className="flex row">
                        <p><strong>Service Time:</strong> {service_time}</p>
                        <p><strong>Travel Time:</strong> {travel_time}</p>
                    </div>
                    <div className="flex row">
                        <p><strong>Documentation Time:</strong> {documentation_time}</p>
                        <p><strong>Total Time:</strong> {total_time}</p>
                    </div>
                    <div>
                        <label><strong>Treatment Goals</strong></label>
                        <p>{treatment_goals}</p>
                        <br />
                        <label><strong>Session Focus</strong></label>
                        <p>{session_focus}</p>
                        <br />
                        <label><strong>Interventions</strong></label>
                        <p>{interventions}</p>
                        <br />
                        <label><strong>Client Response</strong></label>
                        <p>{client_response}</p>
                        <br />
                        <label><strong>Plan</strong></label>
                        <p>{plan}</p>
                        <br />
                    </div>
                    <div className="flex row">
                        <p><strong>Staff Completing:</strong> {staff_name}</p>
                        <p><strong>Note Date:</strong> {created_at}</p>
                    </div>
                </>
                )}
            </Card>

        </div>
    )
}

export default ProgressNoteCard