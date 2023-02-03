import { useState } from "react";
import { useHistory } from "react-router-dom";

function TreatmentPlanForm() {
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

    return (
        <div>
            <form>
                    
            </form>
        </div>
    )

}

export default TreatmentPlanForm