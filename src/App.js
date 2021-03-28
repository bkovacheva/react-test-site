import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from './Components/Header/Header'
import Categories from './Components/Categories/Categories'
import Footer from './Components/Footer/Footer'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'

function App() {
  return (
    <div className="App">      
        <Header/>

        <Switch>
          <Route path="/"  exact  component={Categories}/>
          <Route path="/login" exact component={Login} />   
          <Route path="/register" exact component={Register} />
          <Route path="/:location" component={Categories} />
        </Switch>

        <Footer/>
        
    </div>
  );
}

export default App;
