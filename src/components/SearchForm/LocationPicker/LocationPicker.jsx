import { useState } from "react";
import "./LocationPicker.scss";

function LocationPicker({ state, setOpenPickUpLocation, setPickUpLocation }) {
  const [location, setLocation] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    const addressData = Object.fromEntries(formData);

    let address = "";

    for (let key in addressData) {
      if (addressData[key].includes(" ")) {
        addressData[key] = addressData[key].replace(/ /g, "+");
      }
      address += addressData[key] + "+";
    }

    fetch(`https://geocode.maps.co/search?q=${address}`)
      .then((response) => response.json())
      .then((data) => setLocation(data));
    // return address;
    setOpenPickUpLocation(false);
    setPickUpLocation("proximamente sera el address");
    console.log(location);
  }

  return (
    <>
      {state ? (
        <>
          <form className="locationForm" onSubmit={handleSubmit}>
            <h2 className="locationForm__title">Fill your data</h2>
            <input type="text" id="road" name="road" placeholder="Road" />
            <input
              type="text"
              id="houseNumber"
              name="houseNumber"
              placeholder="House number/Alt Address"
            />
            <input
              type="text"
              id="suburb"
              name="suburb"
              placeholder="Suburb/Zone"
            />
            <input
              type="text"
              id="neighbourhood"
              name="neighbourhood"
              placeholder="Neighbourhood"
            />
            <input type="text" id="city" name="city" placeholder="City" />
            <button className="locationForm__button" type="submit" id="submit">
              Submit
            </button>
          </form>
        </>
      ) : null}
    </>
  );
}

export default LocationPicker;

{
  /* <form className="locationForm" onSubmit={handleSubmit}>
        <h2 className="locationForm__title">Fill your data</h2>
        <input type="text" id="road" name="road" placeholder="Road" />
        <input
          type="text"
          id="houseNumber"
          name="houseNumber"
          placeholder="House number/Alt Address"
        />
        <input
          type="text"
          id="suburb"
          name="suburb"
          placeholder="Suburb/Zone"
        />
        <input
          type="text"
          id="neighbourhood"
          name="neighbourhood"
          placeholder="Neighbourhood"
        />
        <input type="text" id="city" name="city" placeholder="City" />
        <button className="locationForm__button" type="submit" id="submit">
          Submit
        </button>
      </form>
      <button type="button" onClick={test}>
        TEST
      </button> */
}
