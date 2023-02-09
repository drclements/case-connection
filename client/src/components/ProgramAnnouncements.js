import { useState, useEffect } from "react"

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
        <div>
                <div style={{border: "solid 1px", padding:"0px 10px"}}>
                <h3>{date}</h3>
                <p>{body}</p>
                <button onClick={handleDelete}>Delete</button>
            </div>
        </div>
    )

}

export default ProgramAnnouncements