import styled from "styled-components";
import React, { useEffect, useRef } from 'react';

const GoogleAuth = ({ onSignIn }) => {
    const auth2 = useRef();

    const loadScript = (url) => {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = url;
            script.onload = resolve;
            script.onerror = reject;
            document.body.appendChild(script);
        });
    };

    useEffect(() => {
        loadScript('https://apis.google.com/js/platform.js').then(() => {
            window.gapi.load('auth2', function () {
                window.gapi.auth2.init({
                    client_id: '293285492631-smp06ahqjbesrrcnsiusft5lk9tpv2n4.apps.googleusercontent.com',
                }).then(function (authInstance) {
                    auth2.current = authInstance;
                });
            });
        });
    }, []);

    const handleClick = () => {
        auth2.current.signIn().then(user => {
            const profile = user.getBasicProfile();
            onSignIn({
                name: profile.getName(),
                imageUrl: profile.getImageUrl(),
                email: profile.getEmail(),
            });
        });
    };

    return (
        <CustomButton onClick={handleClick}>
            <img src="/assets/svg/google.svg" alt="" />
            <span>Sign in with Google</span>
        </CustomButton>
    );
};

const CustomButton = styled.button`
  flex: 1;
  display: flex;
  justify-content: center;
  border-radius: 10px;
  border: none;
  background-color: white;
  padding: 10px;
  gap: 10px;

  span {
    font-weight: 400;
    font-size: 12px;
    color: #858585;
  }
`;

export default GoogleAuth;



// <button>
//     <img src="/assets/svg/google.svg" alt="" />
//     <span>Sign in with Google</span>
// </button>

// client_id: '293285492631-smp06ahqjbesrrcnsiusft5lk9tpv2n4.apps.googleusercontent.com'
