import { NavLink } from 'react-router-dom';

import {
  FaUserAlt,
  FaWindowClose,
  FaBars,
  FaTaxi,
} from 'react-icons/fa';

import { AiFillSetting } from 'react-icons/ai';
import { useState } from 'react';

import './HeaderNavBarStyless.css';

function HeaderNavBar() {
  const [menuHide, setMenuHide] = useState(true);
  const [configHide, setConfigHide] = useState(true);

  const handleClikMenu = () => setMenuHide(!menuHide);
  const handleClikConfig = () => setConfigHide(!configHide);

  return (
    <header className="headerNavBar">
      <div className="c-logo">
        <div className="background-logo">
          <FaTaxi />
        </div>
        <span className="headerNavBar__title">RICA</span>
      </div>
      <nav className={menuHide ? 'navBarMobile navHide' : 'navBarMobile'}>
        <ul className="navBar">
          <li className="navBar__link">
            <NavLink className="links" to="/">
              Home
            </NavLink>
          </li>
          <li className="navBar__link">
            <NavLink className="links" to="/cab">
              Cab
            </NavLink>
          </li>
          <li className="navBar__link"><p>Pages</p></li>
        </ul>
      </nav>
      <nav className="configBar">
        <select
          name="currency"
          id="currency"
          className={configHide ? 'configNavBar__set navHide' : 'configNavBar__set'}
        >
          <option value="USD">USD</option>
          <option value="COP">COP</option>
        </select>
        <select
          name="language"
          id="language"
          className={configHide ? 'configNavBar__set navHide' : 'configNavBar__set'}
        >
          <option value="ENG">ENG</option>
          <option value="ESP">ESP</option>
        </select>
        <div className="headerNavBar__menu">
          {configHide
            ? <div onClick={handleClikConfig}><AiFillSetting /></div>
            : <div onClick={handleClikConfig}><FaWindowClose /></div>}
        </div>
        <div>
          <FaUserAlt />
        </div>
        <div className="headerNavBar__menu">
          {menuHide
            ? <div onClick={handleClikMenu}><FaBars /></div>
            : <div onClick={handleClikMenu}><FaWindowClose /></div>}
        </div>
      </nav>

    </header>
  );
}
export default HeaderNavBar;
