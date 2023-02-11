import React from "react";
import styled from 'styled-components';
import defaultProfilePhoto from '../assets/default-profile.png'
import {useEffect, useState} from 'react'
import ProfileImage from "./ProfileImage";

const StyledHeader = styled.header`
  background-color: var(--dark-blue);
  max-height: 8em;
  min-height: 8em;
  width: 100%;
  display: flex;
`;

const ProfileCard = styled.div`
display: flex;
background-color: white;
`

const Username = styled.div`
  background-color: white;
  padding-right: 1rem;
  padding-left: 1rem;
  border-radius: 10px;
  position: absolute;
  top: 1.25rem;
  right: 4rem;
  z-index: 1;

 
`;

const MenuDiv = styled.div`
border-right: solid;
border-color: white;
width: 8em;
`

const PageTitle = styled.h1`
color: white;
margin-left: 1rem;
margin-top: 2.5rem;

`

function Header( {currentUser, users}) {
  

  const findUser = users?.filter((user) => user.id === currentUser.id)

    const profileImageToDisplay = findUser.map(user => 
        <ProfileImage key={user.id} user={user} />
    )

  return (
    <StyledHeader >
      <ProfileCard>
        {profileImageToDisplay}
        <Username>
          {!currentUser ? '' :
          <>
          <p>{currentUser.firstname}  {currentUser.lastname}</p>
          <p>Case Manager</p>
          </>}
        </Username>
      </ProfileCard>
      <MenuDiv > 
        <h2 style={{marginLeft: "20px", color: "white"}}>M e n u</h2>
      </MenuDiv>
      <PageTitle>Case Connect</PageTitle>
    </StyledHeader>
  );
}

export default Header;
