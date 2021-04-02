
export const getCountryInfo = (country) => {
    const url = 'https://restcountries.eu/rest/v2/name/'+country+'?fullText=true';
    console.log(url)
    // let petsUrl = url + ((category && category != 'all') ? `?category=${category}` : '');

    return fetch(url)
        .then(response=>response.json())
        .catch(error => console.log(error));
}