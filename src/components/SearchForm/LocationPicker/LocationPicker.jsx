import { useState, useRef, useEffect } from 'react';
import './LocationPicker.scss';

function LocationPicker({ state, setOpenPickUpLocation, setPickUpLocation }) {
  const [location, setLocation] = useState(null);
  const ref = useRef();

  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    const addressData = Object.fromEntries(formData);

    const address = Object.keys(addressData)
      .map((key) => {
        if (addressData[key].includes(' ')) {
          return addressData[key].replace(/ /g, '+');
        }
        return addressData[key];
      })
      .join('+');

    try {
      const response = await fetch(
        `https://geocode.maps.co/search?q=${address}`,
      );
      const data = await response.json();

      if (data.length === 0) {
        setPickUpLocation('Try without neighbourhood');
      }
      setLocation(data);
      setOpenPickUpLocation(false);
      setPickUpLocation(data[0].display_name);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpenPickUpLocation(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);

  return (
    <div>
      {state ? (
        <form ref={ref} className="locationForm" onSubmit={handleSubmit}>
          <h2 className="locationForm__title">Fill your data</h2>
          <label className="locationForm__input" htmlFor="road"> Road
            <input
              type="text"
              id="road"
              name="road"
              placeholder="Road"
              required
            />
          </label>
          <label className="locationForm__input" htmlFor="houseNumber"> House number/Alt Address
            <input
              type="text"
              id="houseNumber"
              name="houseNumber"
              placeholder="House number/Alt Address"
              required
            />
          </label>
          <label className="locationForm__input" htmlFor="suburb"> Suburb/Zone
            <input
              type="text"
              id="suburb"
              name="suburb"
              placeholder="Suburb/Zone"
              required
            />
          </label>
          <label className="locationForm__input" htmlFor="neighbourhood"> Neighbourhood
            <input
              type="text"
              id="neighbourhood"
              name="neighbourhood"
              placeholder="Neighbourhood"
            />
          </label>
          <label className="locationForm__input" htmlFor="city"> City
            <input
              type="text"
              id="city"
              name="city"
              placeholder="City"
              required
            />
          </label>
          <button className="locationForm__button" type="submit" id="submit">
            Submit
          </button>
        </form>
      ) : null}
    </div>
  );
}

export default LocationPicker;
