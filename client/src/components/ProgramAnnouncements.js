import { useState, useEffect } from "react"
import styled from "styled-components"

const AnnouncementDisplay = styled.div`
padding: 0px 10px;
background-color: white;
border-radius: 10px;
margin: 5px
`

function ProgramAnnouncements({announcement, onDelete}) {
    const [checked, setChecked ] = useState(false)
    const { id, date, body } = announcement
    
    function handleChecked() {
        setChecked(!checked)
    }

    function handleDelete(){
        fetch(`/program_announcements/${id}`, {
            method: "DELETE"
        }).then((r) => onDelete(id))
    }

    return( 
        <div  >
                <AnnouncementDisplay className="flex" >
                    <div style={{borderRight:"2px solid", borderColor:"var(--light-blue"}}>
                        <h3 style={{padding:'10px'}}>{date}</h3>
                    </div>
                    <p style={{margin: "auto", textAlign:"bottom"}} >{body}</p>
                <button onClick={handleDelete}>Delete</button>
            </AnnouncementDisplay>
        </div>
    )

}

export default ProgramAnnouncements