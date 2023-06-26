// eslint-disable-next-line import/no-extraneous-dependencies
import { useState, useEffect } from "react";
import { FaCrosshairs, FaRegCalendarAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import DatePicker from "./DatePicker/DatePicker";
import LocationPicker from "./LocationPicker/LocationPicker";
import "./SearchForm.scss";

function SearchForm() {
  const [clickedPickUpDate, setClickedPickUpDate] = useState(false);
  const [pickUpDate, setPickUpDate] = useState("");
  const [openPickUpLocation, setOpenPickUpLocation] = useState(false);
  const [pickUpLocation, setPickUpLocation] = useState("");

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const scheduledData = Object.fromEntries(formData);
    console.log(scheduledData);
    navigate("/cab");
  }

  return (
    <>
      <form className="searchForm" onSubmit={handleSubmit}>
        <div className="c-items">
          <label htmlFor="pickUpLocation" className="searchForm__item">
            Pick Up Location
            <div className="searchForm__input">
              <input
                onClick={() => setOpenPickUpLocation(true)}
                type="text"
                id="pickUpLocation"
                placeholder="Pick Up"
                name="pickUpLocation"
                value={pickUpLocation}
                readOnly
                required
              />
              <div className="input-icon">
                <FaCrosshairs />
              </div>
            </div>
          </label>
          <label htmlFor="dropOffLocation" className="searchForm__item">
            Drop Off Location
            <div className="searchForm__input">
              <input
                type="text"
                id="dropOffLocation"
                placeholder="Drop Off"
                name="dropOffLocation"
                required
              />
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
              <input
                type="text"
                id="pickUpDate"
                placeholder="Pick Up"
                name="pickUpdate"
                value={pickUpDate}
                onClick={() => setClickedPickUpDate(true)}
                readOnly
                required
              />
              <div className="input-icon">
                <FaRegCalendarAlt />
              </div>
            </div>
          </label>
          <label htmlFor="dropOffDate" className="searchForm__item">
            Drop Off Date
            <div className="searchForm__input">
              <input
                type="text"
                id="dropOffDate"
                placeholder="Drop Off"
                name="dropOffDate"
                required
              />
              <div className="input-icon">
                <FaRegCalendarAlt />
              </div>
            </div>
          </label>
        </div>
        <div className="c-button">
          <button type="submit">SEARCH</button>
        </div>
      </form>
      <DatePicker
        state={clickedPickUpDate}
        setClickedPickUp={setClickedPickUpDate}
        setPickUpDate={setPickUpDate}
      />
      <LocationPicker
        state={openPickUpLocation}
        setOpenPickUpLocation={setOpenPickUpLocation}
        setPickUpLocation={setPickUpLocation}
      />
    </>
  );
}

export default SearchForm;
