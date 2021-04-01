import "./Login.css"

const Login = () => (
    <div>
        <main className="main-container-small">
            <div className="background" style={{ backgroundImage: `linear-gradient(#350a4e4d, #350a4e4d),url(../../images/main.jpg)` }}>
                <div className="home_slider_content_inner" data-animation-in="flipInX" data-animation-out="animate-out fadeOut">
                    <h2>Login</h2>
                </div>
                
            </div>
        </main>
        <section className="content"> 
            <form>
                <div className="col-by-2">
                    <label htmlFor="username">Username:</label>
                    <input type="text" name="username" id="username" ></input> 
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" ></input>
                </div>
                    <button name="loginButton" >LOGIN</button>                        
            </form>
        </section>
    </div>
);

export default Login;