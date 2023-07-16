import Swal from 'sweetalert2';
import { useDispatch } from '../../../../Context';
import { SHOW_COMPONENT } from '../../../../Context/actionTypes';

import {
  postCreateVehicle,
  testCreateVehicle,
} from '../../../../services/cars';

import './NewCarForm.scss';

export default function NewCarForm(props) {
  const dispatch = useDispatch();
  const currentYear = new Date().getFullYear();
  const profile = JSON.parse(localStorage.getItem('profile'));

  function onCancelkHandler() {
    dispatch({
      type: SHOW_COMPONENT,
      payload: { componentName: 'addVehicle', showing: false },
    });
  }

  async function onSubmithandler(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    formData.append('driverID', profile.id);

    // const vehicleData = Object.fromEntries(formData);
    // const response = await postCreateVehicle(vehicleData);

    const response = await testCreateVehicle(formData);

    if (response.status === 200) {
      Swal.fire(
        'Your car has been successfully created',
        'Your car is now available',
        'success',
      );
      // window.location.reload();
    } else {
      Swal.fire(
        'Something is wrong',
        'Please try again',
        'error',
      );
    }

    dispatch({
      type: SHOW_COMPONENT,
      payload: { componentName: 'addVehicle', showing: false },
    });
  }

  return (
    <div className="modal-wrap">
      <div className="CarDetailsForm">
        <h3 className="CarDetailsForm__header">CAR DETAILS</h3>
        <form className="CarDetailsForm__content" onSubmit={(event) => onSubmithandler(event)} encType="multipart/form-data">
          <div className="CarDetailsForm__item CarDetailsForm__item--flex">
            <label htmlFor="CarDetailsForm__brand">
              Brand
              <div className="c-CarDetailsForm__input">
                <input
                  type="text"
                  id="CarDetailsForm__brand"
                  name="brand"
                  required
                  placeholder="Ford"
                />
              </div>
            </label>
            <label htmlFor="CarDetailsForm__model">
              Model
              <div className="c-CarDetailsForm__input">
                <input
                  type="text"
                  id="CarDetailsForm__model"
                  name="model"
                  required
                  placeholder="Bronco"
                />
              </div>
            </label>
          </div>
          <div className="CarDetailsForm__item">
            <label htmlFor="CarDetailsForm__year">
              Year Model
              <div className="c-CarDetailsForm__input">
                <input
                  type="number"
                  id="CarDetailsForm__year"
                  name="year"
                  required
                  placeholder="2023"
                  min="2000"
                  max={currentYear}
                />
              </div>
            </label>
          </div>
          <div className="CarDetailsForm__item">
            <label htmlFor="CarDetailsForm__carType">
              Number Plate
              <div className="c-CarDetailsForm__input">
                <input
                  type="tel"
                  id="CarDetailsForm__plateNumber"
                  name="plates"
                  required
                  placeholder="Number Plate"
                />
              </div>
            </label>
          </div>
          <div className="CarDetailsForm__item">
            <label htmlFor="vehicleTypeID">
              Car Type
              <div className="c-CarDetailsForm__input">
                <select defaultValue="" name="vehicleTypeID" id="vehicleTypeID" required>
                  <option value="" disabled>- Car Type -</option>
                  <option value="1">Spacious</option>
                  <option value="2">Luxury</option>
                  <option value="3">Economic</option>
                </select>
              </div>
            </label>
          </div>

          <label className="changeAvatar__label" htmlFor="image">
            <input
              className="changeAvatar__input"
              type="file"
              accept="image/*"
              name="image"
              id="image"
              // onChange={handleUpload}
            />
          </label>
          {/* <button className="changeAvatar__button" type="submit">Upload</button> */}
          <div className="CarDetailsForm__buttons">
            <button
              type="button"
              className="CarDetailsForm__button CarDetailsForm__button--cancel"
              onClick={onCancelkHandler}
            >
              Cancel
            </button>
            <button className="CarDetailsForm__button" type="submit">
              Add Car
            </button>
          </div>
        </form>
      </div>
    </div>

  );
}
