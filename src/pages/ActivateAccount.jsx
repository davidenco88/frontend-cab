import OrangeButton from "../components/OrangeButton/OrangeButton";
import { FaTaxi } from "react-icons/fa";
import SingleFooter from "../components/SingleFooter/SingleFooter";
import './ActivateAccount.css';
import { useParams } from 'react-router-dom';
import { activate } from "../services/auth";



function Login() {
  const { token } = useParams();
  async function onClickHandler() {
    const loginPayload = await activate(token);
    console.log(loginPayload);
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
