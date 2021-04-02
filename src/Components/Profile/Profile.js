
import { useState,useEffect } from 'react';
import "./Profile.css"
import {Link } from "react-router-dom"
import CurrentUserDetails from "./CurrentUserDetails/CurrentUserDetails"
import ChangeUserDetails from "./ChangeUserDetails/ChangeUserDetails"

const Profile=(props) => {
   const emailAddress=props.loggedUser.email

   const [component,setComponent]=useState({});

   const changeComponent=(e)=>{
       const compomentName = e.target.name
       setComponent(compomentName)

   }
   function renderComponent(){
        switch(component) {
        case "CurrentUserDetails":
        return <CurrentUserDetails email={emailAddress}/>
        case "ChangeUserDetails":
        return <ChangeUserDetails />;
        default:
            return <CurrentUserDetails email={emailAddress}/>
        }
    }

   console.log(renderComponent())
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
                    <li><Link to="#" name="ChangeUserPassword" onClick={changeComponent}>Change Password</Link></li>
                    <li><Link to="#" name="Visited Countries" onClick={changeComponent}>Visited Countries</Link></li>
                    <li><Link to="/logout">Logout</Link></li>
                </ul>
            </aside>
            <div className="userDetailsSection">
            <span>{renderComponent()}</span>
                {/* <CurrentUserDetails email={emailAddress}/> */}

            </div>
        </section>
    </div>
     );
};
      

export default Profile;