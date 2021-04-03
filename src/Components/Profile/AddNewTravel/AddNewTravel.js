const AddNewTravel=(userDetails)=>{
    console.log(userDetails)

    // if(userId){
    //     const db = firebase.firestore();
    //     db.collection("visitedPlaces")
    //     .where("userID","==",userId)
    //     // .orderBy("date","desc")
    //         .get()
    //         .then(querySnapshot => {    
    //             const data = querySnapshot.docs.map(doc => doc.data());
    //             setVisitedPlaces({...data})
    //     ;})            
    // }

    return(
        <div className="form-look-like">
            <h4>Visited Places</h4>
        </div>
        )
}
export default AddNewTravel;