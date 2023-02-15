import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import ProgramAnnouncements from "./ProgramAnnouncements";
import styled from "styled-components";
import { Input } from "../styled-components/input";
import { Textbox } from "../styled-components/Textbox";
import { Label } from "../styled-components/Label";
import { Button } from "../styled-components/Buttons";

const AnnouncementDisplay = styled.div`
    padding: 10px;
    background-color: var(--light-blue);
    border-radius: 10px;
    margin: 10px;
`

const FormDiv = styled.div`
    padding: 10px;
    background-color: var(--light-blue);
    border-radius: 10px;
    margin: 10px;
`

function ProgramAnnouncementForm({currentUser}) {
    const history = useHistory()
    const [announcements, setAnnouncements] = useState([])
    // const {id} = announcements
    const [formData, setFormData] = useState({
        date: "",
        body: "",
        case_manager_id: currentUser.id
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
            setAnnouncements([...announcements, formData])
        })
        e.target.reset()
    }
    
    function onFormChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }
    
    function onDelete (id) {
        setAnnouncements(announcements.filter((announcement) => announcement.id !== id));
    };
    
    const displayAnnouncements = announcements.map(announcement => 
        <ProgramAnnouncements currentUser={currentUser} onDelete={onDelete} announcement={announcement} />
        )
    
    return (
        <div>
            
            <AnnouncementDisplay>
                <h2 className="font-sort-mill-goudy" style={{margin:"0"}}>Active Announcements</h2>
                {displayAnnouncements}
            </AnnouncementDisplay>
            <FormDiv >           
                <h2 className="font-sort-mill-goudy">Create New Announcement</h2>
                <form onSubmit={handleSubmit}>
                    <Label style={{marginLeft: "25px"}}>Date:</Label>
                    <br/>
                    <Input style={{maxWidth: "125px", marginLeft: "25px"}} name="date" type="date" onChange={onFormChange}></Input>
                    <br/>
                    <Label style={{marginLeft: "25px"}}>Body:</Label>
                    <br />
                    <Textbox style={{marginLeft: "25px", maxWidth:"97%"}} rows={4} cols={150} name="body" min="0" type="number" onChange={onFormChange}></Textbox>
                    <br/>
                    <Button style={{margin: "auto", marginLeft:"25px"}} >Push Announcement</Button>
                </form>
            </FormDiv>
        </div>
    )

}

export default ProgramAnnouncementForm