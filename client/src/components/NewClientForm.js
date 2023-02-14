import {useState} from "react"
import { useHistory } from 'react-router-dom';
import { FormContainer } from "../styled-components/Forms";
import { Input, Select } from "../styled-components/input";
import { Label } from "../styled-components/Label";
import { Button } from "../styled-components/Buttons";


function NewClientForm() {
    const history = useHistory();
  
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        image: "",
        age: "",
        gender: "",
        race: "",
        ethnicity: "",
        street_address: "",
        city: "",
        state: "",
        zip: "", 
        county: "",
        isActive: false,  
    })

    function onFormChange(e) {
        setFormData({
            ...formData, [e.target.name]: e.target.value,
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch('/clients', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify(formData)
        }).then((r) => r.json())
        .then(() => {
            history.push('/caseload')
        })
        e.target.reset()
    }

    return (
        <div>
            <h2 style={{margin: "1rem 4em"}}>Enroll New Mentee</h2>
            <FormContainer>
                <div style={{backgroundColor: "var(--light-blue", margin: '2rem 6rem', padding: "20px", borderRadius: "10px"}}>
                <form  onSubmit={handleSubmit}>
                    <Label>First Name:</Label>
                    <Input name="firstname" onChange={onFormChange}></Input>
                    <br/>
                    <Label>Last Name:</Label>
                    <Input name="lastname" onChange={onFormChange}></Input>
                    <br/>
                    <Label>Street Address:</Label>
                    <Input name="street_address" onChange={onFormChange}></Input>
                    <br/>
                    <Label>City:</Label>
                    <Input name="city" onChange={onFormChange}></Input>
                    <br/>
                    <Label>State:</Label>
                    <Input name="state" onChange={onFormChange}></Input>
                    <br/>
                    <Label>Zip:</Label>
                    <Input name="zip" onChange={onFormChange}></Input>
                    <br/>
                    <Label>County:</Label>
                    <Select  name="county"  onChange={onFormChange}>
                        <option value="Select One">Select One</option>
                        <option value="Henderson County">Henderson County</option>
                        <option value="Buncombe County">Buncombe County</option>
                        <option value="Translvania County">Translvania County</option>
                    </Select>

                    <h3>Demographic</h3>
                    <Label>Age:</Label>
                    <Input type="number" name="age" min="4" max='24' onChange={onFormChange}></Input>
                    <br/>
                    <Label>Gender:</Label>
                    <Select  name="gender" onChange={onFormChange}>
                        <option value="Prefer not to disclose">Prefer not to disclose</option>
                        <option value="Female">Female</option>
                        <option value="Male">Male</option>
                        <option value="Non-binary/non-conforming">Non-binary/non-conforming</option>
                    </Select>
                    <br/>
                    <Label>Race:</Label>
                    <Select  name="race" onChange={onFormChange}>
                        <option value="Prefer not to disclose">Prefer not to disclose</option>
                        <option value="American Indian or Alaska Native">American Indian or Alaska Native</option>
                        <option value="Asian">Asian</option>
                        <option value="Black or African American">Black or African American</option>
                        <option value="Hispanic or Latino">Hispanic or Latinx</option>
                        <option value="Native Hawaiian or Other Pacific Islander">Native Hawaiian or Other Pacific Islander</option>
                        <option value="White">White</option>
                        <option value="Two or More Races">Two or More Races</option>
                    </Select>
                    <br/>
                    <Label>Ethnicity:</Label>
                    <Select  name="ethnicity" onChange={onFormChange}>
                        <option value="Prefer not to disclose">Prefer not to disclose</option>
                        <option value="Hispanic or Latinx">Hispanic or Latinx</option>
                        <option value=" Not Hispanic or Latinx">Not Hispanic or Latinx</option>
                    </Select>
                    <br />
                    <Button>Create Mentee</Button>
                </form>
                </div> 
            </FormContainer>
        </div>
    )
}

export default NewClientForm