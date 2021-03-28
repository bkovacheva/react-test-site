const Register = () => (
    <div>
        <main className="main-container">
            <div className="background" style={{ backgroundImage: `url(../../images/main.jpg)` }}>
                <div className="home_slider_content_inner" data-animation-in="flipInX" data-animation-out="animate-out fadeOut">
                    <h1>Register</h1>
                </div>
            </div>
        </main>
         <section className="content"> 
         <form>
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
                 <label htmlFor="country">Country:</label>
                 <input type="text" name="country" id="country" ></input>
             </div>
             <div className="col-by-2">
                 <label htmlFor="city">City:</label>
                 <input type="text" name="city" id="city" ></input>
             </div>
             <button name="loginButton" >Register</button>
         </form>
     </section>
     </div>
);

export default Register;