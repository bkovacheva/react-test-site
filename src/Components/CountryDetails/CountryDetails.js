import { useState,useEffect } from 'react';
import SimpleMap from "../GoogleMaps/GoogleMaps"
import * as countryService from "../../services/countryService"
import "./CountryDetails.css"


const CountryDetails = ({
    match
}) => {
        const country = match.params.country;
        let [countryInfo, setCountryInfo] = useState({});

        useEffect(() => {
            countryService.getCountryInfo(country)
                .then(res => setCountryInfo(res));
           
        }, [country]);
    
        let destination;
        let imgURL;
        let imageName;
        if (country){
            if(country.includes(" ")){
                imageName=country.replace(" ","_")
                imgURL="../../images/"+imageName+".jpg"
            }else{
                imgURL="../../images/"+country+".jpg"
            }
            destination=country
        }
        else{
            destination='the world'
            imgURL="../../images/main.jpg"
        }
        return (
            <div>
                <main className="main-container">
                    <div className="background" style={{ backgroundImage: `linear-gradient(#350a4e4d, #350a4e4d),url(`+imgURL+`)` }}>
                        <div className="home_slider_content_inner" data-animation-in="flipInX" data-animation-out="animate-out fadeOut">
                            <h1>WELCOME TO</h1>
                            <h1>{destination}</h1>
                        </div>
                    </div>
                </main>
                <section className="content">                            
                    <div className="country-details">
                        <div className="country-flag" style={{ backgroundImage: `url(`+countryInfo[0]?.flag+`)` }}></div>
                        <p><span className="emphasizedText">Capital:</span> {countryInfo[0]?.capital}</p>
                        <p><span className="emphasizedText">Region:</span> {countryInfo[0]?.region}</p>
                        <p><span className="emphasizedText">Official Language:</span> {countryInfo[0]?.demonym}</p>
                        <p><span className="emphasizedText">Native Country Name:</span> {countryInfo[0]?.nativeName}</p>
                        <p><span className="emphasizedText">Currency:</span> {countryInfo[0]?.currencies[0].name} ({countryInfo[0]?.currencies[0].code}) {countryInfo[0]?.currencies[0].symbol}</p>
                    </div>
                </section>
                <SimpleMap lat={countryInfo[0]?.latlng[0], countryInfo[0]?.latlng[1]}/>
            </div>
        )
};
export default CountryDetails;