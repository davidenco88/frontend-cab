import { NavLink, useNavigate } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import {
  FaUserAlt, FaWindowClose, FaBars, FaTaxi,
} from 'react-icons/fa';
import { AiFillSetting } from 'react-icons/ai';
import { GoSignOut } from 'react-icons/go';
import './HeaderNavBarStyless.scss';

function HeaderNavBar() {
  const [menuHide, setMenuHide] = useState(true);
  const [configHide, setConfigHide] = useState(true);
  const [profile, setProfile] = useState();
  const [hideProfileOptions, setHideProfileOptions] = useState(true);
  const loginRef = useRef();
  const navigate = useNavigate();

  const handleClikMenu = () => setMenuHide(!menuHide);
  const handleClikConfig = () => setConfigHide(!configHide);
  const handleClickProfile = () => setHideProfileOptions(!hideProfileOptions);
  const handleSignOut = () => {
    localStorage.clear();
    navigate('/');
    window.location.reload();
  };

  useEffect(() => {
    const auth = localStorage.getItem('authToken');
    if (!auth) {
      return undefined;
    }
    const profile = JSON.parse(localStorage.getItem('profile'));
    setProfile(profile);
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (loginRef.current && !loginRef.current.contains(event.target)) {
        setHideProfileOptions(true);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [loginRef]);

  useEffect(() => {
    const auth = localStorage.getItem('authToken');
    if (!auth) {
      return undefined;
    }
    const profile = JSON.parse(localStorage.getItem('profile'));
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
        </ul>
      </nav>
      <nav className="configBar">
        <select
          name="currency"
          id="currency"
          className={
            configHide ? 'configNavBar__set navHide' : 'configNavBar__set'
          }
        >
          <option value="USD">USD</option>
          <option value="COP">COP</option>
        </select>
        <select
          name="language"
          id="language"
          className={
            configHide ? 'configNavBar__set navHide' : 'configNavBar__set'
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
            <div
              className="linksLogin"
              onClick={handleClickProfile}
              aria-hidden="true"
            >
              <p className="linkLogin">{profile.fullName}</p>
            </div>
          ) : (
            <NavLink className="linksLogin" to="/login">
              <p>Sign in / Sign up</p>
            </NavLink>
          )}
        </div>
        <nav ref={loginRef} className={hideProfileOptions ? 'hide' : 'logOut'}>
          <ul className="logOut__list">
            <li className="logOut__list__item">
              <NavLink className="logOut__list__item__links" to="/profile">
                <FaUserAlt />
                Your profile
              </NavLink>
            </li>
            <li className="navBar__link">
              <p
                className="logOut__list__item__links"
                to="/cab"
                onClick={handleSignOut}
                aria-hidden="true"
              >
                <GoSignOut />
                Sign Out
              </p>
            </li>
          </ul>
        </nav>
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
