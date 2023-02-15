import {useState} from "react"
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styled-components/Buttons";
import { Label } from "../styled-components/Label";

const WelcomeTitle = styled.h2`
margin: 2rem 6rem
`

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

function FundingForm() {
    const history = useHistory()
    const [formData, setFormData] = useState({
        name: "",
        county: "",
        funding_type: "",
        year: "",
        amount: 0
    })

        function onFormChange(e) {
            setFormData({
                ...formData, [e.target.name]: e.target.value,
            });
        }
    
        function handleSubmit(e) {
            e.preventDefault();
            fetch('/fundings', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                }, 
                body: JSON.stringify(formData)
            }).then((r) => r.json())
            .then(() => {
                history.push('/funding')
            })
            e.target.reset()
        }

    return(
        <div>
            <WelcomeTitle>Add New Funding Pool</WelcomeTitle>
            <div style={{margin:"0 6rem"}}>
                <form onSubmit={handleSubmit}>
                    <Label>Name: </Label>
                    <Input name="name" onChange={onFormChange}></Input>
                    <br/>
                    <Label>County: </Label>
                    <Input name="county" onChange={onFormChange}></Input>
                    <br/>
                    <Label>Funding Type: </Label>
                    <Select name="funding_type" onChange={onFormChange}>
                        <option value="">Select One</option>
                        <option value="MHSA: Prevention & Early Intervention">MHSA: Prevention & Early Intervention</option>
                        <option value="MHSA: Community Support Services">MHSA: Community Support Services</option>
                        <option value="Grant">Grant</option>
                        <option value="Private Pay">Private Pay</option>
                    </Select>
                    <br/>
                    <Label>Year: </Label>
                    <Input name="year" onChange={onFormChange}></Input>
                    <br/>
                    <Label>Amount: </Label>$
                    <Input name="amount" onChange={onFormChange}></Input>
                    <br/>
                    <Button>Submit</Button>
                </form>

            </div>
        </div>
    )
}

export default FundingForm