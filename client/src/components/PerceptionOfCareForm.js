import { useState } from "react";
import { useHistory } from "react-router-dom";

function PerceptionOfCareForm({onCloseForm, onNewPoc}) {
    const history = useHistory()
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        date: "",
        client_id: "",
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
        <div>
            <h2><em>Participant Perception of Care</em></h2>
            <form onSubmit={handleSubmit}>
                <label>Date:</label>
                <input name="date" type="date" onChange={onFormChange}></input>
                <label>Mentee ID:</label>
                <input name="client_id" min="0" type="number" onChange={onFormChange}></input>
                <br/>
                <label>First Name:</label>
                <input name="firstname" onChange={onFormChange}></input>
                <label>Last Name:</label>
                <input name="lastname" onChange={onFormChange}></input>
                <br/>
                <div style={{border:"solid", borderWidth:"thin"}}>
                    <label>How long have you received services with us?</label>
                    <div onChange={onFormChange}>
                        <input name="length_of_service" type="radio" value="Less than 2 months"/> Less than 2 months
                        <input name="length_of_service" type="radio" value="3 - 5 months"/>3 - 5 months
                        <input name="length_of_service" type="radio" value="6 months to 1 year"/>6 months to 1 year
                        <input name="length_of_service" type="radio" value="More than 1 year"/>More than 1 year
                    </div>
                </div>
                <h4>As a direct result of the services I recived here:</h4>
                <ol>
                    <li>
                        <label>I am getting along better with my family.</label>
                        <div onChange={onFormChange}>
                        <input name="poc_one" type="radio" value="Agree"/> Agree
                        <input name="poc_one" type="radio" value="Neutral"/>Neutral
                        <input name="poc_one" type="radio" value="Disagree"/>Disagree
                        <input name="poc_one" type="radio" value="N/A"/>N/A
                        </div>
                    </li>
                <br/>
                    <li>
                    <label>I do better in school and/or work.</label>
                        <div onChange={onFormChange}>
                        <input name="poc_two" type="radio" value="Agree"/> Agree
                        <input name="poc_two" type="radio" value="Neutral"/>Neutral
                        <input name="poc_two" type="radio" value="Disagree"/>Disagree
                        <input name="poc_two" type="radio" value="N/A"/>N/A
                        </div>
                    </li>
                <br/>
                    <li>
                    <label>My housing situation has improved.</label>
                        <div onChange={onFormChange}>
                            <input name="poc_three" type="radio" value="Agree"/> Agree
                            <input name="poc_three" type="radio" value="Neutral"/>Neutral
                            <input name="poc_three" type="radio" value="Disagree"/>Disagree
                            <input name="poc_three" type="radio" value="N/A"/>N/A
                        </div>
                    </li>
                <br/>
                    <li>
                    <label>I am better able to do things that I want to do.</label>
                        <div onChange={onFormChange}>
                            <input name="poc_four" type="radio" value="Agree"/> Agree
                            <input name="poc_four" type="radio" value="Neutral"/>Neutral
                            <input name="poc_four" type="radio" value="Disagree"/>Disagree
                            <input name="poc_four" type="radio" value="N/A"/>N/A
                        </div>
                    </li>
                <br/>
                    <li>
                    <label>I am better able to deal with crisis.</label>
                        <div onChange={onFormChange}>
                            <input name="poc_five" type="radio" value="Agree"/> Agree
                            <input name="poc_five" type="radio" value="Neutral"/>Neutral
                            <input name="poc_five" type="radio" value="Disagree"/>Disagree
                            <input name="poc_five" type="radio" value="N/A"/>N/A
                        </div>
                    </li>
                <br/>
                    <li>
                    <label>I do better in social situations.</label>
                        <div onChange={onFormChange}>
                            <input name="poc_six" type="radio" value="Agree"/> Agree
                            <input name="poc_six" type="radio" value="Neutral"/>Neutral
                            <input name="poc_six" type="radio" value="Disagree"/>Disagree
                            <input name="poc_six" type="radio" value="N/A"/>N/A
                        </div>
                    </li>
                <br/>
                <li>
                    <label>I have people with whom I can do positive things.</label>
                        <div onChange={onFormChange}>
                            <input name="poc_seven" type="radio" value="Agree"/> Agree
                            <input name="poc_seven" type="radio" value="Neutral"/>Neutral
                            <input name="poc_seven" type="radio" value="Disagree"/>Disagree
                            <input name="poc_seven" type="radio" value="N/A"/>N/A
                        </div>
                    </li>
                <br/>
                <li>
                    <label>I do things that are more meaningful to me.</label>
                        <div onChange={onFormChange}>
                            <input name="poc_eight" type="radio" value="Agree"/> Agree
                            <input name="poc_eight" type="radio" value="Neutral"/>Neutral
                            <input name="poc_eight" type="radio" value="Disagree"/>Disagree
                            <input name="poc_eight" type="radio" value="N/A"/>N/A
                        </div>
                    </li>
                <br/>
                <li>
                    <label>I have learned to use coping mechanisms other than alcohol and/or other drugs.</label>
                        <div onChange={onFormChange}>
                            <input name="poc_nine" type="radio" value="Agree"/> Agree
                            <input name="poc_nine" type="radio" value="Neutral"/>Neutral
                            <input name="poc_nine" type="radio" value="Disagree"/>Disagree
                            <input name="poc_nine" type="radio" value="N/A"/>N/A
                        </div>
                    </li>
                <br/>
                <li>
                    <label>In a crisis, I would have the support I need from family or friends.</label>
                        <div onChange={onFormChange}>
                            <input name="poc_ten" type="radio" value="Agree"/> Agree
                            <input name="poc_ten" type="radio" value="Neutral"/>Neutral
                            <input name="poc_ten" type="radio" value="Disagree"/>Disagree
                            <input name="poc_ten" type="radio" value="N/A"/>N/A
                        </div>
                    </li>
                <br/>
                <li>
                    <label>Staff welcome me and treat me with respect.</label>
                        <div onChange={onFormChange}>
                            <input name="poc_eleven" type="radio" value="Agree"/> Agree
                            <input name="poc_eleven" type="radio" value="Neutral"/>Neutral
                            <input name="poc_eleven" type="radio" value="Disagree"/>Disagree
                            <input name="poc_eleven" type="radio" value="N/A"/>N/A
                        </div>
                    </li>
                <br/>
                <li>
                    <label>Staff are sensitive to my cultural background.</label>
                        <div onChange={onFormChange}>
                            <input name="poc_twelve" type="radio" value="Agree"/> Agree
                            <input name="poc_twelve" type="radio" value="Neutral"/>Neutral
                            <input name="poc_twelve" type="radio" value="Disagree"/>Disagree
                            <input name="poc_twelve" type="radio" value="N/A"/>N/A
                        </div>
                    </li>
                </ol>
                <label>Please inculde any additional comments:</label>
                <br/>
                    <textarea onChange={onFormChange} name="poc_additional_comments"></textarea>
                
                
                <br/>

                <button >Submit Assessment</button>
            </form>
        </div>
    )

}

export default PerceptionOfCareForm