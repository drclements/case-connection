import React, {useState, useEffect} from 'react'
import { useHistory, useParams } from 'react-router-dom'
import styled from 'styled-components'
import defaultProfilePhoto from '../assets/default-profile.png'
import ClientPhoto from './ClientPhoto'
import ClientUpdateForm from './ClientUpdateForm'
import { Button } from "../styled-components/Buttons";
import { Input } from '../styled-components/input'

const Profile = styled.div`
    background-color: var(--light-blue);
    margin: 2rem 5rem;
    border-radius: 15px;
`
const ButtonDiv = styled.div`
    margin: 0 8rem;
    justify-content: space-around
`

const CardDetails = styled.div`
    background-color: white;
    margin: 4rem 1rem; 
    border-radius: 10px;
    overflow: clip;  
`

const DemographicContainer = styled.div`
    background-color: var(--light-blue);
    margin: 1rem 5rem;
    border-radius: 15px;
    padding: 1rem 0;
`

const DemographicDetails = styled.div`
    border: none;
    background-color: white;
    border-radius: 10px;
    padding: 1rem 4rem 1rem 2rem;
    margin: 0 2rem;
`

const DetailBox = styled.div`
    margin: 1rem 4rem ; 
    justify-content:space-evenly; 
`

const DetailBoxBottom = styled.div`
    margin: 1rem 4rem
`

const ClientDetails = ({clients}) => {
    const history = useHistory()
    const { id } = useParams();
    const [addPictureMenu, setAddPictureMenu] = useState(false)
    const [updatePictureMenu, setUpdatePictureMenu] = useState(false)
    const [demoUpdate, setDemoUpdate] = useState(false)
    const [imageData, setImageData] = useState(null)
    const [client, setClient] = useState([])
 

    const {firstname, lastname, image, county, isActive, funding_id, age, gender, race, ethnicity, street_address, city, state, zip, case_manager, funding} = client

    useEffect(() => {
        fetch(`/clients/${id}`)
        .then(res => res.json())
        .then(clientData => setClient(clientData))
    }, [])


    function updateClick() {
        setDemoUpdate(!demoUpdate)
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
        <h2 style={{margin: "2rem 5rem"}}>Mentee Demographic</h2>
        <Profile className="flex">
            <div style={{margin: "2rem 2rem 2rem 4rem"}}>
                <ClientPhoto />
            </div>
            <CardDetails>
                <div style={{margin:"1rem 7rem 0 2rem"}}>
                    <h2 className="no-margin font-sort-mill-goudy">{`${firstname} ${lastname}`}</h2>
                    <p className="no-margin font-sort-mill-goudy"><strong>County: </strong>{county}</p>
                    <p className="no-margin font-sort-mill-goudy"><strong>Mentee ID: </strong>{client.id}</p>
                </div>
            </CardDetails>
            <CardDetails>
                <div style={{margin:"1rem 7rem 1rem 2rem"}}>
                    <label className="font-sort-mill-goudy" style={{fontSize:"22px"}}><strong>Case Status</strong></label>
                    <br/>
                        {case_manager === null || case_manager === undefined ? <p className="no-margin font-sort-mill-goudy" style={{color: "red"}}>Assign Case Worker</p> : <p className="no-margin font-sort-mill-goudy"><strong>Case Worker: </strong>{case_manager.firstname} {case_manager.lastname}</p>}
                        {funding === null || funding === undefined ? (
                            <p className="no-margin font-sort-mill-goudy" style={{color: "red"}}>Unfunded</p>
                        ) : (
                        <p className="no-margin font-sort-mill-goudy"><strong>Funding: </strong>{` ${funding.name}`}</p>
                        )
                        }
                    {isActive === true? (
                        <p className="no-margin font-sort-mill-goudy">
                        <strong>Status:</strong> Active
                        </p>  
                        ) : (
                            <p className="no-margin font-sort-mill-goudy">
                        <strong>Status:</strong> Inactive
                        </p> 
                        )}
                </div>
            </CardDetails>
        </Profile>
        <DemographicContainer>
            <div >
                <h3 style={{backgroundColor: "white", borderRadius: "10px", padding: "1rem", margin:"0 6rem"}} className='center no-margin'>Demographic Information</h3>
            </div>
            <DetailBox className='flex' >
            <DemographicDetails>
                <p><strong>Mentee Name:</strong>{` ${firstname} ${lastname}`}</p>
                {isActive === true ? (
                <p><strong>Client: </strong>Active</p>
                ) : (
                    <p><strong>Client: </strong>Inactive</p>
                )}
                <p><strong>Age:</strong> {age}</p>
            </DemographicDetails>
            <DemographicDetails>
                <p><strong>Gender:</strong> {gender}</p>
                <p><strong>Race:</strong> {race}</p>
                <p><strong>Ethnicity:</strong> {ethnicity}</p>
            </DemographicDetails>
            </DetailBox>
            <DetailBoxBottom >
                <DemographicDetails>
                    <h3>Home Address</h3>
                    <p><strong>Street:</strong> {street_address}</p>
                    <p><strong>City:</strong> {city}</p>
                    <p><strong>State:</strong> {state}</p>
                    <p><strong>Zip Code:</strong> {zip}</p>
                    <p><strong>County:</strong> {county}</p>
                </DemographicDetails>
            {demoUpdate === false ? (
                null
            ) : (
                <ClientUpdateForm demoUpdate={demoUpdate} setDemoUpdate={setDemoUpdate} client={client} setClient={setClient} />
            )}
            </DetailBoxBottom>
        </DemographicContainer>
        <ButtonDiv className='flex center'>
            {demoUpdate === false ? <Button onClick={updateClick}>Update Client Information</Button> : <Button onClick={updateClick}>Close Form</Button> }
            
                {imgArr.length === 0 ? (
                addPictureMenu === false ? (
                    <Button onClick={handleAddPictureClick}>Add Photo</Button>
                    ) : (
                    <>
                    <form onSubmit={handlePictureSubmit}>
                        <input type="file" accept="image/*" onChange={(e) => setImageData(e.target.files[0])}></input>
                        <input type="submit"></input>
                    </form>
                    <Button onClick={handleAddPictureClick}>Close</Button>
                    </>
                    )
                ) : ( 
                    updatePictureMenu === false ? (
                        <Button onClick={handleUpdatePictureClick}>Update Photo</Button>
                    ) : (
                        <>
                        <form
                        onSubmit={handleUpdatePictureSubmit}>
                            <input type="file" accept="image/*" onChange={(e) => setImageData(e.target.files[0])}></input>
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

export default ClientDetails