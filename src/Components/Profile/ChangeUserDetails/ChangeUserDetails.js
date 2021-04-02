const ChangeUserDetails=(email) => {
    
    return (
        <form >
            <h4>Change User Details</h4>
            <div className="col-by-2">
                <label htmlFor="first_name">First Name:</label>
                <input type="text" name="first_name" id="first_name" ></input>
                <label htmlFor="family_name">Family Name:</label>
                <input type="text" name="family_name" id="family_name" ></input> 
            </div>
            <div className="col-by-2">
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" id="password" ></input>
                <label htmlFor="rep_pass"> Repeat Password:</label>
                <input type="password" name="rep_pass" id="rep_pass" ></input>
            </div>
            <div className="col-by-2">
                <label htmlFor="username">Username:</label>
                <input type="text" name="username" id="username" ></input>
                <label htmlFor="email">Email:</label>
                <input type="text" name="email" id="email" ></input>
            </div>
            <button name="loginButton" >Register</button>
        </form>
   )
}
export default ChangeUserDetails;