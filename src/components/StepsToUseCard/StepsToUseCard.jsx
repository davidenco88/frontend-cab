import { BsPhoneVibrate } from "react-icons/bs";
import "./StepsToUseCard.css";
//TODO add json file with card data
function StepsToUseCard() {
  return (
    <div className="StepsToUseCard">
      <div className="StepsToUseCard-icon">
        <BsPhoneVibrate />
      </div>
      <p>Book cab threw website or app.</p>
    </div>
  );
}

export default StepsToUseCard;
