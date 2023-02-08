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

function SampleAssessmentCard ({ sa }) {
    const {sa_one, sa_two, sa_three, sa_four, sa_five, sa_total, date, firstname, lastname} = sa
    const [expandA, setExpandA] = useState(false)
    function handleExpandA () {
        setExpandA(!expandA)
    }
    
    return (
        <div className="flex column">
            <Card >
                <div  >
                    <h3>Sample Assessment</h3>
                    <h4>{date}</h4> 
                </div>
                {expandA === false ? (
                    <button onClick={handleExpandA}>View Assessment</button>
                ) : (
                <>
                    <button onClick={handleExpandA}>Close Details</button>
                        <h4>{`${firstname} ${lastname}`}</h4>
                        <h4>Within the last 7 days:</h4>
                        <ol>
                            <li>
                            <label>I feel anxious or nervous.</label>
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
                            </li>
                            <li>
                            <label>I am sad or unhappy.</label>
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
                            </li>
                            <li>
                            <label>I withdraw from my friends or family.</label>
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
                            </li>
                            <li>
                            <label>I don't have much energy.</label>
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
                            </li>
                            <li>
                            <label>I am hopeful</label>
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
                            </li>
                        </ol>
                        <h3>{`Total Distress Level: ${sa_total} / 18 `}</h3>
                </>
                )}
            </Card>
        </div>
    )
}

export default SampleAssessmentCard