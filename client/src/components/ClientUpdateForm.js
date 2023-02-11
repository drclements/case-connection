import { preventDefault } from '@fullcalendar/core/internal'
import React, { useState, } from 'react'
import { useHistory } from 'react-router-dom'

const ClientUpdateForm = ({client, setClient}) => {
    const history = useHistory()

    const {id,street_address, city, state, county, zip, isActive, firstname, lastname, age, gender, race, ethnicity, case_manager_id  } = client

    const [formData, setFormData] = useState({
        street_address,
        city,
        county,
        zip, 
        isActive,
        firstname, 
        lastname, 
        age, 
        gender, 
        race,
        ethnicity,
        case_manager_id
    })

    function onFormChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    function handleProfileUpdate(e) {
        e.preventDefault()
        fetch(`/clients/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData) 
        })
            .then((r) => r.json())
            .then(data => setClient(data))
    }

    return (
    <div>
        <form onSubmit={handleProfileUpdate}>
                <label><strong>Update Profile Information</strong></label>
                <br/>
                <label>Case Status</label>
                <select required onChange={onFormChange} defaultValue={isActive} name="isActive">
                    <option value="false">Inactive</option>
                    <option value="true">Active</option>
                </select>
                <label>Case Worker ID</label>
                <input required type="number" defaultValue={case_manager_id} name="case_manager_id" onChange={onFormChange} />
                <label>First Name:</label>
                <input required defaultValue={firstname} name="firstname" onChange={onFormChange} />
                <label>Last Name:</label>
                <input required defaultValue={lastname} name="lastname"  onChange={onFormChange} />
                <br/>
                <label>Age: </label>
                <input required type="number" defaultValue={age} name="age" onChange={onFormChange} />
                <br/>
                <label>Gender: </label>
                <input required  defaultValue={gender} name="gender" onChange={onFormChange} />
                <br/>
                <label>Race: </label>
                <input required  defaultValue={race} name="race" onChange={onFormChange} />
                <br/>
                <label>Ethnicity: </label>
                <input required  defaultValue={ethnicity} name="ethnicity" onChange={onFormChange} />
                <br/>
                <label>Street: </label>
                <input required defaultValue={street_address} name="street_address" onChange={onFormChange} />
                <br/>
                <label>City: </label>
                <input required defaultValue={city} name="city" onChange={onFormChange} />
                <br/>
                <label>State: </label>
                <input required defaultValue={state} name="state" onChange={onFormChange} />
                <label>Zip Code: </label>
                <input required defaultValue={zip} name="zip" onChange={onFormChange} />
                <button type="submit">Update</button>
            </form>
    </div>
  )
}

export default ClientUpdateForm