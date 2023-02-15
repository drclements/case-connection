import { useState } from "react";
import styled from "styled-components";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";
import { Button } from "../styled-components/Buttons";
import LoginPhoto from "../assets/IMG_8746.JPG"
import "../index.css"


const Image = styled.img`
    object-fit: cover;
    width: 500px;
    height: 550px
`

const Wrapper = styled.section`
    max-width: 500px;
    margin: 40px ;
    padding: 16px;
`;

const Divider = styled.hr`
    border: none;
    border-bottom: 3px solid ;
    margin: 16px 0;
`;

const PageContainer = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 3rem; 
    margin-right: 1rem
`

const AppTitle = styled.h1`
    font-size: 50px;
    margin: 0;
`
const ProgramName = styled.div`
    background-color: var(--cream);
    padding: 1.25rem 2rem;
    position: absolute;
    top: 33.75rem;
    right: 8.5rem;
`;

function Login({ onLogin }) {
    const [showLogin, setShowLogin] = useState(true);
    
    return (
    <PageContainer >
        <Wrapper>
            <AppTitle className="font-playfair">Case <br/> Connect</AppTitle>
            <p>Custom Case Management Solutions</p>
            <Divider/>
            <LoginForm onLogin={onLogin} />
                {/* <Divider /> */}
            {/* {showLogin ? (
            <>
                <LoginForm onLogin={onLogin} />
                <Divider />
                <p>
                Don't have an account? &nbsp;
                <Button  onClick={() => setShowLogin(false)}>
                    Sign Up
                </Button>
            </p>
            </>
        ) : (
            <>
            <SignUpForm onLogin={onLogin} />
                <Divider />
                <p>
                    Already have an account? &nbsp;
                <Button  onClick={() => setShowLogin(true)}>
                    Log In
                </Button>
                </p>
            </>
            )} */}
        </Wrapper>
        <Image src={LoginPhoto}></Image>
        <ProgramName>Better Together Mentoring</ProgramName>
    </PageContainer>
    );
  }

export default Login;