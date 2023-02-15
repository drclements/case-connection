import styled from "styled-components"
import { useHistory, useParams } from 'react-router-dom';
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

function ProgressNoteCard ({ progressNote }) {
    
    const history = useHistory()
    const {id, date_of_service } = progressNote
    

    return (
        <div className="flex column">
            <Card style={{backgroundColor: "var(--light-blue)"}} >
                <div className="center font-sort-mill-goudy" >
                    <h3>Progress Note</h3>
                    <h4 style={{fontSize: "20px"}}>{date_of_service}</h4>
                    <Button onClick={()=> history.push(`/view-progress-note/${id}`)}>View Progress Note</Button>
                </div >
            </Card>
        </div>
    )
}

export default ProgressNoteCard