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

const Image = styled.img`
  width: 200x;
  height: 200px;
  object-fit: cover;
  border-radius: 50%;
  
`;

function TreatmentPlanCard ({ treatmentPlan }) {
    const {firstname, lastname, date, goals, specific_objective, interventions, strengths, barriers, case_manager, date_of_completion} = treatmentPlan
    const [expandTP, setExpandTP] = useState(false)
    console.log(specific_objective)
    function handleExpandTP () {
        setExpandTP(!expandTP)
    }

    return (
        <div className="flex column">
            <Card >
                <div  >
                    <h3>Treatment Plan</h3>
                    <h4>{date}</h4>
                    
                </div>
                {expandTP === false ? (
                    <button onClick={handleExpandTP}>View Plan Details</button>
                ) : (
                <>
                    <button onClick={handleExpandTP}>Close Details</button>
                    <div>
                        <h4>{`${firstname} ${lastname}`}</h4>
                        <label><strong>Strengths:</strong></label>
                        <p> {strengths}</p>
                        <label><strong>Barriers:</strong></label>
                        <p> {barriers}</p>
                        <label><strong>Goals:</strong></label>
                        <p> {goals}</p>
                        <label><strong>Objective:</strong></label>
                        <p> {specific_objective}</p>
                        <label><strong>Interventions:</strong></label>
                        <p> {interventions}</p>
                        <br/>
                        <label><strong>Completed By:</strong></label>
                        <p> {case_manager}</p>
                        <p> {date_of_completion}</p>
                    </div>
                </>
                )

                }
            </Card>

        </div>
    )
}

export default TreatmentPlanCard