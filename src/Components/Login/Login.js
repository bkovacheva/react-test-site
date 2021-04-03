import "./Login.css"
import { Link} from 'react-router-dom';
import React from 'react'
import { auth } from "../../services/firebase-service";
import firebase from "../../services/firebase-service";
import 'firebase/firestore';
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { useState } from 'react';

const Login = ({
    history
}) => {
    const db = firebase.firestore();
    const [errorHandler, setErrorHandler] = useState('');
    const onLoginFormSubmitHandler = (e) => {
        e.preventDefault();
        setErrorHandler("")
        const emailAddress = e.target.email.value;
        const password = e.target.password.value;
        auth.signInWithEmailAndPassword(emailAddress, password)
            .then(() => {
                    history.push('/');
                })
            .catch(error=>setErrorHandler(error.message))
    };

    return (
    <div>
        <main className="main-container-small">
            <div className="background" style={{ backgroundImage: `linear-gradient(#350a4e4d, #350a4e4d),url(../../images/main.jpg)` }}>
                <div className="home_slider_content_inner" data-animation-in="flipInX" data-animation-out="animate-out fadeOut">
                    <h2>Login</h2>
                </div>
                
            </div>
        </main>
        <section className="content"> 
            <div className="main-form">
                <form onSubmit={onLoginFormSubmitHandler}>
                { errorHandler ? <ErrorMessage>{errorHandler}</ErrorMessage> : null}
                    <div className="col-by-2">
                        <label htmlFor="email">Email:</label>
                        <input type="text" name="email" id="email" ></input> 
                        <label htmlFor="password">Password:</label>
                        <input type="password" name="password" id="password" ></input>
                        
                    </div>
                        <button name="loginButton" >LOGIN</button>
                <Link to="/resetpassword" className="resetPassword">Reset password</Link>            
                </form>
            </div>
        </section>
    </div>
     );
};   

export default Login;