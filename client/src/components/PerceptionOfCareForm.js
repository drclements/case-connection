import { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styled-components/Buttons";
import { Label } from "../styled-components/Label";
import { Textbox } from "../styled-components/Textbox";

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

const Li = styled.li`
    margin: 1rem 4rem;
`

const Divider = styled.hr`
    border: none;
    border-bottom: 3px solid white ;
    margin: 16px 0;
`;

function PerceptionOfCareForm({onCloseForm, onNewPoc, client}) {
    const history = useHistory()
    const {firstname, lastname, id} = client
    const [formData, setFormData] = useState({
        firstname: firstname,
        lastname: lastname,
        date: "",
        client_id: id,
        length_of_service: "", 
        poc_one: "",
        poc_two: "",
        poc_three: "",
        poc_four: "",
        poc_five: "",
        poc_six: "",
        poc_seven: "",
        poc_eight: "",
        poc_nine: "",
        poc_ten: "",
        poc_eleven: "",
        poc_twelve: "",
        poc_additional_comments: ""
    })
 
    console.log(client)

    function onFormChange(e) {
        setFormData({
            ...formData, [e.target.name]: e.target.value,
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch('/perception_of_cares', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify(formData)
        }).then((r) => r.json())
        .then((data) => {
            onNewPoc(data)
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
        <div style={{backgroundColor:"var(--light-blue", padding:"1rem 2rem", borderRadius:"10px", marginBottom:"2rem"}}>
            <h2 className="center"><em>Participant Perception of Care</em></h2>
            <form onSubmit={handleSubmit}>
                <TopInputs className="flex row">
                    <div style={{display:"inline-grid"}}>
                        <Label >Date:</Label>
                        <Input className="center" style={{minWidth:"20rem"}} name="date" type="date" onChange={onFormChange}></Input>
                        <Label>First Name:</Label>
                        <Input defaultValue={firstname} name="firstname" onChange={onFormChange}></Input>
                    </div>
                    <div style={{display:"inline-grid"}}>
                        <Label>Mentee ID:</Label>
                        <Input readOnly defaultValue={id} className="center" style={{minWidth:"20rem"}} name="client_id" min="0" type="number" onChange={onFormChange}></Input>
                        <Label>Last Name:</Label>
                        <Input defaultValue={lastname} name="lastname" onChange={onFormChange}></Input>
                    </div>
                </TopInputs>
                <Divider/>
                <br/>
                <div style={{backgroundColor:"var(--light-grey", padding:"10px", borderRadius:"10px", margin:"0 4rem"}}>
                    <Label style={{padding:"0 25px"}}>How long have you received services with us?</Label>
                    <div style={{margin:".5rem 2rem"}} onChange={onFormChange}>
                        <input name="length_of_service" type="radio" value="Less than 2 months"/> Less than 2 months
                        <input name="length_of_service" type="radio" value="3 - 5 months"/>3 - 5 months
                        <input name="length_of_service" type="radio" value="6 months to 1 year"/>6 months to 1 year
                        <input name="length_of_service" type="radio" value="More than 1 year"/>More than 1 year
                    </div>
                </div>
                <div style={{margin:'0 4rem'}}>
                    <h4>As a direct result of the services I recived here:</h4>
                </div>
                
                <ol style={{backgroundColor:"var(--light-grey", padding:"10px", borderRadius:"10px", margin:"1rem 4rem"}}>
                    <Li>
                        <Label>I am getting along better with my family.</Label>
                        <br/>
                        <div onChange={onFormChange}>
                        <input name="poc_one" type="radio" value="Agree"/> Agree
                        <input name="poc_one" type="radio" value="Neutral"/>Neutral
                        <input name="poc_one" type="radio" value="Disagree"/>Disagree
                        <input name="poc_one" type="radio" value="N/A"/>N/A
                        </div>
                    </Li>
                <br/>
                    <Li>
                    <Label>I do better in school and/or work.</Label>
                        <div onChange={onFormChange}>
                        <input name="poc_two" type="radio" value="Agree"/> Agree
                        <input name="poc_two" type="radio" value="Neutral"/>Neutral
                        <input name="poc_two" type="radio" value="Disagree"/>Disagree
                        <input name="poc_two" type="radio" value="N/A"/>N/A
                        </div>
                    </Li>
                <br/>
                    <Li>
                    <Label>My housing situation has improved.</Label>
                        <div onChange={onFormChange}>
                            <input name="poc_three" type="radio" value="Agree"/> Agree
                            <input name="poc_three" type="radio" value="Neutral"/>Neutral
                            <input name="poc_three" type="radio" value="Disagree"/>Disagree
                            <input name="poc_three" type="radio" value="N/A"/>N/A
                        </div>
                    </Li>
                <br/>
                    <Li>
                    <Label>I am better able to do things that I want to do.</Label>
                        <div onChange={onFormChange}>
                            <input name="poc_four" type="radio" value="Agree"/> Agree
                            <input name="poc_four" type="radio" value="Neutral"/>Neutral
                            <input name="poc_four" type="radio" value="Disagree"/>Disagree
                            <input name="poc_four" type="radio" value="N/A"/>N/A
                        </div>
                    </Li>
                <br/>
                    <Li>
                    <Label>I am better able to deal with crisis.</Label>
                        <div onChange={onFormChange}>
                            <input name="poc_five" type="radio" value="Agree"/> Agree
                            <input name="poc_five" type="radio" value="Neutral"/>Neutral
                            <input name="poc_five" type="radio" value="Disagree"/>Disagree
                            <input name="poc_five" type="radio" value="N/A"/>N/A
                        </div>
                    </Li>
                <br/>
                    <Li>
                    <Label>I do better in social situations.</Label>
                        <div onChange={onFormChange}>
                            <input name="poc_six" type="radio" value="Agree"/> Agree
                            <input name="poc_six" type="radio" value="Neutral"/>Neutral
                            <input name="poc_six" type="radio" value="Disagree"/>Disagree
                            <input name="poc_six" type="radio" value="N/A"/>N/A
                        </div>
                    </Li>
                <br/>
                <Li>
                    <Label>I have people with whom I can do positive things.</Label>
                        <div onChange={onFormChange}>
                            <input name="poc_seven" type="radio" value="Agree"/> Agree
                            <input name="poc_seven" type="radio" value="Neutral"/>Neutral
                            <input name="poc_seven" type="radio" value="Disagree"/>Disagree
                            <input name="poc_seven" type="radio" value="N/A"/>N/A
                        </div>
                    </Li>
                <br/>
                <Li>
                    <Label>I do things that are more meaningful to me.</Label>
                        <div onChange={onFormChange}>
                            <input name="poc_eight" type="radio" value="Agree"/> Agree
                            <input name="poc_eight" type="radio" value="Neutral"/>Neutral
                            <input name="poc_eight" type="radio" value="Disagree"/>Disagree
                            <input name="poc_eight" type="radio" value="N/A"/>N/A
                        </div>
                    </Li>
                <br/>
                <Li>
                    <Label>I have learned to use coping mechanisms other than alcohol and/or other drugs.</Label>
                        <div onChange={onFormChange}>
                            <input name="poc_nine" type="radio" value="Agree"/> Agree
                            <input name="poc_nine" type="radio" value="Neutral"/>Neutral
                            <input name="poc_nine" type="radio" value="Disagree"/>Disagree
                            <input name="poc_nine" type="radio" value="N/A"/>N/A
                        </div>
                    </Li>
                <br/>
                <Li>
                    <Label>In a crisis, I would have the support I need from family or friends.</Label>
                        <div onChange={onFormChange}>
                            <input name="poc_ten" type="radio" value="Agree"/> Agree
                            <input name="poc_ten" type="radio" value="Neutral"/>Neutral
                            <input name="poc_ten" type="radio" value="Disagree"/>Disagree
                            <input name="poc_ten" type="radio" value="N/A"/>N/A
                        </div>
                    </Li>
                <br/>
                <Li>
                    <Label>Staff welcome me and treat me with respect.</Label>
                        <div onChange={onFormChange}>
                            <input name="poc_eleven" type="radio" value="Agree"/> Agree
                            <input name="poc_eleven" type="radio" value="Neutral"/>Neutral
                            <input name="poc_eleven" type="radio" value="Disagree"/>Disagree
                            <input name="poc_eleven" type="radio" value="N/A"/>N/A
                        </div>
                    </Li>
                <br/>
                <Li>
                    <Label>Staff are sensitive to my cultural background.</Label>
                        <div onChange={onFormChange}>
                            <input name="poc_twelve" type="radio" value="Agree"/> Agree
                            <input name="poc_twelve" type="radio" value="Neutral"/>Neutral
                            <input name="poc_twelve" type="radio" value="Disagree"/>Disagree
                            <input name="poc_twelve" type="radio" value="N/A"/>N/A
                        </div>
                    </Li>
                </ol>
                <div style={{margin:' 0 4rem'}}>
                <Label>Please inculde any additional comments:</Label>
                <br/>
                <br/>
                    <Textbox cols={115} onChange={onFormChange} name="poc_additional_comments"></Textbox>
                </div>
                <div className="center">
                    <Button  >Submit Assessment</Button>
                </div>
                
            </form>
        </div>
    )

}

export default PerceptionOfCareForm