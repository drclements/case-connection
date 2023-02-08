import { useState } from "react";
import { UserData } from "../Data";
import styled from "styled-components"



const PageFrame = styled.div`
margin-left: 25px;
`
const WelcomeTitle = styled.h2`

`

function Dashboard( { currentUser }) {
 

    return (
        <PageFrame >
            <WelcomeTitle >
                {`Welcome, ${currentUser.firstname}!`}
            </WelcomeTitle>
        </PageFrame>
    )
}

export default Dashboard