import React from 'react'
import styled from 'styled-components';
import defaultProfilePhoto from './assets/default-profile.png'

const ProfileImg = styled.img`
width: 100px;
height: 100px;
border-radius: 50%;

background-repeat: no-repeat;
background-position: center center;
background-size: cover;
object-fit: cover;
position: absolute;
  top: .75rem;
  right: 14rem;
  z-index: 1;
`

const ProfileImage = ({user}) => {
    const {images} = user
    console.log(images)

    const displayImg = images.map(image => image.image_data)
    console.log(displayImg)


  return (
    <ProfileImg src={displayImg.length === 0 ? defaultProfilePhoto : displayImg} >
        
    </ProfileImg>
  )
}

export default ProfileImage