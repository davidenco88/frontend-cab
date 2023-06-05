
import WhyUseCard from  '../WhyUseCard/WhyUseCard.jsx';
import WhyUseCard2 from '../WhyUseCard/WhyUseCard2.jsx';
import WhyUseCard3 from '../WhyUseCard/WhyUseCard3.jsx';
import WhyUseCard4 from '../WhyUseCard/WhyUseCard4.jsx';
import './WhyUse.css'
function WhyUse() {
  return (
    <div className='WhyUse'>
      <h3>WHY CHOOSE RICA</h3>
      <h2>Welcome to Rica</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <div className="WhyUse__Cards">
        <WhyUseCard/>
        <WhyUseCard2/>
        <WhyUseCard3/>
        <WhyUseCard4/>
      </div>
    </div>
  );
}

export default WhyUse;
