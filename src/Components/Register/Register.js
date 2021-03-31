import { useState,useEffect } from 'react';
import ErrorMessage from "../ErrorMessage/ErrorMessage"
import firebase from "../../services/firebase-service"
import * as firebaseService from "../../services/firebase-service"
import 'firebase/firestore';

const Register =({
    history,
}) => {
    const [errorMessage, setErrorMessage] = useState('');

    const registerNewUser = (e) => {
        e.preventDefault();
        const db = firebase.firestore();
        let emailaddress= e.target.email.value
        let usernameValue= e.target.username.value
        let firstname=e.target.first_name.value
        let familyname=e.target.first_name.value
        let password =e.target.password.value
        let retypepassword=e.target.rep_pass.value
        let emailValidated=false
        let usernameValidation=false
        let firstnameValidation=false
        let familynameValidation=false
        let passwordValidation=false
        let errormessage
        let errors=[]

        let emailRegEx=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/

        if(emailRegEx.test(emailaddress)){
            emailValidated=true
        }else{
            errors.push('Email is not appropriate');
        }

        if(password.length < 7){
            errors.push('Password too short. Must be more than 8 characters.')            
        }else if (!password == retypepassword){
            errors.push('Passwords do not match');
        }else if((password == retypepassword) && password.length <7){
            passwordValidation=true            
        }
        if(firstname=='' ){
            errors.push('Your first name cannot be empty.')            
        }else {
            firstnameValidation=true
        }

        if(familyname=='' ){
            errors.push('Your family name cannot be empty.')            
        }else {
            familynameValidation=true
        }

        //Cecking 
        let myPromise = new Promise(function(username) {
            db.collection("users").where("username","==",usernameValue)
            .get()
            .then(querySnapshot => { 
                const data = querySnapshot.docs.map(doc => doc.data());
                if(!data){
                    console.log("Empty query")
                }else{
                    console.log("Has a match")
                    usernameValidation=false
                }
                    
            ;}) 
          });
        //Checking


        // db.collection("users").where("username","==",usernameValue)
        // .get()
        // .then(querySnapshot => { 
        //     const data = querySnapshot.docs.map(doc => doc.data());
        //     if(!data){
        //         console.log("Empty query")
        //     }else{
        //         console.log("Has a match")
        //         usernameValidation=false
        //     }
                
        // ;}) 

        console.log(myPromise.then("some"))

        if(emailValidated 
            && passwordValidation 
            && firstnameValidation 
            && familynameValidation
            && usernameValidation
            ){
                console.log("proper setup")
            }
        else{
            setErrorMessage(errors)
        }
        
                // db.collection("users").add({
                //     email: e.target.email.value,
                //     username: e.target.username.value,
                //     firstName: e.target.first_name.value,
                //     familyName: e.target.first_name.value,
                //     password: e.target.password.value
                // }).then(() => {
                //     history.push('/');
                // })
    };
    return (
        <div>
            <main className="main-container">
                <div className="background" style={{ backgroundImage: `url(../../images/main.jpg)` }}>
                    <div className="home_slider_content_inner" data-animation-in="flipInX" data-animation-out="animate-out fadeOut">
                        <h1>Register</h1>
                    </div>
                </div>
            </main>
            <section className="content"> 
                
                <form onSubmit={registerNewUser}>
                {Object.keys(errorMessage).map(error => {
                            return ( <ErrorMessage key={error}>{errorMessage[error]}</ErrorMessage>)
                    })}
                {/* <ErrorMessage>{errorMessage}</ErrorMessage> */}
                    <div className="col-by-2">
                        <label htmlFor="first_name">First Name:</label>
                        <input type="text" name="first_name" id="first_name" ></input>
                        <label htmlFor="family_name">Family Name:</label>
                        <input type="text" name="family_name" id="family_name" ></input> 
                    </div>
                    <div className="col-by-2">
                        <label htmlFor="password">Password:</label>
                        <input type="password" name="password" id="password" ></input>
                        <label htmlFor="rep_pass"> Repeat Password:</label>
                        <input type="password" name="rep_pass" id="rep_pass" ></input>
                    </div>
                    <div className="col-by-2">
                        <label htmlFor="username">Username:</label>
                        <input type="text" name="username" id="username" ></input>
                        <label htmlFor="email">Email:</label>
                        <input type="text" name="email" id="email" ></input>
                    </div>
                    <button name="loginButton" >Register</button>
                </form>
            </section>
        </div>
    );
};


export default Register;