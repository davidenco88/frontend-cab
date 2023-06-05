import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaGoogle,
  FaAngleUp,
  FaTaxi,
  FaPhoneAlt,
} from 'react-icons/fa';
import { MdLocationPin, MdMail } from 'react-icons/md';

import './Footer.scss';

function Footer() {
  return (
    <div className="all">
      <div className="footer">
        <div className="footer__contact">
          <h3 className="footer__contact__title">Contact Us</h3>
          <span className="footer__contact__logo">
            <FaTaxi className="footer__contact__logo__logo" />
            <h1 className="footer__contact__logo__title">RICA</h1>
          </span>
          <p className="footer__contact__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
            debitis ullam architecto tenetur nobis illum vitae esse veritatis
            dicta, officiis earum totam tempore consectetur, ut hic expedita
            modi accusamus aspernatur.
          </p>
          <div className="footer__contact__content">
            <span className="footer__contact__content__item">
              <MdLocationPin />
              <p>A-32, Alabany, Newyork.</p>
            </span>
            <span className="footer__contact__content__item">
              <FaPhoneAlt className="footer__contact__content__item__phone" />
              <p>518 - 475 - 5181</p>
            </span>
            <span className="footer__contact__content__item">
              <MdMail />
              <p>contact@gmail.com</p>
            </span>
          </div>
        </div>
        <div className="footer__links">
          <h3 className="footer__links__title">Useful Links</h3>
          <h4 className="footer__links__link">Home</h4>
          <h4 className="footer__links__link">Our vehicle</h4>
          <h4 className="footer__links__link">Latest Video</h4>
          <h4 className="footer__links__link">Services</h4>
          <h4 className="footer__links__link">Booking Deal</h4>
          <h4 className="footer__links__link">Emergency Call</h4>
          <h4 className="footer__links__link">Mobile App</h4>
        </div>
        <div className="footer__location">
          <h3 className="footer__location__title">Our Location</h3>
          <section>
            <img
              className="footer__location__img"
              src="src/assets/Footer/mock_map.jpg"
              alt="map"
            />
          </section>
        </div>
        <div className="footer__links">
          <h3 className="footer__links__title">About</h3>
          <h4 className="footer__links__link">About Us</h4>
          <h4 className="footer__links__link">FAQ</h4>
          <h4 className="footer__links__link">Login</h4>
          <h4 className="footer__links__link">Register</h4>
          <h4 className="footer__links__link">Terms & Co.</h4>
          <h4 className="footer__links__link">Privacy</h4>
          <h4 className="footer__links__link">Support</h4>
        </div>
        <div className="footer__news">
          <h3 className="footer__news__title">New Topics</h3>
          <span className="footer__news__item">
            <img
              className="footer__news__item__img"
              src="src/assets/Footer/news_item_1.jpg"
              alt="taxi"
            />
            <aside>
              <h3 className="footer__news__item__title">Recent News</h3>
              <p className="footer__news__item__description">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima
                explicabo laborum at commodi natus, reiciendis dolor.
              </p>
            </aside>
          </span>
          <span className="footer__news__item">
            <img
              className="footer__news__item__img"
              src="src/assets/Footer/news_item_2.jpg"
              alt="taxi"
            />
            <aside>
              <h3 className="footer__news__item__title">Recent News</h3>
              <p className="footer__news__item__description">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint
                obcaecati magnam officiis.
              </p>
            </aside>
          </span>
        </div>
      </div>
      <div className="footer__foot">
        <FaFacebookF className="footer__foot__logo" />
        <FaInstagram className="footer__foot__logo" />
        <FaTwitter className="footer__foot__logo" />
        <FaGoogle className="footer__foot__logo" />
        {/* <FaAngleUp className="footer__foot__up" />
        PODRIA SER EL BOTON DE SUBIR HASTA ARRIBA */}
      </div>
    </div>
  );
}

export default Footer;
