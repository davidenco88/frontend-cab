import { FaFacebookF, FaInstagram, FaTwitter, FaGoogle } from "react-icons/fa";

import "./SingleFooter.scss";

function SingleFooter() {
  return (
    <div className="singleFooter">
      <FaFacebookF className="singleFooter__logo" />
      <FaInstagram className="singleFooter__logo" />
      <FaTwitter className="singleFooter__logo" />
      <FaGoogle className="singleFooter__logo" />
    </div>
  );
}

export default SingleFooter;
