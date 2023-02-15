import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { Button } from '../styled-components/Buttons'
import styled from 'styled-components'


const LoadingMessage = styled.h3`
    text-align: center;
    margin-top: 3rem
`

const TreatmentPlanView = () => {
    const params = useParams()
    const history = useHistory()
    const [isLoading, setIsLoading] = useState(false)
    const {id} = params
    const [treatmentPlan, setTreatmentPlan] = useState([])
    const { firstname, lastname, date, goals, specific_objective, interventions, strengths, barriers, case_manager, date_of_completion} = treatmentPlan

    useEffect(() => {
        setIsLoading(true)
        fetch(`/treatment_plans/${id}`)
        .then(res => res.json())
        .then(data => {
          setTreatmentPlan(data)
          setIsLoading(false)
        })
    }, [])

  return (
    <div style={{margin: "4rem"}}>
        <Button onClick={() =>history.goBack()}>Back</Button>
        {isLoading === true ? (
          <LoadingMessage><strong>Loading...</strong></LoadingMessage>
        ) : (
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

        )}
    </div>
  )
}

export default TreatmentPlanView