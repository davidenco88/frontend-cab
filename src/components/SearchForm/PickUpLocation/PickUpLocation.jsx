import { useRef, useEffect } from 'react';
import Swal from 'sweetalert2/dist/sweetalert2';
import { useDispatch, useSelector } from '../../../Context';
import { SET_SEARCH_FORM, SET_TRIP, SHOW_COMPONENT } from '../../../Context/actionTypes';
import './PickUpLocation.scss';

function PickUpLocation() {
  const ref = useRef();
  const dispatch = useDispatch();
  const { showComponentHandler } = useSelector();

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
        return Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Oops! Something went wrong, please try without neigbourhood and check for typos',
        });
      }
      dispatch({
        type: SET_SEARCH_FORM,
        payload: {
          fieldName: 'pickUpLocation',
          newField: data[0].display_name,
        },
      });
      dispatch({
        type: SET_TRIP,
        payload: {
          pickUpLatitude: data[0].lat,
          pickUpLongitude: data[0].lon,
        },
      });
    } catch (error) {
      return Swal.fire({
        icon: 'error',
        title: 'Error',
        text: `Oops! Something went wrong, error: ${error.message}`,
      });
    }
    return dispatch({
      type: SHOW_COMPONENT,
      payload: { componentName: 'pickUpLocation', showing: false },
    });
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        dispatch({
          type: SHOW_COMPONENT,
          payload: { componentName: 'pickUpLocation', showing: false },
        });
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);

  return (
    <div>
      {showComponentHandler.pickUpLocation ? (
        <form ref={ref} className="locationForm" onSubmit={handleSubmit}>
          <h2 className="locationForm__title">Fill your data</h2>
          <label className="locationForm__input" htmlFor="road">
            {' '}
            Road
            <input
              type="text"
              id="road"
              name="road"
              placeholder="Road"
              required
            />
          </label>
          <label className="locationForm__input" htmlFor="houseNumber">
            {' '}
            House number/Alt Address
            <input
              type="text"
              id="houseNumber"
              name="houseNumber"
              placeholder="House number/Alt Address"
              required
            />
          </label>
          <label className="locationForm__input" htmlFor="suburb">
            {' '}
            Suburb/Zone
            <input
              type="text"
              id="suburb"
              name="suburb"
              placeholder="Suburb/Zone"
              required
            />
          </label>
          <label className="locationForm__input" htmlFor="neighbourhood">
            {' '}
            Neighbourhood
            <input
              type="text"
              id="neighbourhood"
              name="neighbourhood"
              placeholder="Neighbourhood"
            />
          </label>
          <label className="locationForm__input" htmlFor="city">
            {' '}
            City
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

export default PickUpLocation;
