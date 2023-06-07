import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";

function Auth(){

    const linkStyle = {
        textDecoration: "none",
        color: "#346BD5",
        fontWeight: "400",
        fontSize: "1rem",
        fontFamily: 'Lato'
    };

    const navigate = useNavigate();

    const handleGoogleSignIn = (payload) => {
        console.log('Signed in as', payload.name);
    }

    return (
        <Container>
            <Left>
                <h1>Board.</h1>
            </Left>
            <Right>
                <form>
                    <div id="form__header">
                        <h1>Sign In</h1>
                        <span>Sign in to your account</span>
                    </div>
                    <div id="form__sso-button-group">
                        <button onClick={()=> navigate("/dashboard")}>
                            <img src="/assets/svg/google.svg" alt="" />
                            <span>Sign in with Google</span>
                        </button>
                        {/* <GoogleAuth onSignIn={handleGoogleSignIn} /> */}
                        <button onClick={()=> navigate("/dashboard")}>
                            <img src="/assets/svg/apple.svg" alt="" />
                            <span>Sign in with Apple</span>
                        </button>
                    </div>
                    <div id="form__form">
                        <div id="form__form__parameter">
                            <label>Email address</label>
                            <input type="email" placeholder="johndoe@gmail.com" />
                        </div>
                        <div id="form__form__parameter">
                            <label>Password</label>
                            <input type="password" placeholder="password" />
                        </div>
                        <Link style={linkStyle} to="/forgot-password">Forgot password?</Link>
                        <button onClick={()=> navigate("/dashboard")}>Sign In</button>
                    </div>
                    <p>Don’t have an account? 
                        <Link style={linkStyle} to="/auth">Register here</Link>
                    </p>
                </form>
            </Right>
        </Container>
    );
}


const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: red;
    display: flex;
    overflow: scroll;
`;

const Left = styled.div`
    width: 40%;
    height: 100%;
    background-color: black;
    color: white;
    font-size: 2.5rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 800px){
        display: none;
    }

`;

const Right = styled.div`
    width: 60%;
    min-height: 100%;
    height: fit-content;
    background-color: #F5F5F5;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0;

    @media (max-width: 800px){
        width: 100%;
    }

    &>form{
        width: 385px;
        display: flex;
        flex-direction: column;
        gap: 25px;
        
        &>p{
                font-family: 'Lato', sans-serif;
                color: #858585;
                font-weight: 400;
                font-size: 1rem;
                text-align: center;
            }

        img{
            width: 14px;
            height: 14px;
        }

        #form__header{
            
            h1{
                font-weight: 700;
                font-size: 2rem;
                margin-bottom: 5px;
            }

            span{
                font-family: 'Lato', sans-serif;
                font-size: 1rem;
                font-weight: 400;
            }
        }

        #form__sso-button-group{
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 25px;

            button{
                flex: 1;
                display: flex;
                justify-content: center;
                border-radius: 10px;
                border: none;
                background-color: white;
                padding: 10px;
                gap: 10px;
                
                span{
                    font-weight: 400;
                    font-size: 12px;
                    color: #858585;
                }
            }
        }

        #form__form{
            background-color: white;
            display: flex;
            flex-direction: column;
            padding: 30px;
            border-radius: 20px;
            gap: 30px;

            &>button{
                background-color: black;
                font-weight: 700;
                font-size: 1rem;
                color: white;
                border-radius: 10px;
                border: none;
                padding: 10px;
            }

            #form__form__parameter{
                display: flex;
                flex-direction: column;
                gap: 10px;
                font-family: 'Lato', sans-serif;
                font-weight: 400;
                font-size: 1rem;

                input{
                    border-radius: 10px;
                    background-color: #F5F5F5;
                    border: none;
                    padding: 10px;
                }
            }

        }

    }
`;

export default Auth;