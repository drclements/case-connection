import React, {useEffect, useState} from 'react'
import { useHistory } from 'react-router-dom'
import ProfileDetails from './ProfileDetails'



const Profile = ({currentUser, users}) => {
    const history = useHistory()
    const [addPictureMenu, setAddPictureMenu] = useState(false)
    const [imageData, setImageData] = useState(null)
    // const [users, setUsers] = useState([])
    

    // useEffect(() => {
    //     fetch('/case_managers')
    //     .then(res => res.json())
    //     .then(data => {
    //         setUsers(data)
    //     })
    // }, [])

    const findUser = users?.filter((user) => user.id === currentUser.id)

    // const profileDetailsToDisplay = findUser.map(user => 
    //     <ProfileDetails user={user}/>
    // )

    function updateClick() {
       history.push('/update-profile')
    }

    function handleAddPictureClick() {
        setAddPictureMenu(!addPictureMenu)
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

  return (
    <div>
        <ProfileDetails currentUser={currentUser}/>
        <button onClick={updateClick}>Update Profile</button>
        {addPictureMenu === false ? (
            <button onClick={handleAddPictureClick}>Add Photo</button>
        ): (
            <>
            <button onClick={handleAddPictureClick}>Close</button>
            <form onSubmit={handlePictureSubmit}>
                <input type="file" accept="image/*" onChange={(e) => setImageData(e.target.files[0])}></input>
                <input type="submit"></input>
            </form>
            </>
        )}
    </div>
  )
}

export default Profile