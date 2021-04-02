import { auth } from "../../services/firebase-service";
import { useState,useEffect } from 'react';
import ErrorMessage from "../ErrorMessage/ErrorMessage";


const ResetPassword=({
    history
}) => {
    const [errorHandler, setErrorHandler] = useState('');

    const resetUserPassword = (e)=>{
        e.preventDefault();

        const emailAddress = e.target.email.value;
        let emailRegEx=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/

        if(emailAddress=='' ){
            setErrorHandler('Please enter email address where to send reset password email.')
        }else if(!emailRegEx.test(emailAddress)){
            setErrorHandler('Please enter valid email address');            
        }
        else{
            auth.sendPasswordResetEmail(emailAddress)
            .then(res=>{
                setErrorHandler(`Email to ${emailAddress} has been sent.`); 
            }).then(() => {
                setTimeout(function(){  history.push('/');}, 2000);               
            })
            .catch(error =>{
                setErrorHandler(error.message); 
            })
        }
    }

    return(   <div>
        <main className="main-container-small">
            <div className="background" style={{ backgroundImage: `linear-gradient(#350a4e4d, #350a4e4d),url(../../images/main.jpg)` }}>
                <div className="home_slider_content_inner" data-animation-in="flipInX" data-animation-out="animate-out fadeOut">
                    <h2>Login</h2>
                </div>
                
            </div>
        </main>
        <section className="content"> 
            <form onSubmit={resetUserPassword}>
            { errorHandler ? <ErrorMessage>{errorHandler}</ErrorMessage> : null}
                <div className="col-by-2">
                    <div>Please type your password below. We will send you email where you can reset your password.</div>
                    <label htmlFor="email">Email:</label>
                    <input type="text" name="email" id="email" ></input> 
                </div>
                    <button name="loginButton" >Reset</button>
            </form>
        </section>
    </div>
    
    );
};

export default ResetPassword;