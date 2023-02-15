import styled from "styled-components"
import { useHistory } from 'react-router-dom';
import {useState} from 'react'
import { Button } from "../styled-components/Buttons";


const Card = styled.li`
  border: 1px solid;
  flex-wrap: wrap;
  border-radius: 10px;
  background-color: var(--light-blue);
  box-shadow: 0px 0px 2px 2px;
  max-height: 100rem;
  min-height: 10rem;
  overflow: clip;
  list-style-type: none;
  margin-bottom: 2rem 
`;

const Li = styled.li`
    margin-left: 5rem
`

function PerceptionOfCaretCard ({ poc }) {
    const {poc_one, poc_two, poc_three, poc_four, poc_five, poc_six, poc_seven, poc_eight, poc_nine, poc_ten, poc_eleven, poc_twelve, poc_additional_comments, length_of_service, date, firstname, lastname} = poc
    const [expandA, setExpandA] = useState(false)
    
    function handleExpandA () {
        setExpandA(!expandA)
    }

    return (
        <div className="flex column">
            <Card  >
                <div  className="center" >
                    <h3>Perception of Care</h3>
                    <h4>{date}</h4>  
                </div>
                {expandA === false ? (
                    <div className="center">
                        <Button className="center" onClick={handleExpandA}>View Assessment</Button>
                    </div>
                    
                ) : (
                <>
                    <div className="center">
                        <Button  onClick={handleExpandA}>Close Details</Button>
                    </div>
                    <div>
                        <div style={{ margin: "0 5rem 1rem", backgroundColor: "white", borderRadius:'10px', padding:'10px'}}>
                            <h4>{`${firstname} ${lastname}`}</h4>
                        </div>
                        
                        <div style={{ padding:"5px", margin: "0 5rem", backgroundColor: "white", borderRadius:'10px', padding:'10px'}}>
                            <label>How long have you received services with us?</label> 
                            <p>{length_of_service}</p>
                        </div>
                        <div style={{marginLeft: "5rem"}}>
                            <h4>As a direct result of the services I recived here:</h4>
                        </div>
                        <ol style={{margin: "0 5rem", backgroundColor: "white", borderRadius:'10px', padding:'10px'}}>
                            <Li>
                                <label>I am getting along better with my family.</label>
                                <p>{poc_one}</p>
                            </Li>
                            <Li>
                                <label>I do better in school and/or work.</label>
                                <p>{poc_two}</p>
                            </Li>
                            <Li>
                                <label>My housing situation has improved.</label>
                                <p>{poc_three}</p>
                            </Li>
                            <Li>
                                <label>I am better able to do things that I want to do.</label>
                                <p>{poc_four}</p>
                            </Li>
                            <Li>
                                <label>I am better able to deal with crisis.</label>
                                <p>{poc_five}</p>
                            </Li>
                            <Li>
                                <label>I do better in social situations.</label>
                                <p>{poc_six}</p>
                            </Li>
                            <Li>
                                <label>I have people with whom I can do positive things.</label>
                                <p>{poc_seven}</p>
                            </Li>
                            <Li>
                                <label>I do things that are more meaningful to me.</label>
                                <p>{poc_eight}</p>
                            </Li>
                            <Li>
                                <label>I have learned to use coping mechanisms other than alcohol and/or other drugs.</label>
                                <p>{poc_nine}</p>
                            </Li>
                            <Li>
                                <label>In a crisis, I would have the support I need from family or friends.</label>
                                <p>{poc_ten}</p>
                            </Li>
                            <Li>
                                <label>Staff welcome me and treat me with respect.</label>
                                <p>{poc_eleven}</p>
                            </Li>
                            <Li>
                                <label>Staff are sensitive to my cultural background.</label>
                                <p>{poc_twelve}</p>
                            </Li>
                        </ol>

                    </div>
                    <div style={{ padding:"5px", margin: "1rem 5rem", backgroundColor: "white", borderRadius:'10px', padding:'10px'}}>
                            <label>Please inculde any additional comments: </label>
                            <p>{poc_additional_comments}</p>
                    </div>                   
                </>
                )}
            </Card>
        </div>
    )
}

export default PerceptionOfCaretCard