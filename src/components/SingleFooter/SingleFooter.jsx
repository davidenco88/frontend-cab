import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaGoogle,
} from 'react-icons/fa';

import './SingleFooter.scss';

function SingleFooter() {
  return (
    <div className="footer__foot">
      <FaFacebookF className="footer__foot__logo" />
      <FaInstagram className="footer__foot__logo" />
      <FaTwitter className="footer__foot__logo" />
      <FaGoogle className="footer__foot__logo" />
    </div>
  );
}

export default SingleFooter;
