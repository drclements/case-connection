import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import defaultProfilePhoto from '../assets/default-profile.png'

const ProfileImg = styled.img`
height: 12rem; 
width: 12rem;
border-radius: 50%;
object-fit: cover;

`

const ClientPhoto = () => {
    const { id } = useParams();
    const [client, setClient] = useState([])
    const [clients, setClients] = useState([])

    

    useEffect(() => {
        fetch(`/clients/${id}`)
        .then(res => res.json())
        .then(clientData => setClient(clientData))
    }, [])

    useEffect(() => {
        fetch(`/clients`)
        .then(res => res.json())
        .then(clientData => setClients(clientData))
    }, [])

    const findClient = clients?.filter((x) => x.id === client.id)
    
    const imgArr = findClient[0]?.client_images[0]?.image_data ? findClient.map(client => 
        client.client_images[0].image_data 
    ) : ""

  return (
    <ProfileImg src={imgArr.length === 0 ? defaultProfilePhoto : imgArr} />
  )
}

export default ClientPhoto