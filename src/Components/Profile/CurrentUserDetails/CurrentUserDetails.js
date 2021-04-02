import { useState,useEffect } from "react";
import firebase from "../../../services/firebase-service"
import 'firebase/firestore';
import { auth } from "../../../services/firebase-service";

const CurrentUserDetails=(email) => {
    const [user,setUser]=useState({});
    const emailAddress = email.email //match.params.profile
    const db = firebase.firestore();
    useEffect(() => {
        if(emailAddress){
            const db = firebase.firestore();
            db.collection("users").where("email","==",emailAddress)
                .get()
                .then(querySnapshot => {    
                    const data = querySnapshot.docs.map(doc => doc.data());
                    console.log(data)
                    setUser(data[0])
            ;})            
        }
    }, [emailAddress]);

    return(
    <div >
        <h2> User Details</h2>
        <div className="col-by-2">
           
            <label htmlFor="first_name">First Name:</label>
            <span  className="userDataInput" type="text" name="first_name" id="first_name" >{user?.firstName}</span>
            <label htmlFor="family_name">Family Name:</label>
            <span  className="userDataInput" type="text" name="family_name" id="family_name" >{user?.familyName}</span> 
        </div>
        <div className="col-by-2">
            <label htmlFor="username">Username:</label>
            <span  className="userDataInput" type="text" name="username" id="username" >{user?.username}</span>
            <label htmlFor="email">Email:</label>
            <span className="userDataInput" type="text" name="email" id="email" >{user?.email}</span>
        </div>
    </div>

    )
}
export default CurrentUserDetails;