import React, {Component} from 'react'
import {Link }  from 'react-router-dom'
import './Header.css'

class Header extends React.Component{
    render() {
        return <header className="App-header">
            <Link to="/">
                <img src='../../logo-travel.png' className="logo-image" />
            </Link>
            <h1>Hello, Traveller! {this.props.name}</h1>
          </header>
      }
}
export default Header;