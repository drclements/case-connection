import React, {useEffect, useState} from 'react'
import { useHistory } from 'react-router-dom'
import ProfileDetails from './ProfileDetails'



const Profile = ({currentUser, users, imageDataList}) => {
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
        e.preventDefault()

        const formData = new FormData()
        formData.append('case_manager_id', currentUser.id)
        formData.append('image_data', imageData)

        fetch('/images', {
            method: "POST",
            body: formData
        })
    }

    function handleUpdatePictureSubmit(e) {
        e.preventDefault()

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
    <div>
        <ProfileDetails currentUser={currentUser}/>
        <button onClick={updateClick}>Update Profile</button>
        {imgArr.length === 0 ? (
        addPictureMenu === false ? (
            <button onClick={handleAddPictureClick}>Add Photo</button>
            ) : (
            <>
            <button onClick={handleAddPictureClick}>Close</button>
            <form onSubmit={handlePictureSubmit}>
                <input type="file" accept="image/*" onChange={(e) => setImageData(e.target.files[0])}></input>
                <input type="submit"></input>
            </form>
            </>
            )
        ) : ( 
            updatePictureMenu === false ? (
                <button onClick={handleUpdatePictureClick}>Update Photo</button>
            ) : (
                <>
                <button onClick={handleUpdatePictureClick}>Close</button>
                <form
                onSubmit={handleUpdatePictureSubmit}>
                    <input type="file" accept="image/*" onChange={(e) => setImageData(e.target.files[0])}></input>
                    <input type="submit"></input>
                </form>
                </>
            )
        )}
    </div>
  )
}

export default Profile