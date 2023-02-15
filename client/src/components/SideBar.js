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


function SideBar({onLogout, currentUser}) {

    return(
        <Menu>
            <a className="menu-item" href="/">
                Home
            </a>
            <a className="menu-item" href="/caseload">
                My Caseload
            </a>
            {currentUser.title === "Manager" ?  <a className="menu-item" href="/new-client">
                New Mentee Intake
            </a> : null}
           
            {currentUser.title === "Manager" ? <a className="menu-item" href="/funding">
                Funding 
            </a> : null}
            {currentUser.title === "Manager" ? <a className="menu-item" href="/create-announcement"> 
                Program Announcement
            </a> : null}
            
            <a className="menu-item" href="/profile">
                Profile
            </a>
            <Logout onClick={onLogout} className="menu-item" >Logout </Logout>
        </Menu>
    )
}

export default SideBar