import React from "react"
import { slide as Menu } from "react-burger-menu"
import styled from "styled-components"
import './Sidebar.css'

const Logout = styled.button`
background-color: var(--dark-blue);
border: none;
font-size: 1rem;
padding: 5px;

    color: #d1d1d1;
    margin-bottom: 10px;
    text-align: left;
    text-align: bottom;
    text-decoration: none;
    transition: color 0.2s;
`


function SideBar({onLogout}) {

    return(
        <Menu>
            <a className="menu-item" href="/">
                Home
            </a>
            <a className="menu-item" href="/caseload">
                My Caseload
            </a>
            <a className="menu-item" href="/new-client">
                New Mentee Intake
            </a>
            <a className="menu-item" href="/funding">
                Funding 
            </a>
            <a className="menu-item" href="/create-announcement">
                Program Announcement
            </a>
            <a className="menu-item" href="/training">
                Training
            </a>
            <a className="menu-item" href="/resources">
                Resources
            </a>
            <a className="menu-item" href="/timecard">
                Timecard
            </a>
            <Logout onClick={onLogout} className="menu-item" >Logout </Logout>
        </Menu>
    )
}

export default SideBar