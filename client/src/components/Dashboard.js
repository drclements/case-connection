import { useState, useEffect } from "react";
import styled from "styled-components"
import MyFullCalendar from "./MyFullCalendar"
import ProgramAnnouncements from "./ProgramAnnouncements";


const PageFrame = styled.div`
    margin: 2rem 4rem;
`
const WelcomeTitle = styled.h2`
`

const Announcements = styled.div`
    background-color: var(--light-blue);
    border-radius: 15px;
    padding: 5px;
    margin: 1rem, 2rem;

`

const AnnouncementsHeader = styled.h4`
    font-size: 20px;
    margin: 5px
`

const ArrowHead = styled.button`
    font-size: 50px;
    margin: 0;
    margin-right: 25px;
    border: none;
    background: none;
    cursor: pointer;
    line-height: 0;
    padding: 0
`

function Dashboard( { currentUser }) {
    const [announcements, setAnnouncements] = useState([])
    const [announcementClick, setAnnouncementClick] = useState(false)

    useEffect(() => {
        fetch('/program_announcements')
            .then(res => res.json())
            .then(data => setAnnouncements(data))
    }, [])

    function onDelete (id) {
        setAnnouncements(announcements.filter((announcement) => announcement.id !== id));
    };

    const displayAnnouncements = announcements.map(announcement => 
        <ProgramAnnouncements onDelete={onDelete} currentUser={currentUser} key={announcement.id} announcement={announcement} />
        )


    function handledArrowClick (){
        setAnnouncementClick(!announcementClick)
    }

    return (
        <PageFrame  >
            <WelcomeTitle className="font-sort-mill-goudy" >
                {`Welcome, ${currentUser.firstname}!`}
            </WelcomeTitle>
            <Announcements>
                <div style={{justifyContent: "space-between"}} className="flex row">
                <AnnouncementsHeader className="font-sort-mill-goudy" >Program Announcements</AnnouncementsHeader>
                {announcementClick === true ? 
                    <ArrowHead onClick={handledArrowClick}>🢒</ArrowHead> 
                    : 
                    <ArrowHead style={{marginTop:"35px"}} onClick={handledArrowClick}>🢓</ArrowHead> }
                </div>
                <div >
                    {announcementClick === false ? [displayAnnouncements] : null}
                </div>
            </Announcements>
            <div style={{marginTop: "15px"}}>
               <MyFullCalendar  /> 
            </div>
        </PageFrame>
    )
}

export default Dashboard