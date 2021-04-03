import 'firebase/firestore';
import "./CurrentUserDeyails.css"

const CurrentUserDetails=(userDetails) => {
    return(
    <div className="form-look-like">
        <h4> User Details</h4>
        <div className="col-by-2">
           
            <label htmlFor="first_name">First Name:</label>
            <input  className="userDataInput" type="text" name="first_name" readOnly value={userDetails?.userDetails.firstName || ""} />
        </div>
        <div className="col-by-2">
            <label htmlFor="family_name">Family Name:</label>
            <input  className="userDataInput" type="text" name="family_name" readOnly value={userDetails?.userDetails.familyName || ""} />
        </div>
        <div className="col-by-2">
            <label htmlFor="username">Username:</label>
            <input  className="userDataInput" type="text" name="username" readOnly value={userDetails?.userDetails.username || ""}/>
        </div>
        <div className="col-by-2">
            <label htmlFor="email">Email:</label>
            <input className="userDataInput" type="text" name="email" readOnly  value={userDetails?.userDetails.email || ""}/>
        </div>
    </div>

    )
}
export default CurrentUserDetails;