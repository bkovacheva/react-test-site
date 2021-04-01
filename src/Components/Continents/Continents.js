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

        let destination;
        let imgURL;
        if (name){
            if(name.includes("_")){
                destination=name.replace("_"," ")
            }else{
                destination=name
            }
            imgURL="../../images/"+name+".jpg"
        }
        else{
            destination='the world'
            imgURL="../../images/main.jpg"
        }
        return (
            <div>
                <main className="main-container">
                    <div className="background" style={{ backgroundImage: `linear-gradient(#350a4e4d, #350a4e4d),url(`+"../../images/"+(name ? name : "main") +".jpg"+`)` }}>
                        <div className="home_slider_content_inner" data-animation-in="flipInX" data-animation-out="animate-out fadeOut">
                            <h1>discover</h1>
                            <h1>{destination}</h1>
                        </div>
                    </div>
                </main>
                <section className="content"> 
                    <div>
                        {Object.keys(continentData).map(data => {
                            let countryName= continentData[data].countryName
                            let imageName;
                            if(countryName.includes(" ")){
                                imageName=countryName.replace(" ","_")
                            }else{
                                imageName=countryName
                            }
                            return (
                                //to={`/users/${user.id}`}
                                <Link  key={countryName} to={`/${name}/${countryName}`}>
                                    <div className="placesContainer" style={{ backgroundImage: `url(`+"../../images/"+imageName+".jpg"+`)` }}>
                                        <span>Visited: {continentData[data].visited}</span>
                                        <p>{countryName}</p>
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