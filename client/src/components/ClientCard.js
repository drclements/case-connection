import styled from "styled-components"
import { useHistory } from 'react-router-dom';
import defaultProfilePhoto from '../assets/default-profile.png'
import { Button } from "../styled-components/Buttons";


const Card = styled.li`
  border: 1px solid;
  max-width: 25%;
  min-width: 25%;
  flex-wrap: wrap;
  border-radius: 10px;
  background-color: var(--light-blue);
  box-shadow: 0px 0px 2px 2px;
  max-height: 100rem;
  min-height: 15rem;
  overflow: clip;
  list-style-type: none;
  margin: 1rem;
  padding: 10px 0;
`;

const CardDetails = styled.div`
    background-color: white;
    margin: 15px;
    border-radius: 10px
`

const Image = styled.img`
  height: 200px;
  width: 200px;
  object-fit: cover;
  border-radius: 50%;
`;

function ClientCard ({ client }) {
    const {id, firstname, lastname, client_images, county, isActive, funding} = client
    const history = useHistory()

    function handleOpenFile() {
        history.push(`/clients/${id}`)
    }

    const displayImg = client_images.map(image => image.image_data)

    

    return (
        <Card className="center">
            <Image src={displayImg.length === 0 ? defaultProfilePhoto : displayImg} alt={`${firstname} ${lastname} Photo`}></Image>
            <CardDetails >
                <h3 className="no-margin font-sort-mill-goudy">{`${firstname} ${lastname}`}</h3>
                <p className="no-margin font-sort-mill-goudy">
                    <strong>County: </strong>
                    {county}
                </p>
                {funding === null || funding === undefined ? (
                            <p className="no-margin font-sort-mill-goudy" style={{color: "red"}}><strong>Funding: </strong>Unfunded</p>
                        ) : (
                        <p className="no-margin font-sort-mill-goudy"><strong>Funding: </strong>{` ${funding.name}`}</p>
                        )
                        }
                {isActive === true? (
                    <p className="no-margin font-sort-mill-goudy">
                    <strong>Status:</strong> Active
                    </p>  
                    ) : (
                        <p className="no-margin font-sort-mill-goudy" style={{color: "red"}}>
                    <strong>Status:</strong> Inactive
                    </p> 
                    )}
            </CardDetails>
                    <Button style={{margin: "0"}} className="no-margin font-sort-mill-goudy" onClick={handleOpenFile}>Open File</Button>
                
        </Card>
    )
}

export default ClientCard