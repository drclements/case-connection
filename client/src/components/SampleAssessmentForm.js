import { useState } from "react";
import { useHistory } from "react-router-dom";

function SampleAssessmentForm({onCloseForm, onNewSa}) {
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
    const [total, setTotal] = useState(0)

    
    console.log(date)
    console.log(firstname)
    console.log(lastname)
    console.log(saOne)
    console.log(saTwo)
    console.log(saThree)
    console.log(saFour)
    console.log(saFive)

    let newTotal = parseInt(saOne) + parseInt(saTwo) + parseInt(saThree) + parseInt(saFour) + parseInt(saFive)

    
    

    function handleSubmit(e) {
        e.preventDefault();
        const formData = {
        firstname: firstname,
        lastname: lastname,
        date: date,
        client_id: clientId, 
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
            console.log(data)
        })
        e.target.reset()
    }


    return (
        <div>
            <h2><em>Sample Assessment</em></h2>
            <form onSubmit={handleSubmit}>
                <label>Date:</label>
                <input name="date" type="date" onChange={(e) => setDate(e.target.value)}></input>
                <label>Mentee ID:</label>
                <input name="client_id" min="0" type="number" onChange={(e) => setClientId(e.target.value)}></input>
                <br/>
                <label>First Name:</label>
                <input name="firstname" onChange={(e) => setFirstname(e.target.value)}></input>
                <label>Last Name:</label>
                <input name="lastname" onChange={(e) => setLastname(e.target.value)}></input>
                <br/>
                <h4>Within the last 7 days:</h4>
                <ol>
                    <li>
                        <label>I feel anxious or nervous.</label>
                        <div onChange={(e) => setSaOne(e.target.value)}>
                        <input name="sa_one" type="radio" value={4}/> Always
                        <input name="sa_one" type="radio" value={3}/>Frequently
                        <input name="sa_one" type="radio" value={2}/>Sometimes
                        <input name="sa_one" type="radio" value={1}/>Rarely
                        <input name="sa_one" type="radio" value={0}/>Never
                        </div>
                    </li>
                <br/>
                    <li>
                    <label>I am sad or unhappy.</label>
                        <div onChange={(e) => setSaTwo(e.target.value)}>
                        <input name="sa_two" type="radio" value={4}/> Always
                        <input name="sa_two" type="radio" value={3}/>Frequently
                        <input name="sa_two" type="radio" value={2}/>Sometimes
                        <input name="sa_two" type="radio" value={1}/>Rarely
                        <input name="sa_two" type="radio" value={0}/>Never
                        </div>
                    </li>
                    <br/>
                    <li>
                    <label>I withdraw from my friends or family.</label>
                        <div onChange={(e) => setSaThree(e.target.value)}>
                        <input name="sa_three" type="radio" value={4}/> Always
                        <input name="sa_three" type="radio" value={3}/>Frequently
                        <input name="sa_three" type="radio" value={2}/>Sometimes
                        <input name="sa_three" type="radio" value={1}/>Rarely
                        <input name="sa_three" type="radio" value={0}/>Never
                        </div>
                    </li>
                    <br/>
                    <li>
                    <label>I don't have much energy.</label>
                        <div onChange={(e) => setSaFour(e.target.value)}>
                        <input name="sa_four" type="radio" value={4}/> Always
                        <input name="sa_four" type="radio" value={3}/>Frequently
                        <input name="sa_four" type="radio" value={2}/>Sometimes
                        <input name="sa_four" type="radio" value={1}/>Rarely
                        <input name="sa_four" type="radio" value={0}/>Never
                        </div>
                    </li>
                    <br/>
                    <li>
                    <label>I am hopeful</label>
                        <div onChange={(e) => setSaFive(e.target.value)}>
                        <input name="sa_five" type="radio" value={-2}/> Always
                        <input name="sa_five" type="radio" value={-1}/>Frequently
                        <input name="sa_five" type="radio" value={0}/>Sometimes
                        <input name="sa_five" type="radio" value={1}/>Rarely
                        <input name="sa_five" type="radio" value={2}/>Never
                        </div>
                    </li>
                </ol>
                <br/>
                
                <br/>
                <button >Submit Assessment</button>
            </form>
        </div>
    )

}

export default SampleAssessmentForm