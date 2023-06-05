import { GrMapLocation } from 'react-icons/gr';
import './WhyUseCard.css';
// TODO add json file with card data
function WhyUseCard3() {
  return (
    <div className="WhyUseCard">
      <div className="WhyUseCard-icon">
        <GrMapLocation />
      </div>
      <h3>45,000 + Locations</h3>
      <p>Rica Cab has mora than 45k Locations at diferent countries and cities.</p>
    </div>
  );
}

export default WhyUseCard3;
