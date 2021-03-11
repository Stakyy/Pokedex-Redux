import React from 'react';
import logo from '../assets/img/poke-logo.svg';
function Header() {
  return (
    <header className="main-header">
      <nav className="main-navigation">
        <a className="main-header-logo" href="/">
          <img src={logo} alt="logo" />
        </a>
      </nav>
    </header>
  );
}

export default Header;
