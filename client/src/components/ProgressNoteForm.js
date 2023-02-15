import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "../styled-components/Buttons";
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

const Select = styled.select `
border-radius: 6px;
  border: 1px solid transparent;
  border-color: #dbdbdb;
  font-size: 1rem;
  line-height: 1.5;
  padding: 7px;

`

const TopInputs = styled.div`
    justify-content: space-around; 
    background-color: var(--light-grey); 
    border-radius: 10px; 
    padding: 20px 10px;
    margin: 2rem 4rem
`

const FormContainer = styled.div`
  border-radius: 10px;
  padding-top: 1rem;
  
`;

const Divider = styled.hr`
    border: none;
    border-bottom: 3px solid white ;
    margin: 16px 0;
`;

function ProgressNoteForm({onCloseForm, onNewProgressNote, client}) {
    const history = useHistory()
    const {id, firstname, lastname} = client
    const [formData, setFormData] = useState({
        firstname: firstname,
        lastname: lastname,
        date_of_service: "",
        service_provided: "",
        location: "",
        client_id: id, 
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
        <div style={{marginBottom:'20px'}}>
            <FormContainer style={{backgroundColor: "var(--light-blue)"}}>
            <h2 className="center">New Progress Note</h2>
            <div style={{margin:"2rem 2rem"}}>
            <form onSubmit={handleSubmit}>
                <TopInputs className="flex row">
                    <div style={{display:"inline-grid"}}>
                        <Label>Date of Service: </Label>
                        <Input className="center" style={{minWidth:"20rem"}} name="date_of_service" type="date" onChange={onFormChange}></Input>
                        <Label>First Name: </Label>
                        <Input required defaultValue={firstname} name="firstname" onChange={onFormChange}></Input>
                        <Label>Service Provided: </Label>
                        <Input required name="service_provided" onChange={onFormChange}></Input>
                        <Label>Contact Type:</Label>
                        <Select required  name="contact_type"  onChange={onFormChange}>
                        <option value="">Select One</option>
                            <option value="In Person">In Person</option>
                            <option value="Video Call">Video Call</option>
                            <option value="Phone">Phone</option>
                        </Select>
                    </div>
                    <div style={{ display:"inline-grid"}}>
                        <Label style={{minWidth:"20rem"}}>Mentee ID: </Label>
                        <Input className="center" readOnly defaultValue={id} name="client_id" min="0" type="number" onChange={onFormChange}></Input>
                        <Label>Last Name: </Label>
                        <Input required defaultValue={lastname} name="lastname" onChange={onFormChange}></Input>
                        <Label>Service Code: </Label>
                        <Input placeholder="If Applicable" name="code_of_service" onChange={onFormChange}></Input>
                        <Label>Location:</Label>
                        <Select required  name="location"  onChange={onFormChange}>
                        <option value="">Select One</option>
                            <option value="Home">Home</option>
                            <option value="Field">Field</option>
                            <option value="Community">Community</option>
                            <option value="School">School</option>
                            <option value="Telehealth">Telehealth</option>
                        </Select>
                    </div>
                </TopInputs>
                <Divider/>
                <h4 className="center no-margin">Billable Time in Minutes</h4>
                <TopInputs className="flex row">
                    <div style={{display:"inline-grid"}}>
                        <Label style={{minWidth:"20rem"}}>Service Time:</Label>
                        <Input required name="service_time" onChange={onFormChange}></Input>
                        <Label>Documentation Time:</Label>
                        <Input required name="documentation_time" onChange={onFormChange}></Input>
                    </div>
                    <div style={{display:"inline-grid"}}>
                        <Label style={{minWidth:"20rem"}}>Travel Time:</Label>
                        <Input required name="travel_time" onChange={onFormChange}></Input>
                        <Label>Total Time:</Label>
                        <Input required name="total_time" onChange={onFormChange}></Input>
                    </div>
                </TopInputs>
                <div style={{margin:"0 4rem"}}>
                    <Label><strong>Treatment Goals</strong></Label>
                    <br/>
                    <Textbox required cols={112} name="treatment_goals" onChange={onFormChange}></Textbox>
                    <br/>
                    <Label><strong>Session Focus</strong></Label>
                    <br/>
                    <Textbox required cols={112} name="session_focus" onChange={onFormChange}></Textbox>
                    <br/>
                    <Label><strong>Interventions</strong></Label>
                    <br/>
                    <Textbox required cols={112} name="interventions" onChange={onFormChange}></Textbox>
                    <br/>
                    <Label><strong>Client Response</strong></Label>
                    <br/>
                    <Textbox required cols={112} name="client_response" onChange={onFormChange}></Textbox>
                    <br/>
                    <Label><strong>Plan</strong></Label>
                    <br/>
                    <Textbox required cols={112} name="plan" onChange={onFormChange}></Textbox>
                    <br/>
                    <h3>Staff Completing Form</h3>
                    <Label>Name & Credential: </Label>
                    <Input required style={{minWidth:"20rem"}} name="staff_name" onChange={onFormChange}></Input>
                </div>
                <div className="center">
                    <Button  >Create Progress Note</Button>
                </div>
                
            </form>
            </div>
            </FormContainer>
        </div>
    )

}

export default ProgressNoteForm