import { useState, useEffect } from "react"
import styled from "styled-components"
import ProgramAnnouncementForm from "./ProgramAnnouncementForm"

const AnnouncementDisplay = styled.div`
padding: 0px 10px;
background-color: white;
border-radius: 10px;
margin: 5px
`

const Button = styled.button`
background-color: var(--light-blue);
border: none;
padding: 5px;
border-radius: 5px;
&:hover {
    background-color: var(--dark-blue);
    color: white;
    cursor: pointer
  }
}
`

function ProgramAnnouncements({announcement, onDelete, currentUser}) {
    const { id, date, body } = announcement
    console.log(onDelete)
    

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
                    {currentUser.title === "Manager" ? 
                        <div style={{marginTop: "1.75rem"}}>
                            <Button onClick={handleDelete}>Delete</Button>
                        </div> : null}
            </AnnouncementDisplay>

        </div>
    )

}

export default ProgramAnnouncements