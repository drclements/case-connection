import { useState } from "react";
import styled from "styled-components";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";
import { Button } from "../styled-components/Buttons";




const Wrapper = styled.section`
  max-width: 500px;
  margin: 40px auto;
  padding: 16px;
`;

const Divider = styled.hr`
  border: none;
  border-bottom: 1px solid #ccc;
  margin: 16px 0;
`;

function Login({ onLogin }) {
    const [showLogin, setShowLogin] = useState(true);
    
    return (
    <div>
     
        <Wrapper>
            {showLogin ? (
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
            )}
        </Wrapper>
    </div>
    );
  }

export default Login;