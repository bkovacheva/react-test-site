import { useState,useEffect} from 'react';
import { Redirect } from 'react-router-dom';
import firebase from "../../../services/firebase-service"
import ErrorMessage from "../../ErrorMessage/ErrorMessage";
import 'firebase/firestore';

const AddNewTravel=(props)=>{
    
    const [errorMessage, setErrorMessage] = useState('');
    const db = firebase.firestore();
    const [countries, setAllCountries] = useState({});
    // const [selectedCountry, setSelectedCountry] = useState({});
    const [documentID,setDocumentID]=useState({});
    let [countryVisitCount, setCountryVisitCount] = useState();

    useEffect(() => {
        db.collection("countries")
            .get()
            .then(querySnapshot => {    
                const data = querySnapshot.docs.map(doc => doc.data());
                setAllCountries({...data})
        ;})   
    }, []);

    function updateVisitCount(country){
        if(country){
            if(countryVisitCount){
                db.collection("countries").doc(documentID)
                .update({
                    visited:countryVisitCount+1
                })
                .catch(err =>{console.log(err)})
            }
        }
    }


    const getCountryVisitCount =(e)=>{
        const visitedCountry=e.target[e.target.selectedIndex].text
        db.collection("countries")
            .where("countryName","==",visitedCountry)
            .get()
            .then(querySnapshot => {    
                const data = querySnapshot.docs.map(doc => doc.data());
                const docID = querySnapshot.docs.map(doc => doc.id);
                const count= data[0].visited
                setCountryVisitCount(count)
                setDocumentID(docID[0])
            ;}) 
    }

    const addNewTravel = (e)=>{
        e.preventDefault();
        setErrorMessage("");
        const userID=props.id
        const visitedCountry=e.target.countryOption[e.target.countryOption.selectedIndex].text
        const countryContinent=e.target.countryOption[e.target.countryOption.selectedIndex].value
        const visitDate= new Date(e.target.travelDate.value);

        if(visitedCountry &&  visitDate){
            db.collection("visitedPlaces").add({
                continent: countryContinent,
                countryName: visitedCountry,
                travelDate: visitDate,
                userID: userID
            })
            .then(() => {
                updateVisitCount(visitedCountry)
                document.location.href = '/profile'
            })
        }    
    }

    
    return(
        <div className="form-look-like">
            <h4>Add New Travel</h4>
            <form onSubmit={addNewTravel}>
                <div className="col-by-2">
                { errorMessage ? <ErrorMessage>{errorMessage}</ErrorMessage> : null}
                    <label htmlFor="countryOption">Country</label>
                    <select  className="countryOption" name="countryOption" id="countryOption" onChange={getCountryVisitCount}>
                        {Object.keys(countries).map(data => {
                                let countryName= countries[data].countryName
                                let continent= countries[data].continent                            
                                return (
                                    <option key={countryName} value={continent}>{countryName}</option>
                                )
                            })}
                    </select>
                </div>
                <div className="col-by-2">
                    <label htmlFor="travelDate">Travel Date:</label>
                    <input  className="travelDate" type="date" name="travelDate" id="travelDate" max={new Date().toISOString().split("T")[0]}/> 
                </div>
                <button name="loginButton" >Add Travel</button>
            </form>
        </div>
        )
}
export default AddNewTravel;