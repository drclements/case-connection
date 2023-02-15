import React, { useState, } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components';
import { Button } from '../styled-components/Buttons';
import { Label } from '../styled-components/Label';

const WelcomeTitle = styled.h2`
margin: 1rem 5rem
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
                <WelcomeTitle><strong>Update Profile Information</strong></WelcomeTitle>
                <div style={{margin:"0 5rem"}}>
                    <Label>Phone Number: </Label>
                    <Input required defaultValue={phone}  name="phone" onChange={onFormChange} />
                    <br/>
                    <Label>Street: </Label>
                    <Input required defaultValue={street_address} name="street_address" onChange={onFormChange} />
                    <br/>
                    <Label>City: </Label>
                    <Input required defaultValue={city} name="city" onChange={onFormChange} />
                    <br/>
                    <Label>State: </Label>
                    <Input required defaultValue={state} name="state" onChange={onFormChange} />
                    <br/>
                    <Label>Zip Code: </Label>
                    <Input required defaultValue={zip} name="zip" onChange={onFormChange} />
                    <br/>
                    <Button type="submit">Update</Button>
                </div>
            </form>
    </div>
  )
}

export default ProfileUpdateForm