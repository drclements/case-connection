import styled from "styled-components"
import { useHistory } from 'react-router-dom';
import {useState} from 'react'
import { Button } from "../styled-components/Buttons";
import { Label } from "../styled-components/Label";


const Card = styled.li`
  border: 1px solid;
  flex-wrap: wrap;
  border-radius: 10px;
  background-color: var(--light-blue);
  box-shadow: 0px 0px 2px 2px;
  max-height: 100rem;
  min-height: 15rem;
  overflow: clip;
  list-style-type: none;
  margin-left: 10px
`;

const Li = styled.li`
    margin-left: 5rem
`

function SampleAssessmentCard ({ sa }) {
    const {sa_one, sa_two, sa_three, sa_four, sa_five, sa_total, date, firstname, lastname} = sa
    const [expandA, setExpandA] = useState(false)
    function handleExpandA () {
        setExpandA(!expandA)
    }
    
    return (
        <div style={{margin: "2rem 0"}} className="flex column">
            <Card >
                <div className="center" >
                    <h3>Sample Assessment</h3>
                    <h4>{date}</h4> 
                </div>
                {expandA === false ? (
                    <div className="center">
                        <Button className="center" onClick={handleExpandA}>View Assessment</Button>
                    </div>
                    
                ) : (
                <div >
                    <div className="center">
                        <Button  onClick={handleExpandA}>Close Details</Button>
                    </div>
                    <div style={{ margin: "0 5rem 1rem", backgroundColor: "white", borderRadius:'10px', padding:'10px'}}>
                            <h4 style={{marginLeft: "3rem"}} >{`${firstname} ${lastname}`}</h4>
                    </div>
                            <h4 style={{marginLeft: "5rem"}}>Within the last 7 days:</h4>
                        <ol style={{margin: "0 5rem", backgroundColor: "white", borderRadius:'10px', padding:'10px'}}>
                            <Li>
                            <Label>I feel anxious or nervous.</Label>
                                <p>{sa_one === 4 && (
                                    "Always")}
                                    {sa_one === 3 && (
                                    "Frequently")}
                                    {sa_one === 2 && (
                                    "Sometimes")}
                                    {sa_one === 1 && (
                                    "Rarely")}
                                    {sa_one === 0 && (
                                    "Never")}
                                </p>
                            </Li>
                            <Li>
                            <Label>I am sad or unhappy.</Label>
                            <p>{sa_two === 4 && (
                                    "Always")}
                                    {sa_two === 3 && (
                                    "Frequently")}
                                    {sa_two === 2 && (
                                    "Sometimes")}
                                    {sa_two === 1 && (
                                    "Rarely")}
                                    {sa_two === 0 && (
                                    "Never")}
                                </p>
                            </Li>
                            <Li>
                            <Label>I withdraw from my friends or family.</Label>
                            <p>{sa_three === 4 && (
                                    "Always")}
                                    {sa_three === 3 && (
                                    "Frequently")}
                                    {sa_three === 2 && (
                                    "Sometimes")}
                                    {sa_three === 1 && (
                                    "Rarely")}
                                    {sa_three === 0 && (
                                    "Never")}
                                </p>
                            </Li>
                            <Li>
                            <Label>I don't have much energy.</Label>
                            <p>{sa_four === 4 && (
                                    "Always")}
                                    {sa_four === 3 && (
                                    "Frequently")}
                                    {sa_four === 2 && (
                                    "Sometimes")}
                                    {sa_four === 1 && (
                                    "Rarely")}
                                    {sa_four === 0 && (
                                    "Never")}
                                </p>
                            </Li>
                            <Li>
                            <Label>I am hopeful</Label>
                            <p>{sa_five === 2 && (
                                    "Always")}
                                    {sa_five === 1 && (
                                    "Frequently")}
                                    {sa_five === 0 && (
                                    "Sometimes")}
                                    {sa_five === -1 && (
                                    "Rarely")}
                                    {sa_five === -2 && (
                                    "Never")}
                                </p>
                            </Li>
                        </ol>
                        <div style={{margin:"1rem 5rem", backgroundColor:"white", padding:"10px", borderRadius:"10px"}}>
                            <h3 style={{marginLeft: "3rem"}}>{`Total Distress Level: ${sa_total} / 18 `}</h3>
                        </div>
                        
                </div>
                )}
            </Card>
        </div>
    )
}

export default SampleAssessmentCard