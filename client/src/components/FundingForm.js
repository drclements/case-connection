import {useState} from "react"
import { useHistory } from "react-router-dom";


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
            <h2>Add New Funding Pool</h2>
            <form onSubmit={handleSubmit}>
                <label>Name: </label>
                <input name="name" onChange={onFormChange}></input>
                <br/>
                <label>County: </label>
                <input name="county" onChange={onFormChange}></input>
                <br/>
                <label>Funding Type: </label>
                <select name="funding_type" onChange={onFormChange}>
                    <option value="">Select One</option>
                    <option value="MHSA: Prevention & Early Intervention">MHSA: Prevention & Early Intervention</option>
                    <option value="MHSA: Community Support Services">MHSA: Community Support Services</option>
                    <option value="Grant">Grant</option>
                    <option value="Private Pay">Private Pay</option>
                </select>
                <br/>
                <label>Year: </label>
                <input name="year" onChange={onFormChange}></input>
                <br/>
                <label>Amount: </label>
                <input name="amount" onChange={onFormChange}></input>
                <br/>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default FundingForm