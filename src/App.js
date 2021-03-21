import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from './Components/Header/Header'
import Navigation from './Components/Navigation/Navigation'
import Bulgaria from './Components/Bulgaria/Bulgaria'
import Europe from './Components/Europe/Europe'
import Everywhere from './Components/Everywhere/Everywhere'

function App() {
  return (
    <div className="App">      
        <Header/>
        <Navigation/>
        <Switch>
          <Route path="/"  exact  />
          <Route path="/bulgaria" component={Bulgaria} />
          <Route path="/europe" component={Europe} />
          <Route path="/everywhere" component={Everywhere} />
        </Switch>
        
    </div>
  );
}

export default App;
