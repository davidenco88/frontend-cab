
import HowToGetCard from  '../HowToGetCard/HowToGetCard.jsx';
import HowToGetCardPhone from '../HowToGetCardPhone/HowToGetCardPhone.jsx';
import './HowToGet.css'
function HowToGet() {
  return (
    <div className='HowToGet'>
      <h3><span>NEW</span></h3>
      <h1>Super Easy Booking</h1>
      <div class="HowToGet__Cards">
        <HowToGetCard/>
        <HowToGetCardPhone/>
      </div>
    </div>
  );
}

export default HowToGet;
