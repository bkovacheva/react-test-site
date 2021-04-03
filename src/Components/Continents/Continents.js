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
                db.collection("countries")
                .where("continent","==",name)
                .orderBy("visited","desc")
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

        function getData(){
            if(name){
                return(Object.keys(continentData).map(data => {
                        let countryName= continentData[data].countryName
                        let imageName;
                        if(countryName.includes(" ")){
                            imageName=countryName.replace(" ","_")
                        }else{
                            imageName=countryName
                        }
                        return (
                            <Link  key={countryName} to={`/${name}/${countryName}`} >
                                <div className="placesContainer" style={{ backgroundImage: `url(`+"../../images/"+imageName+".jpg"+`)` }}>
                                    <span>Visited: {continentData[data].visited}</span>
                                    <p>{countryName}</p>
                                </div>
                            </Link>
                    
                        )
                    }
                    )                  
                )
            }
            else{
                return (<div>
                    <p className="countryDetails-left">This site was created as a demo.</p>
                    <p className="countryDetails-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>)
            }
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
                        {getData()}
                </section>
            </div>
        )
};
export default Continents;