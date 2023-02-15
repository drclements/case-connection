import { useEffect, useState } from "react"
import ClientCard from "./ClientCard"
import styled from "styled-components"



const CardDiv = styled.div`
justify-content: space-evenly;
flex-wrap: wrap;
`

function MyCaseload() {
    const [clientList, setClientList] = useState([])
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
            <h2  className="center font-sort-mill-goudy">My Caseload</h2>
            <CardDiv className="flex">
                {clientToDisplay}
            </CardDiv>
        </div>
    )
}

export default MyCaseload