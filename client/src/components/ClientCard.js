import styled from "styled-components"
import { useHistory } from 'react-router-dom';


const Card = styled.li`
  border: 1px solid;
  max-width: 25%;
  min-width: 25%;
  flex-wrap: wrap;
  border-radius: 10px;
  background-color: var(--white);
  box-shadow: 0px 0px 2px 2px;
  max-height: 100rem;
  min-height: 15rem;
  overflow: clip;
  list-style-type: none;
  margin-left: 10px
`;

const Image = styled.img`
  width: 200x;
  height: 200px;
  object-fit: cover;
  border-radius: 50%;
  
`;

function ClientCard ({ client }) {
    const {id, firstname, lastname, image, county, isActive} = client
    const history = useHistory()

    function handleOpenFile() {
        history.push(`/clients/${id}`)
    }

    return (
        <Card className="center">
            <Image src={image} alt={`${firstname} ${lastname} Photo`}></Image>
            <h3>{`${firstname} ${lastname}`}</h3>
            <p>
                <strong>County: </strong>
                {county}
            </p>
            {isActive === true? (
                  <p>
                <strong>Status:</strong> Active
                </p>  
                ) : (
                    <p>
                <strong>Status:</strong> Inactive
                </p> 
                )}
                <button onClick={handleOpenFile}>Open File</button>
        </Card>
    )
}

export default ClientCard