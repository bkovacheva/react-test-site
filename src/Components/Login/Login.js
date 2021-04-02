import "./Login.css"
import { Link} from 'react-router-dom';
import React, {Component} from 'react'
import { auth } from "../../services/firebase-service";
import firebase from "../../services/firebase-service";
import 'firebase/firestore';
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { useState,useEffect } from 'react';

// export const MyContext = React.createContext("");

const Login = ({
    history
}) => {
    // const MyContext = React.createContext(defaultValue);
    const db = firebase.firestore();
    const [errorHandler, setErrorHandler] = useState('');
    const onLoginFormSubmitHandler = (e) => {
        e.preventDefault();
        const emailAddress = e.target.email.value;
        const password = e.target.password.value;
        auth.signInWithEmailAndPassword(emailAddress, password)
            .then((userCredential) => {
                // db.collection("users").where("email","==",emailAddress).get()
                // .then(querySnapshot => {    
                //     var data = querySnapshot.docs.map(doc => doc.data());
                // })
            }).then(() => {
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
        </section>
    </div>
     );
};
       

export default Login;