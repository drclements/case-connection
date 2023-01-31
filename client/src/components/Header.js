import React from "react";
import NavBar from "./NavBar";
import styled from 'styled-components';
import profilePhoto from '../assets/profile-photo.jpg'

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

const ProfileImage = styled.img`
width: 100px;
height: 100px;
border-radius: 50%;

background-repeat: no-repeat;
background-position: center center;
background-size: cover;
object-fit: cover;
position: absolute;
  top: .75rem;
  right: 11rem;
  z-index: 1;
`

const Username = styled.div`
  background-color: white;
  padding-right: 1rem;
  padding-left: 1rem;
  border-radius: 10px;
  position: absolute;
  top: 1.25rem;
  right: 10rem;
  z-index: 1;

  @media (max-width: 1150px) {
    right: 2rem;
  }

  @media (max-width: 750px) {
    left: -100vw;
  }
`;

const MenuDiv = styled.div`
border-right: solid;
border-color: white;
width: 8em;
`

const PageTitle = styled.h1`
color: white;
margin-left: 1rem;

`

function Header( {currentUser, onLogout}) {
  return (
    <StyledHeader >
      <ProfileCard>
        <ProfileImage src={profilePhoto}>

        </ProfileImage>
        <Username>
          {!currentUser ? '' :
          <>
          <p>{currentUser.firstname}  {currentUser.lastname}</p>
          <p>Case Manager</p>
          </>}
        </Username>
      </ProfileCard>

      <MenuDiv>
        <button>
          M e n u
        </button>
      </MenuDiv>
      <PageTitle>Dashboard</PageTitle>

      {/* <div >
        <button onClick={onLogout} > Logout</button>
      </div> */}
    </StyledHeader>
  );
}

export default Header;
