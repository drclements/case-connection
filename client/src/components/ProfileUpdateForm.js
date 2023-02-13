import React, { useState, } from 'react'
import { useHistory } from 'react-router-dom'

const ProfileUpdateForm = ({currentUser, setCurrentUser}) => {

    const history = useHistory()
    const {id, phone, street_address, state, zip, title, city} = currentUser


    const [formData, setFormData] = useState({
        street_address,
        city,
        state,
        zip,
        phone,
    
    })

    function onFormChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    function handleProfileUpdate(e) {
        
        fetch(`/case_managers/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData) 
        })
            .then((r) => r.json())
            .then(data => setCurrentUser(data))
            .then(history.push('/profile'))
    }

    return (
    <div>
        <form onSubmit={handleProfileUpdate}>
                <label><strong>Update Profile Information</strong></label>
                <br/>
                <label>Phone Number: </label>
                <input required defaultValue={phone}  name="phone" onChange={onFormChange} />
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

export default ProfileUpdateForm