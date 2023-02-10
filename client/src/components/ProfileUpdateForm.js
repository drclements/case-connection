import React, { useState, } from 'react'
import { useHistory } from 'react-router-dom'
import { useForm } from "react-hook-form";

const ProfileUpdateForm = ({currentUser, setCurrentUser}) => {

    const history = useHistory()
    const {id, phone, street_address, state, zip, title, city} = currentUser
    
    const preloadedValues = {
        phone: phone, 
        street_address: street_address,
        state: state, 
        zip: zip, 
        city: city
    }
    
    const {register, handleSubmit} = useForm({
        defaultValues: preloadedValues
    })

    const [formData, setFormData] = useState({
        street_address: "",
        city: "",
        state: "",
        zip: "",
        phone: "",
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
        <form onSubmit={handleSubmit(handleProfileUpdate)}>
                <label><strong>Update Profile Information</strong></label>
                <br/>
                <label>Phone Number: </label>
                <input required ref={register}  name="phone" onChange={onFormChange} />
                <br/>
                <label>Street: </label>
                <input required ref={register} name="street_address" onChange={onFormChange} />
                <br/>
                <label>City: </label>
                <input required ref={register} name="city" onChange={onFormChange} />
                <br/>
                <label>State: </label>
                <input required ref={register} name="state" onChange={onFormChange} />
                <label>Zip Code: </label>
                <input required ref={register} name="zip" onChange={onFormChange} />
                <button type="submit">Update</button>
            </form>
    </div>
  )
}

export default ProfileUpdateForm