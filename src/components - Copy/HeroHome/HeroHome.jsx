import "./HeroHomeStyles.css";
import SearchForm from "../SearchForm/SearchForm";

function HeroHome() {
  return (
    <div className="hero">
      <div className="hero__content">
        <h1>Book Your CAB</h1>
        <p>Rent Cab With Affordable Price With Rica Cab</p>
        <SearchForm />
      </div>
      <div className="hero__background" />
    </div>
  );
}

export default HeroHome;
