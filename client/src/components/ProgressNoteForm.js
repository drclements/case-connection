import { useState } from "react";
import { useHistory } from "react-router-dom";

function ProgressNoteForm({onCloseForm, onNewProgressNote}) {
    const history = useHistory()
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        date_of_service: "",
        service_provided: "",
        location: "",
        client_id: "", 
        chart_id: "",
        code_of_service: "", 
        date_of_note: "",
        contact_type: "", 
        service_time: 0, 
        travel_time: 0, 
        documentation_time: 0,
        total_time: 0,
        treatment_goals: "",
        session_focus: "",
        interventions: "",
        client_response: "",
        plan: "", 
        staff_name: "" 
    })
 


    function onFormChange(e) {
        setFormData({
            ...formData, [e.target.name]: e.target.value,
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch('/progress_notes', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify(formData)
        }).then((r) => r.json())
        .then((data) => {
            onNewProgressNote(data)
        })
        e.target.reset()
    }

    function onFormChange(e) {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      }

    return (
        <div>
            <h2>New Progress Note</h2>
            <form onSubmit={handleSubmit}>
                <label>Date of Service:</label>
                <input name="date_of_service" type="date" onChange={onFormChange}></input>
                <label>Mentee ID:</label>
                <input name="client_id" min="0" type="number" onChange={onFormChange}></input>
                <br/>
                <label>First Name:</label>
                <input name="firstname" onChange={onFormChange}></input>
                <label>Last Name:</label>
                <input name="lastname" onChange={onFormChange}></input>
                <br/>
                <label>Service Provided:</label>
                <input name="service_provided" onChange={onFormChange}></input>
                <label>Service Code:</label>
                <input name="code_of_service" onChange={onFormChange}></input>
                <br/>
                <label>Contact Type:</label>
                <select  name="contact_type"  onChange={onFormChange}>
                <option value="">Select One</option>
                    <option value="In Person">In Person</option>
                    <option value="Video Call">Video Call</option>
                    <option value="Phone">Phone</option>
                </select>
                <label>Location:</label>
                <select  name="location"  onChange={onFormChange}>
                <option value="">Select One</option>
                    <option value="Home">Home</option>
                    <option value="Field">Field</option>
                    <option value="Community">Community</option>
                    <option value="School">School</option>
                    <option value="Telehealth">Telehealth</option>
                </select>
                <br/>
                <label>Service Time:</label>
                <input name="service_time" onChange={onFormChange}></input>
                <label>Travel Time:</label>
                <input name="travel_time" onChange={onFormChange}></input>
                <br/>
                <label>Documentation Time:</label>
                <input name="documentation_time" onChange={onFormChange}></input>
                <label>Total Time:</label>
                <input name="total_time" onChange={onFormChange}></input>
                <br/>
                <label><strong>Treatment Goals</strong></label>
                <br/>
                <textarea name="treatment_goals" onChange={onFormChange}></textarea>
                <br/>
                <label><strong>Session Focus</strong></label>
                <br/>
                <textarea name="session_focus" onChange={onFormChange}></textarea>
                <br/>
                <label><strong>Interventions</strong></label>
                <br/>
                <textarea name="interventions" onChange={onFormChange}></textarea>
                <br/>
                <label><strong>Client Response</strong></label>
                <br/>
                <textarea name="client_response" onChange={onFormChange}></textarea>
                <br/>
                <label><strong>Plan</strong></label>
                <br/>
                <textarea name="plan" onChange={onFormChange}></textarea>
                <br/>
                <h3>Staff Completing Form</h3>
                <label>Name & Credential:</label>
                <input name="staff_name" onChange={onFormChange}></input>
                <br/>
                <button >Create Progress Note</button>
            </form>
        </div>
    )

}

export default ProgressNoteForm