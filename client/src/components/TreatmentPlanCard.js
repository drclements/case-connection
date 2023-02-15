import styled from "styled-components"
import { useHistory } from 'react-router-dom';
import {useState} from 'react'
import { Button } from "../styled-components/Buttons";


const Card = styled.li`
  border: 1px solid;
  border-radius: 10px;
  background-color: var(--white);
  box-shadow: 0px 0px 2px 2px;
  min-height: 10rem;
  min-width: 15rem;
  list-style-type: none;
  margin-bottom: 2rem
`;


function TreatmentPlanCard ({ treatmentPlan }) {
    const history = useHistory()
    const {id, date} = treatmentPlan

    return (
        <div className="flex">
            <Card style={{backgroundColor: "var(--light-blue)"}}>
                <div  className="center font-sort-mill-goudy" >
                    <h3 >Treatment Plan</h3>
                    <h4 style={{fontSize: "20px"}} >{date}</h4>
                    <Button  onClick={()=> history.push(`/view-treatment-plan/${id}`)}>View Plan Details</Button>
                </div>
            </Card>
        </div>
    )
}

export default TreatmentPlanCard