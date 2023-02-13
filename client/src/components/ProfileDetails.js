import React from 'react'

const ProfileDetails = ({currentUser}) => {
    const {id, firstname, lastname, email, phone, street_address, state, zip, title, city, credential_id } = currentUser 
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
        <br/>

    </div>
  )
}

export default ProfileDetails