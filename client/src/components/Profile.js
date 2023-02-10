import React, {useEffect, useState} from 'react'
import { useHistory } from 'react-router-dom'



const Profile = ({currentUser}) => {
    const history = useHistory()
    const {id, firstname, lastname, email, phone, street_address, state, zip, title, city, credential_id } = currentUser


    function updateClick() {
        history.push(`/update-profile`)
    }


  return (
    <div>
        <h2>My Profile</h2>
        <p>{firstname} {lastname}</p>
        <p>{title? title : null }</p>
        <p>{email}</p>
        <p>{phone? phone : "Please add phone number"}</p>
        {street_address? ( 
            <>
            <h3>Primary Address</h3>
                <p>{street_address}</p>
                <p>{city}</p>
                <p>{state}, {zip}</p>  
            </>
            ) : (
            "Please add primary address"
        )}
        <button onClick={updateClick}>Update Profile</button>
    </div>
  )
}

export default Profile