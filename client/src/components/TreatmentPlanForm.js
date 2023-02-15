import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "../styled-components/Buttons";
import { FormContainer } from "../styled-components/Forms";
import { Input, Select } from "../styled-components/input";
import { Label } from "../styled-components/Label";
import { Textbox } from "../styled-components/Textbox";

function TreatmentPlanForm({onCloseForm, client, onUpdateTP}) {
    const {firstname, lastname, id} = client
    const [formData, setFormData] = useState({
        firstname: firstname,
        lastname: lastname,
        date: "",
        goals: "",
        specific_objective: "",
        interventions: "",
        strengths: "",
        barriers: "",
        client_id: id,
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
        .then((data) => {
            onUpdateTP(data)
            onCloseForm()
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
            <FormContainer style={{backgroundColor: "var(--light-blue)"}}>
                <h2 className="center">Treatment Plan Form</h2>
                <div style={{margin:"2rem 2rem"}}>
                    <form onSubmit={handleSubmit}>
                        <Label>Date:</Label>
                        <Input required name="date" type="date" onChange={onFormChange}></Input>
                        <Label>Client ID:</Label>
                        <Input required defaultValue={client.id} readOnly name="client_id" min="0" type="number" onChange={onFormChange}></Input>
                        <br/>
                        <Label>First Name:</Label>
                        <Input required readOnly defaultValue={client.firstname}  name="firstname" onChange={onFormChange}></Input>
                        <br/>
                        <Label>Last Name:</Label>
                        <Input required readOnly defaultValue={client.lastname}  name="lastname" onChange={onFormChange}></Input>
                        <br/>
                        <Label>Strengths:</Label>
                        <br/>
                        <Textbox required cols={100} type="text" name="strengths" onChange={onFormChange}></Textbox>
                        <br/>
                        <Label>Barriers:</Label>
                        <br/>
                        <Textbox required cols={100} type="text" name="barriers" onChange={onFormChange}></Textbox>
                        <br/>
                        <Label>Goals:</Label>
                        <br/>
                        <Textbox required cols={100} type="text" name="goals" onChange={onFormChange}></Textbox>
                        <br/>
                        <Label>Specific Objectives:</Label>
                        <br/>
                        <Textbox required cols={100} type="text" name="specific_objective" onChange={onFormChange}></Textbox>
                        <br/>
                        <Label>Interventions:</Label>
                        <br/>
                        <Textbox required cols={100} type="text" name="interventions" onChange={onFormChange}></Textbox>
                        <br/>
                        <h3>Staff Completing Form</h3>
                        <Label>Name & Credential:</Label>
                        <Input required name="case_manager" onChange={onFormChange}></Input>
                        <Label>Today's Date:</Label>
                        <Input required name="date_of_completion" type="date" onChange={onFormChange}></Input>
                        <br/>
                        <Button >Create Treatment Plan</Button>
                    </form>
                </div>
            </FormContainer>
        </div>
    )

}

export default TreatmentPlanForm