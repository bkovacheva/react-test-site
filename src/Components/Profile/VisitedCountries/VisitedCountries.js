import { useState,useEffect } from 'react';
import firebase from "../../../services/firebase-service"
import 'firebase/firestore';
import { Link } from 'react-router-dom';
import "./VisitedCountries.css"

const VisitedCountries=(id)=>{
    const userId = id.id
    const [visitedPlaces,setVisitedPlaces]=useState({});
    useEffect(() => {
        if(userId){
            const db = firebase.firestore();
            db.collection("visitedPlaces")
                .where("userID","==",userId)
                .orderBy("travelDate","desc")
                .get()
                .then(querySnapshot => {    
                    const data = querySnapshot.docs.map(doc => doc.data());
                    setVisitedPlaces({...data})
            ;})            
        }
    }, [userId]);

    return(
        <div className="form-look-like">
            <h4>Visited Places</h4>
            {Object.keys(visitedPlaces).map(data => {
                const formatter = new Intl.DateTimeFormat('us', { month: 'short' });
                if(visitedPlaces[data]){
                    let countryName= visitedPlaces[data]?.countryName
                    let continent=visitedPlaces[data]?.continent
                    let date= new Date((visitedPlaces[data]?.travelDate.toDate()).toString())
                    let month=formatter.format(date)
                    let formattedDate= date.getDate() + ' ' +month + ' '+ date.getFullYear();
                    let imageName;
                    if(countryName.includes(" ")){
                        imageName=countryName.replace(" ","_")
                    }else{
                        imageName=countryName
                    }
                    return (
                        //to={`/users/${user.id}`}
                        <Link  key={data} to={`/${continent}/${countryName}`}>
                            <div className="placesContainer-small" style={{ backgroundImage: `url(`+"../../images/"+imageName+".jpg"+`)` }}>
                                <span>{formattedDate}</span>
                                <p>{countryName}</p>
                            </div>
                        </Link>
                    )
                }
            })}
        </div>
    )
}
export default VisitedCountries;