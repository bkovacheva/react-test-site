
import { useState,useEffect } from 'react';
import "./Profile.css"
import {Link } from "react-router-dom"
import CurrentUserDetails from "./CurrentUserDetails/CurrentUserDetails"
import ChangeUserDetails from "./ChangeUserDetails/ChangeUserDetails"
import VisitedCountries from "./VisitedCountries/VisitedCountries"
import AddNewTravel from "./AddNewTravel/AddNewTravel"
import firebase from "../../services/firebase-service"
import 'firebase/firestore';

const Profile=(props) => {
   const emailAddress=props.loggedUser.email
   const [user,setUser]=useState({});
   const [component,setComponent]=useState({});
   const db = firebase.firestore();
   const changeComponent=(e)=>{
       const compomentName = e.target.name
       setComponent(compomentName)

   }
   useEffect(() => {
       if(emailAddress){
           const db = firebase.firestore();
           db.collection("users").where("email","==",emailAddress)
               .get()
               .then(querySnapshot => {    
                   const data = querySnapshot.docs.map(doc => doc.data());
                   setUser(data[0])
           ;})            
       }
   }, [emailAddress]);
   
   function renderComponent(){
        switch(component) {
        case "ChangeUserDetails":
        return <ChangeUserDetails userDetails={user}/>;
        case "VisitedCountries":
        return <VisitedCountries id={user.id}/>
        case "AddNewTravel":
        return <AddNewTravel />
        default:
            return <CurrentUserDetails userDetails={user}/>
        }
    }
    return(
    <div>
        <main className="main-container-small">
            <div className="background" style={{ backgroundImage: `linear-gradient(#350a4e4d, #350a4e4d),url(`+"../../images/main.jpg"+`)` }}>
                    <div className="home_slider_content_inner" >
                        <h2>Profile</h2>
                    </div>
            </div>
        </main>
        <section className="content"> 
            <aside>
                <ul>
                    <li><Link to="#" name="CurrentUserDetails" onClick={changeComponent}>CurrentUserDetails</Link></li>
                    <li><Link to="#" name="ChangeUserDetails" onClick={changeComponent}>Change User Details</Link></li>
                    <li><Link to="#" name="VisitedCountries" onClick={changeComponent}>Visited Countries</Link></li>
                    <li><Link to="#" name="AddNewTravel" onClick={changeComponent}>Add new travel</Link></li>
                    <li><Link to="/logout">Logout</Link></li>
                </ul>
            </aside>
            <div className="userDetailsSection">
                {renderComponent()}
            </div>
        </section>
    </div>
     );
};
      

export default Profile;