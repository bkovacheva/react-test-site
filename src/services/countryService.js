
export const getCountryInfo = (country) => {
    var url = 'https://restcountries.eu/rest/v2/name/'+country+'?fullText=true';
    if(country =="Venezuela"){
        url = 'https://restcountries.eu/rest/v2/name/'+country
    }
    return fetch(url)
        .then(response=>response.json())
        .catch(error => console.log(error));
}