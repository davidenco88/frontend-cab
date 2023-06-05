// eslint-disable-next-line import/no-extraneous-dependencies
import { FaCrosshairs, FaRegCalendarAlt } from 'react-icons/fa';
import './SearchForm.css';

function SearchForm() {
  return (
    <form className="searchForm">
      <div className="c-items">
        <label htmlFor="pickUpLocation" className="searchForm__item">
          Pick Up Location
          <div className="searchForm__input">
            <input type="text" id="pickUpLocation" placeholder="Pick Up" />
            <div className="input-icon">
              <FaCrosshairs />
            </div>
          </div>
        </label>
        <label htmlFor="dropOffLocation" className="searchForm__item">
          Drop Off Location
          <div className="searchForm__input">
            <input type="text" id="dropOffLocation" placeholder="Drop Off" />
            <div className="input-icon">
              <FaCrosshairs />
            </div>
          </div>
        </label>
      </div>
      <div className="c-items">
        <label htmlFor="pickUpDate" className="searchForm__item">
          Pick Up Date
          <div className="searchForm__input">
            <input type="text" id="pickUpDate" placeholder="Pick Up" />
            <div className="input-icon">
              <FaRegCalendarAlt />
            </div>
          </div>
        </label>
        <label htmlFor="dropOffDate" className="searchForm__item">
          Drop Off Date
          <div className="searchForm__input">
            <input type="text" id="dropOffDate" placeholder="Drop Off" />
            <div className="input-icon">
              <FaRegCalendarAlt />
            </div>
          </div>
        </label>
      </div>
      <div className="c-button">
        <button type="submit">
          SEARCH
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
