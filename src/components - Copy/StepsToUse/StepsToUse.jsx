import StepsToUseCard from '../StepsToUseCard/StepsToUseCard.jsx';
import StepsToUseCard2 from '../StepsToUseCard/StepsToUseCard2.jsx';
import StepsToUseCard3 from '../StepsToUseCard/StepsToUseCard3.jsx';
import StepsToUseCard4 from '../StepsToUseCard/StepsToUseCard4.jsx';
import './StepsToUse.css';

function StepsToUse() {
  return (
    <div className="StepsToUse">
      <h1>Super Easy Booking</h1>
      <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br />
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
      </h3>
      <div className="StepsToUse__Cards">
        <StepsToUseCard />
        <StepsToUseCard2 />
        <StepsToUseCard3 />
        <StepsToUseCard4 />
      </div>
    </div>
  );
}

export default StepsToUse;
