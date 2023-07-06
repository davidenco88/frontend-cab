import "./Successful.scss";
import TitleAndInfo from "../TitleAndInfo/TitleAndInfo";
import cab from "../../assets/Successful/cab.png";

const text = {
  title: "Payment Successful ! Get Ready To Ride",
  description:
    "Thank you for your payment. We have received your payment successfully. Your transaction ID is 'HSADH3434H3266'. You will get an email invoice soon!",
};

function Successful() {
  return (
    <main className="successful">
      <img className="successful__img" src={cab} alt="404 not found" />
      <TitleAndInfo text={text} />
      <button type="button" className="successful__button">
        Download invoice
      </button>
    </main>
  );
}

export default Successful;
