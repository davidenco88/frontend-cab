// eslint-disable-next-line import/no-extraneous-dependencies
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { FaCrosshairs, FaRegCalendarAlt, FaClock } from 'react-icons/fa';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from '../../Context';
import { SHOW_COMPONENT } from '../../Context/actionTypes';
import DatePicker from './DatePicker/DatePicker';
import PickUpLocation from './PickUpLocation/PickUpLocation';
import DropOffLocation from './DropOffLocation/DropOffLocation';
import TimePicker from './TimePicker/TimePicker';

import './SearchForm.scss';

function SearchForm() {
  const [showTimePicker, setShowTimePicker] = useState(false);
  console.log(showTimePicker);

  const dispatch = useDispatch();
  const { searchForm } = useSelector();

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const scheduledData = Object.fromEntries(formData);
    console.log(scheduledData);
    navigate('/cab');
  }

  return (
    <>
      <form className="searchForm" onSubmit={handleSubmit}>
        <div className="c-items">
          <label htmlFor="pickUpLocation" className="searchForm__item">
            Pick Up Location
            <div className="searchForm__input">
              <input
                onClick={() => dispatch({
                  type: SHOW_COMPONENT,
                  payload: { componentName: 'pickUpLocation', showing: true },
                })}
                type="text"
                id="pickUpLocation"
                placeholder="Pick Up"
                name="pickUpLocation"
                value={searchForm.pickUpLocation}
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
                onClick={() => dispatch({
                  type: SHOW_COMPONENT,
                  payload: { componentName: 'dropOffLocation', showing: true },
                })}
                type="text"
                id="dropOffLocation"
                placeholder="Drop Off"
                name="dropOffLocation"
                value={searchForm.dropOffLocation}
                readOnly
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
                name="pickUpDate"
                value={searchForm.pickUpDate}
                onClick={() => dispatch({
                  type: SHOW_COMPONENT,
                  payload: {
                    componentName: 'pickUpDate',
                    showing: true,
                  },
                })}
                readOnly
                required
              />
              <div className="input-icon">
                <FaRegCalendarAlt />
              </div>
            </div>
          </label>
          <label htmlFor="pickUpTime" className="searchForm__item">
            Pick Up Time
            <div className="searchForm__input">
              <input
                type="text"
                id="pickUpTime"
                placeholder="Pick Up Time"
                name="pickUpTime"
                onClick={() => setShowTimePicker(true)}
                required
              />
              <div className="input-icon">
                <FaClock />
              </div>
            </div>
          </label>
        </div>
        <div className="c-button">
          <button type="submit">SEARCH</button>
        </div>
      </form>
      <DatePicker />
      <PickUpLocation />
      <DropOffLocation />
      {showTimePicker && createPortal(
        <TimePicker onAccept={() => setShowTimePicker(false)} />,
        document.body,
      )}
    </>
  );
}

export default SearchForm;
