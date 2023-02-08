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

function PerceptionOfCaretCard ({ poc }) {
    const {poc_one, poc_two, poc_three, poc_four, poc_five, poc_six, poc_seven, poc_eight, poc_nine, poc_ten, poc_eleven, poc_twelve, poc_additional_comments, length_of_service, date, firstname, lastname} = poc
    const [expandA, setExpandA] = useState(false)
    function handleExpandA () {
        setExpandA(!expandA)
    }

    return (
        <div className="flex column">
            <Card >
                <div  >
                    <h3>Perception of Care</h3>
                    <h4>{date}</h4>
                    
                </div>
                {expandA === false ? (
                    <button onClick={handleExpandA}>View Assessment</button>
                ) : (
                <>
                    <button onClick={handleExpandA}>Close Details</button>
                        <h4>{`${firstname} ${lastname}`}</h4>
                        <div style={{border:"solid", borderWidth:"thin", padding:"5px", margin: "5px"}}>
                            <label>How long have you received services with us?</label> 
                            <p>{length_of_service}</p>
                        </div>
                        <h4>As a direct result of the services I recived here:</h4>
                        <ol>
                            <li>
                                <label>I am getting along better with my family.</label>
                                <p>{poc_one}</p>
                            </li>
                            <li>
                                <label>I do better in school and/or work.</label>
                                <p>{poc_two}</p>
                            </li>
                            <li>
                                <label>My housing situation has improved.</label>
                                <p>{poc_three}</p>
                            </li>
                            <li>
                                <label>I am better able to do things that I want to do.</label>
                                <p>{poc_four}</p>
                            </li>
                            <li>
                                <label>I am better able to deal with crisis.</label>
                                <p>{poc_five}</p>
                            </li>
                            <li>
                                <label>I do better in social situations.</label>
                                <p>{poc_six}</p>
                            </li>
                            <li>
                                <label>I have people with whom I can do positive things.</label>
                                <p>{poc_seven}</p>
                            </li>
                            <li>
                                <label>I do things that are more meaningful to me.</label>
                                <p>{poc_eight}</p>
                            </li>
                            <li>
                                <label>I have learned to use coping mechanisms other than alcohol and/or other drugs.</label>
                                <p>{poc_nine}</p>
                            </li>
                            <li>
                                <label>In a crisis, I would have the support I need from family or friends.</label>
                                <p>{poc_ten}</p>
                            </li>
                            <li>
                                <label>Staff welcome me and treat me with respect.</label>
                                <p>{poc_eleven}</p>
                            </li>
                            <li>
                                <label>Staff are sensitive to my cultural background.</label>
                                <p>{poc_twelve}</p>
                            </li>
                        </ol>
                        <div style={{border:"solid", borderWidth:"thin", padding:"5px", margin: "5px"}}>
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