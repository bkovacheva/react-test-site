import { useState,useEffect } from 'react';
import SimpleMap from "../GoogleMaps/GoogleMaps"
import * as countryService from "../../services/countryService"
import "./Categories.css"
import firebase from "../../services/firebase-service"
import 'firebase/firestore';


const Categories = ({
    match
}) => {
        const name = match.params.location;
        let [country, setLocaion] = useState({});
        let [likes, setLikes] = useState({});

        useEffect(() => {
            countryService.getAll(name)
                .then(res => setLocaion(res));
           
        }, [name]);

        useEffect(() => {
            country=name.charAt(0).toUpperCase() + name.slice(1);
            const db = firebase.firestore();
            db.collection("countries").where("countryName","==",country)
                .get()
                .then(querySnapshot => {    
                    const data = querySnapshot.docs.map(doc => doc.data());
            setLikes(data)
            ;})
           
        }, [name]);
    
        let destination;
        let imgURL;
        if (name){
            destination=name
            imgURL="../../images/"+name+".jpg"
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
                            <h1>discover</h1>
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
                        <p>Capital: {country[0]?.capital}</p>
                        <p>Likes: {likes[0]?.likes}</p>
                        <p>Lat: {likes[0]?.lat}</p>
                        <p>Long: {likes[0]?.long}</p>
                        <div className="placesContainer" style={{ backgroundImage: `url(`+imgURL+`)` }}>
                        </div>
                        <div className="placesContainer" style={{ backgroundImage: `url(`+imgURL+`)` }}>
                        </div>
                        <div className="placesContainer" style={{ backgroundImage: `url(`+imgURL+`)` }}>
                        </div>
                    </div>
                </section>
                <SimpleMap lat={likes[0]?.lat} lng={likes[0]?.long}/>
            </div>
        )
};
export default Categories;