import React from 'react';
import logo from './assets/poke-logo.svg';
import s from './Header.module.scss';
function Header() {
  const [isActive, setActive] = React.useState(false);

  const onToggle = () => {
    setActive(!isActive);
    console.log(isActive);
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
            <li className={s.nav_item}>
              <a href="/">Pokedex</a>
            </li>
            <li className={s.nav_item}>
              <a href="/">Мини версия</a>
            </li>
            <li className={s.nav_item}>
              <a href="/">About</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
