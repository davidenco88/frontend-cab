import './HeroHomeStyles.css';
import SearchForm from '../SearchForm/SearchForm';

function HeroHome() {
  return (
    <div className="hero">

      <div className="hero__content">
        <h1>Book Your CAB</h1>
        <p>Rent Cab With Affordable Price With Rica Cab</p>
        <form className="hero__location">
          <label htmlFor="diff-location">
            <input type="radio" name="location" id="diff-location" value="Different" />
            Different Location
          </label>
          <label htmlFor="same-location">
            <input type="radio" name="location" id="same-location" value="Same" />
            Same Location
          </label>
        </form>
        <SearchForm />
      </div>
      <div className="hero__background" />
    </div>
  );
}

export default HeroHome;
