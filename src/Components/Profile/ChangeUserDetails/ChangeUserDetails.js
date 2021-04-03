const ChangeUserDetails=(userDetails) => {
    console.log(userDetails)
    
    return (
        <div className="form-look-like">
            <form >
                <h4>Change User Details</h4>
                <div className="col-by-2">
                
                    <label htmlFor="first_name">First Name:</label>
                    <input  className="userDataInput" type="text" name="first_name" id="first_name" placeholder={userDetails?.userDetails.firstName } >{}</input>
                </div>
                <div className="col-by-2">
                    <label htmlFor="family_name">Family Name:</label>
                    <input  className="userDataInput" type="text" name="family_name" id="family_name" placeholder={userDetails?.userDetails.familyName} >{}</input> 
                </div>
                <div className="col-by-2">
                    <label htmlFor="username">Username:</label>
                    <input  className="userDataInput" type="text" name="username" id="username" placeholder={userDetails?.userDetails.username} >{}</input>
                </div>
                {/* <div className="col-by-2">
                    <label htmlFor="email">Email:</label>
                    <input className="userDataInput" type="text" name="email" id="email" >{}</input>
                </div> */}
                <button name="loginButton" >Register</button>
            </form>
        </div>
   )
}
export default ChangeUserDetails;