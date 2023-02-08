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

function FundingCard ({ funding }) {
    const {name, county, funding_type, year, amount} = funding
    
    const history = useHistory()


    return (
        <Card className="center">
            <h3>{name}</h3>
            <p>{year}</p>
            <p>{funding_type}</p>
            <p>{county}</p>
            <p>${amount}</p>
        </Card>
    )
}

export default FundingCard