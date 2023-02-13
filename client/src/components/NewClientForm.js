import {useState} from "react"
import { useHistory } from 'react-router-dom';


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

            <h2>Enroll New Mentee</h2>
            <form onSubmit={handleSubmit}>
                <label>First Name:</label>
                <input name="firstname" onChange={onFormChange}></input>
                <br/>
                <label>Last Name:</label>
                <input name="lastname" onChange={onFormChange}></input>
                <br/>
                <label>Street Address:</label>
                <input name="street_address" onChange={onFormChange}></input>
                <br/>
                <label>City:</label>
                <input name="city" onChange={onFormChange}></input>
                <br/>
                <label>State:</label>
                <input name="state" onChange={onFormChange}></input>
                <br/>
                <label>Zip:</label>
                <input name="zip" onChange={onFormChange}></input>
                <br/>
                <label>County:</label>
                <select  name="county"  onChange={onFormChange}>
                <option value="Select One">Select One</option>
                    <option value="Henderson County">Henderson County</option>
                    <option value="Buncombe County">Buncombe County</option>
                    <option value="Translvania County">Translvania County</option>
                </select>

                <h3>Demographic</h3>
                <label>Age:</label>
                <input type="number" name="age" min="4" max='24' onChange={onFormChange}></input>
                <br/>
                <label>Gender:</label>
                <select  name="gender" onChange={onFormChange}>
                    <option value="">Prefer not to disclose</option>
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                    <option value="Non-binary/non-conforming">Non-binary/non-conforming</option>
                </select>
                <br/>
                <label>Race:</label>
                <select  name="race" onChange={onFormChange}>
                    <option value="">Prefer not to disclose</option>
                    <option value="American Indian or Alaska Native">American Indian or Alaska Native</option>
                    <option value="Asian">Asian</option>
                    <option value="Black or African American">Black or African American</option>
                    <option value="Hispanic or Latino">Hispanic or Latinx</option>
                    <option value="Native Hawaiian or Other Pacific Islander">Native Hawaiian or Other Pacific Islander</option>
                    <option value="White">White</option>
                    <option value="Two or More Races">Two or More Races</option>
                </select>
                <br/>
                <label>Ethnicity:</label>
                <select  name="ethnicity" onChange={onFormChange}>
                    <option value="">Prefer not to disclose</option>
                    <option value="Hispanic or Latinx">Hispanic or Latinx</option>
                    <option value=" Not Hispanic or Latinx">Not Hispanic or Latinx</option>
                </select>
                <br />
                <button>Create Mentee</button>
                    
            </form>
        </div>
    )
}

export default NewClientForm