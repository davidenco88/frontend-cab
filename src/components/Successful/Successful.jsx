import { useNavigate } from 'react-router-dom';
import OrangeButton from '../OrangeButton/OrangeButton';
import TitleAndInfo from '../TitleAndInfo/TitleAndInfo';
import cab from '../../assets/Successful/cab.png';
import './Successful.scss';

const text = {
  title: 'Payment Successful ! Get Ready To Ride',
  description:
    'Thank you for your payment. We have received your payment successfully. You will get an email invoice soon!',
};

function Successful() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/profile');
  };

  return (
    <main className="successful">
      <img className="successful__img" src={cab} alt="404 not found" />
      <TitleAndInfo text={text} />
      <OrangeButton text="Check your trips" onClick={handleClick} />
    </main>
  );
}

export default Successful;
