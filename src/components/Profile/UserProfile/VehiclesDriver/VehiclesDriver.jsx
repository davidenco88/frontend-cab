import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from '../../../../Context';
import { fetchVehicleByDriverId } from '../../../../services/cars';
import NewCarForm from '../NewCarForm/NewCarForm';
import { SET_CONTEXT_OBJECT, SHOW_COMPONENT } from '../../../../Context/actionTypes';

import './VehiclesDriver.scss';

function VehiclesDriver() {
  const dispatch = useDispatch();
  const { driverVehicles, showComponentHandler } = useSelector();

  const profile = JSON.parse(localStorage.getItem('profile'));

  useEffect(() => {
    fetchVehicleByDriverId(profile.id).then((vehicles) => {
      dispatch({
        type: SET_CONTEXT_OBJECT,
        payload: {
          driverVehicles: vehicles,
        },
      });
    });
  }, []);

  function onClickAddCarhandler() {
    dispatch({
      type: SHOW_COMPONENT,
      payload: { componentName: 'addVehicle', showing: true },
    });
  }

  return (
    <>
      <div className="addVehicle">
        <button className="orangeButton" onClick={onClickAddCarhandler}>Add New Car</button>
      </div>

      {driverVehicles.map((vehicle) => (
        <div key={vehicle.id} className="vehicleDriver">
          <div className="vehicleDriver__image">
            <img className="vehicleDriver__image__pic" src={vehicle.image} alt="" />
          </div>
          <div className="vehicleDriver__info">
            <span className="vehicleDriver__info__row">
              <h3 className="vehicleDriver__info__field">Brand:</h3>
              <h3 className="vehicleDriver__info__value">{vehicle.brand}</h3>
            </span>
            <span className="vehicleDriver__info__row">
              <h3 className="vehicleDriver__info__field">Model:</h3>
              <h3 className="vehicleDriver__info__value">{vehicle.model}</h3>
            </span>
            <span className="vehicleDriver__info__row">
              <h3 className="vehicleDriver__info__field">Plates:</h3>
              <h3 className="vehicleDriver__info__value">{vehicle.plates}</h3>
            </span>
            <span className="vehicleDriver__info__row">
              <h3 className="vehicleDriver__info__field">Year:</h3>
              <h3 className="vehicleDriver__info__value">{vehicle.year}</h3>
            </span>
            <span className="vehicleDriver__info__row">
              <h3 className="vehicleDriver__info__field">Service Type:</h3>
              <h3 className="vehicleDriver__info__value">{vehicle.VehicleTypes.type}</h3>
            </span>
          </div>
        </div>
      ))}

      {showComponentHandler.addVehicle && createPortal(
        <NewCarForm />,
        document.body,
      )}
    </>
  );
}

export default VehiclesDriver;
