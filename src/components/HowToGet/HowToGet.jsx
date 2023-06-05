
import HowToGetCard from  '../HowToGetCard/HowToGetCard.jsx';
import HowToGetCardPhone from '../HowToGetCardPhone/HowToGetCardPhone.jsx';
import './HowToGet.css'
function HowToGet() {
  return (
    <div className='HowToGet'>
      <HowToGetCardPhone/>
      <div className="HowToGet__Cards">
      <h3><span>NEW</span></h3>
      <h1>The best cap app for your mobile app</h1>
        <HowToGetCard/>
      </div>
    </div>
  );
}

export default HowToGet;
