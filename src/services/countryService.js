
export const getCountryInfo = (country) => {
    const url = 'https://restcountries.eu/rest/v2/name/'+country;
    console.log(url)
    // let petsUrl = url + ((category && category != 'all') ? `?category=${category}` : '');

    return fetch(url)
        .then(response=>response.json())
        .catch(error => console.log(error));

    // return fetch(petsUrl)
    //     .then(res => res.json())
    //     .catch(error => console.log(error));
}

// export const getOne = (petId) => {
//     return fetch(`${url}/${petId}`)
//         .then(res => res.json())
//         .catch(error => console.log(error));
// }