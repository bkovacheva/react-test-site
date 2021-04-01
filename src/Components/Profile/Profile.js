
import "./Profile.css"
import {Link } from "react-router-dom"

const Profile= () => (
    <div>
        <main className="main-container-small">
            <div className="background" style={{ backgroundImage: `linear-gradient(#350a4e4d, #350a4e4d),url(`+"../../images/main.jpg"+`)` }}>
                    <div className="home_slider_content_inner" >
                        <h2>Profile</h2>
                    </div>
            </div>
        </main>
        <section className="content"> 
            <aside>
                <ul>
                    <li><Link>Change User Details</Link></li>
                    <li><Link>Change Password</Link></li>
                    <li><Link>Visited Countries</Link></li>
                    <li><Link>Logout</Link></li>
                </ul>
            </aside>
            <div className="userDetailsSection"> 
                {/* <h3>Change User Details</h3> */}
                <form >
                <h4>Change User Details</h4>
                {/* {Object.keys(errorMessage).map(error => {
                            return ( <ErrorMessage key={error}>{errorMessage[error]}</ErrorMessage>)
                    })}
                <ErrorMessage>{errorMessage}</ErrorMessage> */}
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

            </div>
        </section>
    </div>
);

export default Profile;