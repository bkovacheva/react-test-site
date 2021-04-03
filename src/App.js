import './App.css';
import { Route, Switch,Redirect } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from './Components/Header/Header'
import Continents from './Components/Continents/Continents'
import CountryDetails from './Components/CountryDetails/CountryDetails'
import Footer from './Components/Footer/Footer'
import Login from './Components/Login/Login'
import ResetPassword from "./Components/ResetPassword/ResetPassword"
import Profile from './Components/Profile/Profile'
import Register from './Components/Register/Register'
import firebase from "./services/firebase-service"
import { auth } from "./services/firebase-service"

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(setUser);
  }, []);

  const authInfo = {
    isAuthenticated: Boolean(user),
    email: user?.email,
  };

  return (
    <div className="App">      
        <Header {...authInfo} />

        <Switch>
         
          <Route path="/register" exact render={props => <Register {...props} {...authInfo} />} />
          <Route path="/login" exact component={Login} {...authInfo} /> 
          <Route path="/resetpassword" exact component={ResetPassword} {...authInfo} />
          {/* <Route path="/profile/:profile"  exact render={props => <Profile loggedUser={authInfo} />} /> */}
          <Route path="/profile" render={props => <Profile loggedUser={authInfo} />} />  
         
          <Route path="/logout" render={() => {
              auth.signOut();
              return <Redirect to="/" />
            }} />
          <Route path="/" exact  component={Continents}  />
          <Route path="/:location" exact component={Continents}  />
          <Route path="/:location/:country" exact component={CountryDetails} {...authInfo} />       
          
          
        </Switch>

        <Footer/>
        
    </div>
  );
}

export default App;
