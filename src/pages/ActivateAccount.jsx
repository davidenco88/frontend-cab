import OrangeButton from "../components/OrangeButton/OrangeButton";
import { FaTaxi } from "react-icons/fa";
import SingleFooter from "../components/SingleFooter/SingleFooter";
import { useParams } from 'react-router-dom';
import { activate } from "../services/auth";
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";

import './ActivateAccount.css';


function Login() {
  const { token } = useParams();
  const navigate = useNavigate();

  async function onClickHandler() {

    const response = await activate(token);

    if (response.status === 200) {

      Swal.fire({
        icon: 'success',
        title: 'Registration successful',
        text: 'Enjoy all services that we have for you, start now!',
      });

      const loginPayload = await response.json();

      console.log(loginPayload);

      localStorage.setItem("authToken", loginPayload.token);
      localStorage.setItem("profile", JSON.stringify(loginPayload.profile));

      navigate("/");

    } else {
      Swal.fire({
        icon: 'error',
        title: 'Registration failed',
        text: 'Something went wrong. Please try again.',
      });
    }
  };

  return (
    <div className="c-activate-account">
      <div className="activate-account">
        <header className="activate-account_header">
          <div className="activate-account_logo">
            <FaTaxi />
          </div>
          <span className="headerNavBar__title">RICA</span>
        </header>
        <div className="activate-account_content" >
          <h1>Activate your account</h1>
          <p>Thank you for registering in Rica App. We hope you enjoy our services!</p>
          <div onClick={onClickHandler}>
            <OrangeButton text={'Activate'} />
          </div>
        </div>
        <SingleFooter />
      </div>
    </div>
  );
}

export default Login;
