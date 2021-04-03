import { useState} from 'react';
import firebase from "../../../services/firebase-service"
import ErrorMessage from "../../ErrorMessage/ErrorMessage";
import 'firebase/firestore';

const ChangeUserDetails=(props) => {
    const [errorMessage, setErrorMessage] = useState('');

    const updateUserDetails= (e)=>{
        e.preventDefault();
        setErrorMessage("")
        const userID= props.userDetails.id
        const docID=props.docID
        let usernameValue= e.target.username.value
        let firstname=e.target.first_name.value
        let familyname=e.target.family_name.value
        let usernameValidation=false
        let firstnameValidation=false
        let familynameValidation=false
        let errors=[]

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

        if(usernameValue=='' ){
            errors.push('Your username cannot be empty.')            
        }else {
            usernameValidation=true
        }

        if(firstnameValidation 
            && familynameValidation
            && usernameValidation
            )
            {
                if(userID){
                const db = firebase.firestore();
                    db.collection("users").doc(docID)
                        .update({
                            "username": usernameValue,
                            "firstName": firstname,
                            "familyName":familyname
                        })
                    .catch(err=>console.log(err))           
                }
        }else{
            setErrorMessage(errors)
        }
    }
    
    return (
        <div className="form-look-like">
            <h4>Change User Details</h4>
            <form onSubmit={updateUserDetails}>
                <div className="col-by-2">
                { errorMessage ? <ErrorMessage>{errorMessage}</ErrorMessage> : null}
                    <label htmlFor="first_name">First Name:</label>
                    <input  className="userDataInput" type="text" name="first_name" id="first_name" placeholder={props?.userDetails.firstName } >{}</input>
                </div>
                <div className="col-by-2">
                    <label htmlFor="family_name">Family Name:</label>
                    <input  className="userDataInput" type="text" name="family_name" id="family_name" placeholder={props?.userDetails.familyName} >{}</input> 
                </div>
                <div className="col-by-2">
                    <label htmlFor="username">Username:</label>
                    <input  className="userDataInput" type="text" name="username" id="username" placeholder={props?.userDetails.username} >{}</input>
                </div>
                <button name="loginButton" >Update</button>
            </form>
        </div>
   )
}
export default ChangeUserDetails;