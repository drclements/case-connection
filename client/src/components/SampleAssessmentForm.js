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

function SampleAssessmentForm({onCloseForm, onNewSa, client}) {
    const history = useHistory()
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [date, setDate] = useState("");
    const [clientId, setClientId] = useState("");
    const [saOne, setSaOne] = useState("");
    const [saTwo, setSaTwo] = useState("");
    const [saThree, setSaThree] = useState("");
    const [saFour, setSaFour] = useState("");
    const [saFive, setSaFive] = useState("");

    const {id} = client

    let newTotal = parseInt(saOne) + parseInt(saTwo) + parseInt(saThree) + parseInt(saFour) + parseInt(saFive)
    
    function handleSubmit(e) {
        e.preventDefault();
        const formData = {
        firstname: firstname,
        lastname: lastname,
        date: date,
        client_id: id, 
        sa_one: saOne,
        sa_two: saTwo,
        sa_three: saThree,
        sa_four: saFour,
        sa_five: saFive,
        sa_total: newTotal
        }
        
        fetch('/sample_assessments', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify(formData)
        }).then((r) => r.json())
        .then((data) => {
            onNewSa(data)
            onCloseForm()
        })
        e.target.reset()
    }


    return (
        <div>
            <FormContainer style={{backgroundColor: "var(--light-blue)"}}>
                <h2 className="center"><em>Sample Assessment</em></h2>
                <div style={{margin:"2rem 2rem"}}>
                <form onSubmit={handleSubmit}>
                    <TopInputs className="flex row">
                        <div style={{display:"inline-grid"}}>
                            <Label>Date:</Label>
                            <Input name="date" type="date" onChange={(e) => setDate(e.target.value)}></Input>
                            <Label>First Name:</Label>
                            <Input name="firstname" onChange={(e) => setFirstname(e.target.value)}></Input>  
                        </div>
                        <div style={{display:"inline-grid"}}>
                            <Label>Mentee ID:</Label>
                            <Input className="center" readOnly defaultValue={id} name="client_id" min="0" type="number" onChange={(e) => setClientId(e.target.value)}></Input>
                            <Label>Last Name:</Label>
                            <Input name="lastname" onChange={(e) => setLastname(e.target.value)}></Input>
                        </div>
                    </TopInputs>
                    <Divider />
                    <div style={{margin:'0 4rem'}}>
                        <h4>Within the last 7 days:</h4>
                    </div>
                    <ol style={{backgroundColor:"var(--light-grey", padding:"10px", borderRadius:"10px", margin:"1rem 4rem"}}>
                        <Li>
                            <Label>I feel anxious or nervous.</Label>
                            <div onChange={(e) => setSaOne(e.target.value)}>
                            <input name="sa_one" type="radio" value={4}/> Always
                            <input name="sa_one" type="radio" value={3}/>Frequently
                            <input name="sa_one" type="radio" value={2}/>Sometimes
                            <input name="sa_one" type="radio" value={1}/>Rarely
                            <input name="sa_one" type="radio" value={0}/>Never
                            </div>
                        </Li>
                        <Li>
                        <Label>I am sad or unhappy.</Label>
                            <div onChange={(e) => setSaTwo(e.target.value)}>
                            <input name="sa_two" type="radio" value={4}/> Always
                            <input name="sa_two" type="radio" value={3}/>Frequently
                            <input name="sa_two" type="radio" value={2}/>Sometimes
                            <input name="sa_two" type="radio" value={1}/>Rarely
                            <input name="sa_two" type="radio" value={0}/>Never
                            </div>
                        </Li>
                        <Li>
                        <Label>I withdraw from my friends or family.</Label>
                            <div onChange={(e) => setSaThree(e.target.value)}>
                            <input name="sa_three" type="radio" value={4}/> Always
                            <input name="sa_three" type="radio" value={3}/>Frequently
                            <input name="sa_three" type="radio" value={2}/>Sometimes
                            <input name="sa_three" type="radio" value={1}/>Rarely
                            <input name="sa_three" type="radio" value={0}/>Never
                            </div>
                        </Li>
                        <Li>
                        <Label>I don't have much energy.</Label>
                            <div onChange={(e) => setSaFour(e.target.value)}>
                            <input name="sa_four" type="radio" value={4}/> Always
                            <input name="sa_four" type="radio" value={3}/>Frequently
                            <input name="sa_four" type="radio" value={2}/>Sometimes
                            <input name="sa_four" type="radio" value={1}/>Rarely
                            <input name="sa_four" type="radio" value={0}/>Never
                            </div>
                        </Li>
                        <Li>
                        <Label>I am hopeful</Label>
                            <div onChange={(e) => setSaFive(e.target.value)}>
                            <input name="sa_five" type="radio" value={-2}/> Always
                            <input name="sa_five" type="radio" value={-1}/>Frequently
                            <input name="sa_five" type="radio" value={0}/>Sometimes
                            <input name="sa_five" type="radio" value={1}/>Rarely
                            <input name="sa_five" type="radio" value={2}/>Never
                            </div>
                        </Li>
                    </ol>
                    <div className="center">
                        <Button >Submit Assessment</Button>
                    </div>
                </form>
                </div>
            </FormContainer>
        </div>
    )

}

export default SampleAssessmentForm