import { useEffect, useState } from "react"
import ClientCard from "./ClientCard"
import styled from "styled-components"


const CardDiv = styled.div`
justify-content: space-evenly;
`

function MyCaseload() {
    const [clientList, setClientList] = useState([])
    console.log(clientList)
    useEffect(() => {
        fetch('/clients')
        .then(res => res.json())
        .then(clientData => setClientList(clientData))
    }, [])
    
    const clientToDisplay = clientList.map(
        client => <ClientCard key={client.id} client={client} /> 
    )

    return (
        <div >
            <h2 className="center">My Caseload</h2>
            <CardDiv className="flex">
                {clientToDisplay}
            </CardDiv>
            

        </div>
    )
}

export default MyCaseload