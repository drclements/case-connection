import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { Button } from '../styled-components/Buttons'

const ProgressNoteView = () => {
    const params = useParams()
    const history = useHistory()
    const {id} = params
    const [progressNote, setProgressNote] = useState([])
    const { firstname, lastname, date_of_service, service_provided, location, chart_id, code_of_service, date_of_note, contact_type, service_time, travel_time, documentation_time, total_time, treatment_goals, session_focus, interventions, client_response, plan, staff_name, created_at } = progressNote

    useEffect(() => {
        fetch(`/progress_notes/${id}`)
        .then(res => res.json())
        .then(data => setProgressNote(data))
    }, [])


  return (
    <div style={{margin: "4rem"}}>
        <Button onClick={() =>history.goBack()}>Back</Button>
        <div>
        <h4><strong>Date of Service: </strong>{date_of_service}</h4>
        <h4>{`${firstname} ${lastname}`}</h4>
        <div className="flex row">
            <p><strong>Service Provided: </strong> {service_provided}</p>
            <p style={{marginLeft:"2rem"}}><strong>Service Code: </strong> {code_of_service}</p>
        </div>
        <div className="flex row">
            <p><strong>Contact Type:</strong> {contact_type}</p>
            <p style={{marginLeft:"2rem"}}><strong>Location:</strong> {location}</p>
        </div>
        <div className="flex row">
            <p><strong>Service Time:</strong> {service_time}</p>
            <p style={{marginLeft:"5rem"}}><strong>Travel Time:</strong> {travel_time}</p>
        </div>
        <div className="flex row">
            <p><strong>Documentation Time:</strong> {documentation_time}</p>
            <p style={{marginLeft:"2rem"}}><strong>Total Time:</strong> {total_time}</p>
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
          <label><strong>Staff Name & Credential</strong></label>
          <div>
          <p>{staff_name}</p>
          <p><strong>Submited At:</strong> {created_at}</p>
          </div>
        </div>
    </div>
  )
}

export default ProgressNoteView