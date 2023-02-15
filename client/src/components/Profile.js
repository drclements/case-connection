import React, {useEffect, useState} from 'react'
import { useHistory } from 'react-router-dom'
import { Button } from '../styled-components/Buttons'
import ProfileDetails from './ProfileDetails'
import styled from 'styled-components'
import { Input } from '../styled-components/input'

const ButtonDiv = styled.div`
    margin: 0 17rem;
    justify-content: space-around
`

const Profile = ({currentUser, users}) => {
    const history = useHistory()
    const [addPictureMenu, setAddPictureMenu] = useState(false)
    const [updatePictureMenu, setUpdatePictureMenu] = useState(false)
    const [imageData, setImageData] = useState(null)
    
    function updateClick() {
        history.push('/update-profile')
    }

    function handleAddPictureClick() {
        setAddPictureMenu(!addPictureMenu)
    }

    function handleUpdatePictureClick() {
        setUpdatePictureMenu(!updatePictureMenu)
    }

    function handlePictureSubmit(e) {

        const formData = new FormData()
        formData.append('case_manager_id', currentUser.id)
        formData.append('image_data', imageData)

        fetch('/images', {
            method: "POST",
            body: formData
        })
    }

    function handleUpdatePictureSubmit(e) {

        const formData = new FormData()
        formData.append('case_manager_id', currentUser.id)
        formData.append('image_data', imageData)

        fetch(`/images/${imgId}`, {
            method: "PATCH",
            body: formData
        })
    }

    const findUser = users?.filter((user) => user.id === currentUser.id)
    
    const imgArr = findUser[0]?.images[0]?.image_data ? findUser.map(user => 
        user.images[0].image_data 
    ) : ""

    const imgId = findUser[0]?.images[0] ? findUser.map(user => 
        user.images[0].id
    ) : ""
    
  return (
    <div >
        <ProfileDetails currentUser={currentUser}/>
        <ButtonDiv className='flex center'>
            <Button onClick={updateClick}>Update Profile</Button>
                {imgArr.length === 0 ? (
                addPictureMenu === false ? (
                    <Button onClick={handleAddPictureClick}>Add Photo</Button>
                    ) : (
                    <>
                    <Button onClick={handleAddPictureClick}>Close</Button>
                    <form onSubmit={handlePictureSubmit}>
                        <input type="file" accept="image/*" onChange={(e) => setImageData(e.target.files[0])}></input>
                        <input type="submit"></input>
                    </form>
                    </>
                    )
                ) : ( 
                    updatePictureMenu === false ? (
                        <Button onClick={handleUpdatePictureClick}>Update Photo</Button>
                    ) : (
                        <>
                        <form
                        onSubmit={handleUpdatePictureSubmit}>
                            <Input type="file" accept="image/*" onChange={(e) => setImageData(e.target.files[0])}></Input>
                            <input type="submit"></input>
                        </form>
                        <Button onClick={handleUpdatePictureClick}>Close</Button>
                        </>
                    )
                )}
        </ButtonDiv>
        
    </div>
  )
}

export default Profile