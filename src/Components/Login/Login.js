import "./Login.css"

const Login = () => (
    <div>
        <main className="main-container">
            <div className="background" style={{ backgroundImage: `url(../../images/main.jpg)` }}>
                <div className="home_slider_content_inner" data-animation-in="flipInX" data-animation-out="animate-out fadeOut">
                    <h1>Login</h1>
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