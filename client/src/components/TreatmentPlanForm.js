import { useState } from "react";
import { useHistory } from "react-router-dom";

function TreatmentPlanForm({onCloseForm}) {
  const history = useHistory()
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        date: "",
        goals: "",
        specific_objective: "",
        interventions: "",
        strengths: "",
        barriers: "",
        client_id: "",
        case_manager: "",
        date_of_completion: "",  
    })
 


    function onFormChange(e) {
        setFormData({
            ...formData, [e.target.name]: e.target.value,
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch('/treatment_plans', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify(formData)
        }).then((r) => r.json())
        .then(() => {
            history.push('')
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
            <h2>Treatment Plan Form</h2>
            <form onSubmit={handleSubmit}>
                <label>Date:</label>
                <input name="date" type="date" onChange={onFormChange}></input>
                <label>Client ID:</label>
                <input name="client_id" min="0" type="number" onChange={onFormChange}></input>
                <br/>
                <label>First Name:</label>
                <input name="firstname" onChange={onFormChange}></input>
                <label>Last Name:</label>
                <input name="lastname" onChange={onFormChange}></input>
                <br/>
                <label>Strengths:</label>
                <br/>
                <textarea type="text" name="strengths" onChange={onFormChange}></textarea>
                <br/>
                <label>Barriers:</label>
                <br/>
                <textarea type="text" name="barriers" onChange={onFormChange}></textarea>
                <br/>
                <label>Goals:</label>
                <br/>
                <textarea type="text" name="goals" onChange={onFormChange}></textarea>
                <br/>
                <label>Specific Objectives:</label>
                <br/>
                <textarea type="text" name="specific_objective" onChange={onFormChange}></textarea>
                <br/>
                <label>Interventions:</label>
                <br/>
                <textarea type="text" name="interventions" onChange={onFormChange}></textarea>
                <br/>
                <h3>Staff Completing Form</h3>
                <label>Name & Credential:</label>
                <input name="case_manager" onChange={onFormChange}></input>
                <label>Today's Date:</label>
                <input name="date_of_completion" type="date" onChange={onFormChange}></input>
                <br/>
                <button >Create Treatment Plan</button>
            </form>
        </div>
    )

}

export default TreatmentPlanForm