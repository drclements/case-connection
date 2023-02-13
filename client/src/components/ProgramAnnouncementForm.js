import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import ProgramAnnouncements from "./ProgramAnnouncements";

function ProgramAnnouncementForm() {
    const history = useHistory()
    const [announcements, setAnnouncements] = useState([])
    const {id} = announcements
    const [formData, setFormData] = useState({
        date: "",
        body: "",
        case_manager_id: ""
    })

    useEffect(() => {
        fetch('/program_announcements')
            .then(res => res.json())
            .then(data => setAnnouncements(data))
    }, [])

    
    
    function onFormChange(e) {
        setFormData({
            ...formData, [e.target.name]: e.target.value,
        });
    }
    
    function handleSubmit(e) {
        e.preventDefault();
        fetch('/program_announcements', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify(formData)
        }).then((r) => r.json())
        .then(() => {
            history.push('/')
        })
        e.target.reset()
    }
    
    function onFormChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }
    
    const onDelete = (id) => {
        setAnnouncements(announcements.filter((announcement) => announcement.id !== id));
    };
    
    const displayAnnouncements = announcements.map(announcement => 
        <ProgramAnnouncements onDelete={onDelete} announcement={announcement} />
        )
    
    return (
        <div>
            <h2>Active Announcements</h2>
            <div>
                {displayAnnouncements}
            </div>
            <h2>Create New Announcement</h2>
            <form onSubmit={handleSubmit}>
                <label>Date:</label>
                <input name="date" type="date" onChange={onFormChange}></input>
                <label>Case Manager ID:</label>
                <input name="case_manager_id" min="0" type="number" onChange={onFormChange}></input>
                <br/>
                <label>Body:</label>
                <br />
                <textarea name="body" min="0" type="number" onChange={onFormChange}></textarea>
                <br/>
                <button >Push Announcement</button>
            </form>
        </div>
    )

}

export default ProgramAnnouncementForm