import { NavLink } from "react-router-dom";
import { useEffect } from "react";

import { FaUserAlt, FaWindowClose, FaBars, FaTaxi } from "react-icons/fa";

import { AiFillSetting } from "react-icons/ai";
import { useState } from "react";

import "./HeaderNavBarStyless.css";

function HeaderNavBar() {
  const [menuHide, setMenuHide] = useState(true);
  const [configHide, setConfigHide] = useState(true);
  const [profile, setProfile] = useState();

  const handleClikMenu = () => setMenuHide(!menuHide);
  const handleClikConfig = () => setConfigHide(!configHide);

  useEffect(() => {
    const auth = localStorage.getItem("authToken");
    if (!auth) {
      return undefined;
    }
    const profile = JSON.parse(localStorage.getItem("profile"));
    setProfile(profile);
    console.log(profile);
  }, []);

  return (
    <header className="headerNavBar">
      <div className="c-logo">
        <div className="background-logo">
          <FaTaxi />
        </div>
        <span className="headerNavBar__title">RICA</span>
      </div>
      <nav className={menuHide ? "navBarMobile navHide" : "navBarMobile"}>
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
          <li className="navBar__link">
            <p>Pages</p>
          </li>
        </ul>
      </nav>
      <nav className="configBar">
        <select
          name="currency"
          id="currency"
          className={
            configHide ? "configNavBar__set navHide" : "configNavBar__set"
          }
        >
          <option value="USD">USD</option>
          <option value="COP">COP</option>
        </select>
        <select
          name="language"
          id="language"
          className={
            configHide ? "configNavBar__set navHide" : "configNavBar__set"
          }
        >
          <option value="ENG">ENG</option>
          <option value="ESP">ESP</option>
        </select>
        <div className="headerNavBar__menu">
          {configHide ? (
            <div onClick={handleClikConfig}>
              <AiFillSetting />
            </div>
          ) : (
            <div onClick={handleClikConfig}>
              <FaWindowClose />
            </div>
          )}
        </div>
        <div>
          {profile ? (
            <>
              <NavLink className="linksLogin" to="/cab">
                <span className="linksLogin">
                  <p className="linkLogin">{profile.fullName}</p>
                  <FaUserAlt />
                </span>
              </NavLink>
            </>
          ) : (
            <NavLink className="linksLogin" to="/login">
              <p>Sign in / Sign up</p>
            </NavLink>
          )}
        </div>
        <div className="headerNavBar__menu">
          {menuHide ? (
            <div onClick={handleClikMenu}>
              <FaBars />
            </div>
          ) : (
            <div onClick={handleClikMenu}>
              <FaWindowClose />
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
export default HeaderNavBar;
