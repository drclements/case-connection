import React from 'react'
import styled from 'styled-components'

const DetailsContainer = styled.div`
  background-color: var(--light-blue);
  margin: 1rem 18rem 0rem 18rem;
  min-width: 40%;
  text-align: center;
  border-radius: 10px;
  padding: 5px
`
const Info = styled.div`
background-color: white;
margin: 0 5rem;
border-radius: 10px;
padding: 5px
`


const ProfileDetails = ({currentUser}) => {
    const {id, firstname, lastname, email, phone, street_address, state, zip, title, city, credential_id } = currentUser 
  return (
    <div >
      <DetailsContainer>
        <h2>My Profile</h2>
        <Info >
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
        </Info>
        
        <br/>
      </DetailsContainer>

    </div>
  )
}

export default ProfileDetails