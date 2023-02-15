import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "../styled-components/Buttons";
import { FormContainer } from "../styled-components/Forms";
import { Label } from "../styled-components/Label";
import { Textbox } from "../styled-components/Textbox";
import styled from "styled-components";

const Input = styled.input`
  border-radius: 6px;
  border: 1px solid transparent;
  border-color: #dbdbdb;
  -webkit-appearance: none;
  font-size: 1rem;
  line-height: 1.5;
  padding: 4px;
  margin: 20px 0;
`;

const Divider = styled.hr`
    border: none;
    border-bottom: 3px solid white ;
    margin: 16px 0;
`;


const TopInputs = styled.div`
    justify-content: space-around; 
    background-color: var(--light-grey); 
    border-radius: 10px; 
    padding: 20px 10px;
    margin: 2rem 4rem
`

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
                        <TopInputs className="flex row">
                            <div style={{display:"inline-grid"}}>
                                <Label>Date:</Label>
                                <Input required name="date" type="date" onChange={onFormChange}></Input>
                                <Label>First Name:</Label>
                                <Input required readOnly defaultValue={client.firstname}  name="firstname" onChange={onFormChange}></Input>
                            </div>
                            <div style={{display:"inline-grid"}}>
                                <Label>Client ID:</Label>
                                <Input required defaultValue={client.id} readOnly name="client_id" min="0" type="number" onChange={onFormChange}></Input>
                                <Label>Last Name:</Label>
                                <Input required readOnly defaultValue={client.lastname}  name="lastname" onChange={onFormChange}></Input>
                            </div>

                        </TopInputs>
                        <div style={{margin:"0 4rem"}}>
                            <Label>Strengths:</Label>
                            <br/>
                            <Textbox required  type="text" name="strengths" onChange={onFormChange}></Textbox>
                            <br/>
                            <Label>Barriers:</Label>
                            <br/>
                            <Textbox required type="text" name="barriers" onChange={onFormChange}></Textbox>
                            <br/>
                            <Label>Goals:</Label>
                            <br/>
                            <Textbox required type="text" name="goals" onChange={onFormChange}></Textbox>
                            <br/>
                            <Label>Specific Objectives:</Label>
                            <br/>
                            <Textbox required type="text" name="specific_objective" onChange={onFormChange}></Textbox>
                            <br/>
                            <Label>Interventions:</Label>
                            <br/>
                            <Textbox required type="text" name="interventions" onChange={onFormChange}></Textbox>
                            <br/>
                            <h3>Staff Completing Form</h3>
                            <Label>Name & Credential:</Label>
                            <Input required name="case_manager" onChange={onFormChange}></Input>
                            <Label>Today's Date:</Label>
                            <Input required name="date_of_completion" type="date" onChange={onFormChange}></Input>
                            <br/>
                            <Button >Create Treatment Plan</Button>
                        </div>
                    </form>
                </div>
            </FormContainer>
        </div>
    )

}

export default TreatmentPlanForm