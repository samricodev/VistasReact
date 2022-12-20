import React from 'react';
import '../css/Header.css'

class Header extends React.Component{
  render(){
    return(
      <header>
        <nav>
          <h2>freeCodeCamp</h2>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;