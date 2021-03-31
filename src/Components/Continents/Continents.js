import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./Continents.css"
import firebase from "../../services/firebase-service"
import 'firebase/firestore';


const Continents = ({
    match
}) => {
        const name = match.params.location;
        let [continentData, setContinentData] = useState({});
        useEffect(() => {
            if(name){
                const db = firebase.firestore();
                db.collection("countries").where("continent","==",name)
                    .get()
                    .then(querySnapshot => {    
                        const data = querySnapshot.docs.map(doc => doc.data());
                        setContinentData({...data})
                ;})            
            }
        }, [name]);
       
        console.log("../../images/"+(name ? name : "main") +".jpg")
        return (
            <div>
                <main className="main-container">
                    <div className="background" style={{ backgroundImage: `url(`+"../../images/"+(name ? name : "main") +".jpg"+`)` }}>
                        <div className="home_slider_content_inner" data-animation-in="flipInX" data-animation-out="animate-out fadeOut">
                            <h1>discover</h1>
                            <h1>{name}</h1>
                        </div>
                    </div>
                </main>
                <section className="content"> 
                    <div>
                        {Object.keys(continentData).map(data => {
                            let countryName= continentData[data].countryName
                            // imgURL="../../images/"+countryName+".jpg"
                            return (
                                //to={`/users/${user.id}`}
                                <Link to={`/${name}/${countryName}`}>
                                    <div key={countryName} className="placesContainer" style={{ backgroundImage: `url(`+"../../images/"+countryName+".jpg"+`)` }}>
                                    </div>
                                </Link>
                        
                            )
                        })}
                    </div>
                </section>
            </div>
        )
};
export default Continents;