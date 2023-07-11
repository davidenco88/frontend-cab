// eslint-disable-next-line import/no-extraneous-dependencies
import { useNavigate } from 'react-router-dom';
import { FaCrosshairs, FaRegCalendarAlt } from 'react-icons/fa';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from '../../Context';
import { SHOW_COMPONENT } from '../../Context/actionTypes';
import PickUpLocation from './PickUpLocation/PickUpLocation';
import DropOffLocation from './DropOffLocation/DropOffLocation';
import DateTimePicker from './DateTimePicker/DateTimePicker';

import './SearchForm.scss';

function SearchForm() {
  const dispatch = useDispatch();
  const { searchForm, showComponentHandler } = useSelector();

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const scheduledData = Object.fromEntries(formData);
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
          <label htmlFor="pickUpDateTime" className="searchForm__item">
            Pick Up Date-Time
            <div className="searchForm__input">
              <input
                type="text"
                id="pickUpDateTime"
                placeholder="Pick Up Date-Time"
                name="pickUpDateTime"
                value={
                  searchForm.pickUpDate !== ''
                    ? (searchForm.pickUpDate.format('DD / MM / YYYY - hh:mm A'))
                    : (searchForm.pickUpDate)
                }
                onClick={() => dispatch({
                  type: SHOW_COMPONENT,
                  payload: { componentName: 'pickUpDate', showing: true },
                })}
                readOnly
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
      <PickUpLocation />
      <DropOffLocation />
      {showComponentHandler.pickUpDate && createPortal(
        <DateTimePicker />,
        document.body,
      )}
    </>
  );
}

export default SearchForm;
