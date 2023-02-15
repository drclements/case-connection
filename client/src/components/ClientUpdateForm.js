import { preventDefault } from '@fullcalendar/core/internal'
import React, { useState, } from 'react'
import { useHistory } from 'react-router-dom'
import { Input, Select } from '../styled-components/input'
import { FormContainer } from '../styled-components/Forms'
import { Label } from '../styled-components/Label'
import { Button } from '../styled-components/Buttons'
import styled from 'styled-components'




const ClientUpdateForm = ({client, setClient, setDemoUpdate, demoUpdate}) => {
    const history = useHistory()

    const {id,street_address, city, state, county, zip, isActive, firstname, lastname, age, gender, race, ethnicity, case_manager_id, funding_id  } = client

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
        case_manager_id, 
        funding_id
    })


    function onFormChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    function handleProfileUpdate(e) {
        
        fetch(`/clients/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData) 
        })
            .then((r) => r.json())
            .then(data => {
                setClient(data)
                setDemoUpdate(!demoUpdate)
            })
    }

    return (
    <FormContainer>
        <form onSubmit={handleProfileUpdate}>
                <Label style={{fontSize: "20px"}}><strong>Update Profile Information</strong></Label>
                <br/>
                <div style={{margin: ".5rem"}} className='flex'>
                    <Label style={{margin: ".5rem"}} >Case Status: </Label>
                    <Select required onChange={onFormChange} defaultValue={isActive} name="isActive">
                        <option value="false">Inactive</option>
                        <option value="true">Active</option>
                    </Select>
                    <Label style={{margin: ".5rem"}}>Case Worker ID: </Label>
                    <Input required type="number" defaultValue={case_manager_id} name="case_manager_id" onChange={onFormChange} />
                    <Label style={{margin: ".5rem"}}>Funding ID: </Label>
                    <Input required type="number" defaultValue={funding_id} name="funding_id" onChange={onFormChange} />
                    <br/>
                </div>
                <Label>First Name:</Label>
                <Input required defaultValue={firstname} name="firstname" onChange={onFormChange} />
                <Label>Last Name:</Label>
                <Input required defaultValue={lastname} name="lastname"  onChange={onFormChange} />
                <br/>
                <Label>Age: </Label>
                <Input required type="number" defaultValue={age} name="age" onChange={onFormChange} />
                <br/>
                <Label>Gender: </Label>
                <Select required defaultValue={gender} name="gender" onChange={onFormChange}>
                    <option value="Prefer not to disclose">Prefer not to disclose</option>
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                    <option value="Non-binary/non-conforming">Non-binary/non-conforming</option>
                </Select>
                <br/>
                <Label>Race: </Label>
                <Select required defaultValue={race}  name="race" onChange={onFormChange}>
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
                <Label>Ethnicity: </Label>
                <Select required defaultValue={ethnicity}  name="ethnicity" onChange={onFormChange}>
                    <option value="Prefer not to disclose">Prefer not to disclose</option>
                    <option value="Hispanic or Latinx">Hispanic or Latinx</option>
                    <option value=" Not Hispanic or Latinx">Not Hispanic or Latinx</option>
                </Select>
                <br/>
                <Label>Street: </Label>
                <Input required defaultValue={street_address} name="street_address" onChange={onFormChange} />
                <br/>
                <Label>City: </Label>
                <Input required defaultValue={city} name="city" onChange={onFormChange} />
                <br/>
                <Label>State: </Label>
                <Input required defaultValue={state} name="state" onChange={onFormChange} />
                <Label>Zip Code: </Label>
                <Input required defaultValue={zip} name="zip" onChange={onFormChange} />
                <Label>County:</Label>
                <Select  name="county"  onChange={onFormChange}>
                    <option value="Select One">Select One</option>
                    <option value="Henderson County">Henderson County</option>
                    <option value="Buncombe County">Buncombe County</option>
                    <option value="Translvania County">Translvania County</option>
                </Select>
                <Button type="submit">Update</Button>
            </form>
    </FormContainer>
  )
}

export default ClientUpdateForm