import { useEffect, useState } from "react"
import ClientCard from "./ClientCard"
import styled from "styled-components"
import ClientSearch from "./ClientSearch"


const CardDiv = styled.div`
justify-content: space-evenly;
flex-wrap: wrap;
`

function MyCaseload() {
    const [clientList, setClientList] = useState([])
    const [search, setSearch] = useState("")

    useEffect(() => {
        fetch('/clients')
        .then(res => res.json())
        .then(clientData => setClientList(clientData))
    }, [])
    
    const searchResults = clientList.filter((client) => {
        return client.firstname.toLowerCase().includes(search.toLowerCase()) || client.lastname.toLowerCase().includes(search.toLowerCase())
    })

    const clientToDisplay = searchResults.map(
        client => <ClientCard key={client.id} client={client} /> 
    )

    function handleSearch(event) {
        setSearch(event.target.value)
      }


    return (
        <div >
            <h2  className="center font-sort-mill-goudy">Program Caseload</h2>
            <ClientSearch onSearch={handleSearch}/>
            <CardDiv className="flex">
                {clientToDisplay}
            </CardDiv>
        </div>
    )
}

export default MyCaseload