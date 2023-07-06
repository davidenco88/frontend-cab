import { GrMapLocation } from "react-icons/gr";
import "./StepsToUseCard.css";
//TODO add json file with card data
function StepsToUseCard() {
  return (
    <div className="StepsToUseCard">
      <div className="StepsToUseCard-icon">
        <GrMapLocation />
      </div>
      <p>Arrive at your destination.</p>
    </div>
  );
}

export default StepsToUseCard;
