import { NavLink } from 'react-router-dom';
import OrangeButton from '../OrangeButton/OrangeButton';
import TitleAndInfo from '../TitleAndInfo/TitleAndInfo';
import notFound from '../../assets/Failed/notFound.png';
import './Failed.scss';


const text = {

  title: 'Oops! We are Unable To Process Your Payment',
  description:
    'Looks like we encountered an error. Please try again. If you continue to have issues, try another payment method.',
};

function Failed() {
  return (
    <main className="failed">
      <img className="failed__img" src={notFound} alt="404 not found" />
      <TitleAndInfo text={text} />
      <NavLink to="/">
        <OrangeButton text="TRY AGAIN" />
      </NavLink>
    </main>
  );
}

export default Failed;
