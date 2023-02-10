import React, {useEffect, useState} from 'react'
import { useHistory } from 'react-router-dom'
import defaultProfilePhoto from '../assets/default-profile.png'



const Profile = ({currentUser}) => {
    const history = useHistory()
    const [addPictureMenu, setAddPictureMenu] = useState(false)
    const [imageData, setImageData] = useState(null)
    const [image, setImage] = useState([])
    const [users, setUsers] = useState([])
    const {id, firstname, lastname, email, phone, street_address, state, zip, title, city, credential_id } = currentUser

    useEffect(() => {
        fetch('/case_managers')
        .then(res => res.json())
        .then(data => setUsers(data))
    }, [])


    function updateClick() {
        history.push(`/update-profile`)
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