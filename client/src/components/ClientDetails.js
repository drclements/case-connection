import React, {useState, useEffect} from 'react'
import { useHistory, useParams } from 'react-router-dom'
import styled from 'styled-components'
import defaultProfilePhoto from '../assets/default-profile.png'
import ClientPhoto from './ClientPhoto'
import ClientUpdateForm from './ClientUpdateForm'

const ProfileImg = styled.img`
height: 15rem; 
width: 15rem;
border-radius: 50%;
object-fit: cover
`


const ClientDetails = ({clients}) => {
    const history = useHistory()
    const { id } = useParams();
    const [addPictureMenu, setAddPictureMenu] = useState(false)
    const [updatePictureMenu, setUpdatePictureMenu] = useState(false)
    const [imageData, setImageData] = useState(null)
    const [client, setClient] = useState([])
 

    const {firstname, lastname, county, isActive, age, gender, race, ethnicity, street_address, city, state, zip} = client

    useEffect(() => {
        fetch(`/clients/${id}`)
        .then(res => res.json())
        .then(clientData => setClient(clientData))
    }, [])


    function updateClick() {
        history.push('/update-client-form')
    }

    function handleAddPictureClick() {
        setAddPictureMenu(!addPictureMenu)
    }

    function handleUpdatePictureClick() {
        setUpdatePictureMenu(!updatePictureMenu)
    }

    function handlePictureSubmit(e) {

        const formData = new FormData()
        formData.append('client_id', client.id)
        formData.append('image_data', imageData)

        fetch('/client_images', {
            method: "POST",
            body: formData
        })
    }

    function handleUpdatePictureSubmit(e) {

        const formData = new FormData()
        formData.append('client_id', client.id)
        formData.append('image_data', imageData)

        fetch(`/client_images/${imgId}`, {
            method: "PATCH",
            body: formData
        })
    }

    const findClient = clients?.filter((x) => x.id === client.id)
    
    const imgArr = findClient[0]?.client_images[0]?.image_data ? findClient.map(client => 
        client.client_images[0].image_data 
    ) : ""

    const imgId = findClient[0]?.client_images[0] ? findClient.map(client => 
        client.client_images[0].id
    ) : ""
    
  return (
    <div>
        <h2>Mentee Demographic</h2>
            <ClientPhoto />
            <p><strong>Full Legal Name:</strong>{` ${firstname} ${lastname}`}</p>
            {isActive === true ? (
               <p><strong>Client Active</strong></p>
            ) : (
                <p><strong>Client Inactive</strong></p>
            )}
            <p><strong>Age:</strong> {age}</p>
            <p><strong>Gender:</strong> {gender}</p>
            <p><strong>Race:</strong> {race}</p>
            <p><strong>Ethnicity:</strong> {ethnicity}</p>
            <h3>Home Address</h3>
            <p><strong>Street:</strong> {street_address}</p>
            <p><strong>City:</strong> {city}</p>
            <p><strong>State:</strong> {state}</p>
            <p><strong>Zip Code:</strong> {zip}</p>
            <p><strong>County:</strong> {county}</p>
        <button onClick={updateClick}>Update Client Information</button>
        <ClientUpdateForm client={client} setClient={setClient} />
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

export default ClientDetails