import { useEffect } from 'react';
import { useDispatch, useSelector } from '../../../../Context';
import { fetchVehicleByDriverId } from '../../../../services/cars';
import { SET_CONTEXT_OBJECT } from '../../../../Context/actionTypes';

import './VehiclesDriver.scss';

function VehiclesDriver() {
  const dispatch = useDispatch();
  const { driverVehicles } = useSelector();
  useEffect(() => {
    fetchVehicleByDriverId(3).then((vehicles) => {
      dispatch({
        type: SET_CONTEXT_OBJECT,
        payload: {
          driverVehicles: vehicles,
        },
      });
    });
  }, []);

  return (
    <>
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
    </>
  );
}

export default VehiclesDriver;