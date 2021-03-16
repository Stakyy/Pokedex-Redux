import React from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/poke-logo.svg';
import s from './Header.module.scss';
function Header() {
  const [isActive, setActive] = React.useState(false);

  const onToggle = () => {
    setActive(!isActive);
  };

  return (
    <header className={s.header}>
      <nav>
        <div className={s.container}>
          <a className={s.header_logo} href="/">
            <img src={logo} alt="logo" />
          </a>
          <div onClick={onToggle} className={s.header_burger}>
            <span></span>
          </div>
          <ul id="nav-mobile" className={`${s.nav}` + ' ' + ` ${isActive ? `${s.opened}` : ''}`}>
            <li className={s.nav_item} onClick={() => setActive(false)}>
              <Link to="/">Pokedex</Link>
            </li>
            <li className={s.nav_item} onClick={() => setActive(false)}>
              <Link to="/mini">Мини версия</Link>
            </li>
            <li className={s.nav_item} onClick={() => setActive(false)}>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
