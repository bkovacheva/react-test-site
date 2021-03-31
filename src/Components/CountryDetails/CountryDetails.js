import { useState,useEffect } from 'react';
import SimpleMap from "../GoogleMaps/GoogleMaps"
import * as countryService from "../../services/countryService"
import "./CountryDetails.css"
import firebase from "../../services/firebase-service"
import 'firebase/firestore';


const CountryDetails = ({
    match
}) => {
        const country = match.params.country;
        let [countryInfo, setCountryInfo] = useState({});
        let [countryDetails, setCountryDetails] = useState({});

        useEffect(() => {
            countryService.getCountryInfo(country)
                .then(res => setCountryInfo(res));
           
        }, [country]);

        useEffect(() => {
            if(country){
                let chosenCountry=country.charAt(0).toUpperCase() + country.slice(1);
                const db = firebase.firestore();
                db.collection("countries").where("countryName","==",chosenCountry)
                    .get()
                    .then(querySnapshot => {    
                        const data = querySnapshot.docs.map(doc => doc.data());
                        setCountryDetails(data)
                ;})
            }
        }, [country]);
    
        let destination;
        let imgURL;
        if (country){
            destination=country
            imgURL="../../images/"+country+".jpg"
        }
        else{
            destination='the world'
            imgURL="../../images/main.jpg"
        }
        return (
            <div>
                <main className="main-container">
                    <div className="background" style={{ backgroundImage: `url(`+imgURL+`)` }}>
                        <div className="home_slider_content_inner" data-animation-in="flipInX" data-animation-out="animate-out fadeOut">
                            <h1>WELCOME TO</h1>
                            <h1>{destination}</h1>
                        </div>
                    </div>
                </main>
                <section className="content"> 
                            {/* <FirebaseContext.Consumer>
                                {firebase => {
                                    return <div>I've access to Firebase and render something.</div> 
                                    
                                }}
                            </FirebaseContext.Consumer> */}
                           
                    <div>
                        <p>Capital: {countryInfo[0]?.capital}</p>
                        <p>Capital: {countryInfo[0]?.subregion}</p>
                    </div>
                </section>
                <SimpleMap lat={countryInfo[0]?.latlng[0], countryInfo[0]?.latlng[1]}/>
            </div>
        )
};
export default CountryDetails;