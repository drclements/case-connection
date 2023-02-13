import { useState, useEffect } from "react";
import styled from "styled-components"
import MyFullCalendar from "./MyFullCalendar"
import ProgramAnnouncements from "./ProgramAnnouncements";


const PageFrame = styled.div`
margin-left: 25px;
`
const WelcomeTitle = styled.h2`

`

function Dashboard( { currentUser }) {
    const [announcements, setAnnouncements] = useState([])

    useEffect(() => {
        fetch('/program_announcements')
            .then(res => res.json())
            .then(data => setAnnouncements(data))
    }, [])

    const displayAnnouncements = announcements.map(announcement => 
        <ProgramAnnouncements announcement={announcement} />
        )

    return (
        <PageFrame >
            <WelcomeTitle >
                {`Welcome, ${currentUser.firstname}!`}
            </WelcomeTitle>
            <h4>Program Announcements</h4>
            {displayAnnouncements}
            <MyFullCalendar />
        </PageFrame>
    )
}

export default Dashboard