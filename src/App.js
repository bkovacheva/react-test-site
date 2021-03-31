import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from './Components/Header/Header'
import Continents from './Components/Continents/Continents'
import CountryDetails from './Components/CountryDetails/CountryDetails'
import Footer from './Components/Footer/Footer'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'

function App() {
  return (
    <div className="App">      
        <Header/>

        <Switch>
          <Route path="/"  exact  component={Continents}/>
          <Route path="/login" exact component={Login} />   
          <Route path="/register" exact component={Register} />
          <Route path="/:location" exact component={Continents} />
          <Route path="/:location/:country" component={CountryDetails} />
        </Switch>

        <Footer/>
        
    </div>
  );
}

export default App;
