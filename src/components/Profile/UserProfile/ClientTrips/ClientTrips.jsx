import { useState, useEffect, useRef } from 'react';
import Swal from 'sweetalert2';
import { HiClock } from 'react-icons/hi';
import { TbCircleDotFilled } from 'react-icons/tb';
import { IoExpand } from 'react-icons/io5';
import { LuShrink } from 'react-icons/lu';
import DriverDetails from './DriverDetails/DriverDetails';
import ClientDetails from './ClientDetails/ClientDetails';
import { findHistorictrips, modifyTripState, modifyCarAvailability } from '../../../../services/trip';
import './ClientTrips.scss';
import { useSelector, useDispatch } from '../../../../Context';
import { SET_CONTEXT_OBJECT } from '../../../../Context/actionTypes';

function RegularUserTrips() {
  const dispatch = useDispatch();
  // Ref y State para responsive
  const [placementInfo, setPlacementInfo] = useState(false);
  const tripWidth = useRef(null);
  // Role identification
  const profile = JSON.parse(localStorage.getItem('profile'));

  const hasDriverRole = profile.roles.some((role) => role.name === 'Driver');
  const hasClientRole = profile.roles.some((role) => role.name === 'Client');
  const dataService = {
    id: profile.id,
    isDriver: hasDriverRole,
  };

  useEffect(() => {
    findHistorictrips(dataService).then((historicTrips) => {
      dispatch({
        type: SET_CONTEXT_OBJECT,
        payload: {
          trips: historicTrips,
        },
      });
    });
  }, []);

  const { trips } = useSelector();

  useEffect(() => {
    // Logica para responsive
    const handleResize = () => {
      // Verifica el ancho del elemento
      if (tripWidth.current.offsetWidth < 510) {
        setPlacementInfo(true);
      } else {
        setPlacementInfo(false);
      }
    };

    // Listener para responsive
    window.addEventListener('resize', handleResize);

    // Limpia el controlador de eventos al desmontar el componente
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [showDetails, setShowDetails] = useState(trips.map(() => false));

  const handleShowDetails = (index) => {
    // cada item en la lista tiene su estado booleano que termina lo de expandir/ver mas
    setShowDetails((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  // Comporbaciones del estado para visualizacion
  function isScheduled(trip) {
    if (trip.tripStateId === 1) {
      return true;
    }
    return false;
  }

  function isStarted(trip) {
    if (trip.tripStateId === 2) {
      return true;
    }
    return false;
  }

  // Handlers donde irian los llamados?
  const handleCancel = async (tripId, vehicleID) => {
    const state = 4; // 4 Corresponde al ID de Cancelado
    const response = await modifyTripState(tripId, state);
    const responseAvail = await modifyCarAvailability(vehicleID, true);

    if (response.status === 200 && responseAvail.status === 200) {
      Swal.fire(
        'Success Canceletion',
        'Your trip has been successfully canceled',
        'success',
      );
    } else {
      Swal.fire(
        'Something went wrong',
        'Plese try again later',
        'error',
      );
    }

    findHistorictrips(dataService).then((historicTrips) => {
      dispatch({
        type: SET_CONTEXT_OBJECT,
        payload: {
          trips: historicTrips,
        },
      });
    });
  };

  const handleStart = async (tripId, vehicleID) => {
    const state = 2; // 4 Corresponde al ID de Cancelado
    const response = await modifyTripState(tripId, state);
    const responseAvail = await modifyCarAvailability(vehicleID, false);

    if (response.status === 200 && responseAvail.status === 200) {
      Swal.fire(
        'Success Confirmation',
        'Your trip has been successfully stared',
        'success',
      );
    } else {
      Swal.fire(
        'Something went wrong',
        'Plese try again later',
        'error',
      );
    }

    findHistorictrips(dataService).then((historicTrips) => {
      dispatch({
        type: SET_CONTEXT_OBJECT,
        payload: {
          trips: historicTrips,
        },
      });
    });
  };

  const handleFinish = async (tripId, vehicleID) => {
    const state = 3; // 4 Corresponde al ID de Cancelado
    const response = await modifyTripState(tripId, state);
    const responseAvail = await modifyCarAvailability(vehicleID, false);

    if (response.status === 200 && responseAvail.status === 200) {
      Swal.fire(
        'Success Confirmation',
        'Your trip has been successfully finished',
        'success',
      );
    } else {
      Swal.fire(
        'Something went wrong',
        'Plese try again later',
        'error',
      );
    }

    findHistorictrips(dataService).then((historicTrips) => {
      dispatch({
        type: SET_CONTEXT_OBJECT,
        payload: {
          trips: historicTrips,
        },
      });
    });
  };

  return (
    <div className="tripsList">
      {trips.map((trip, index) => (
        <div key={trip.id} className="tripsList__trip" ref={tripWidth}>
          <section className="tripsList__trip__left">
            <span className="tripsList__trip__left__span">
              <p className="tripsList__trip__type">{trip.Vehicles.VehicleTypes.type}</p>
              <button
                className="expandButton"
                type="button"
                aria-label="expand"
                onClick={() => handleShowDetails(index)}
              >
                {showDetails[index]
                  ? <LuShrink className="expandButton" />
                  : <IoExpand className="expandButton" />}
              </button>
            </span>
            <h4 className="tripsList__trip__info">
              <HiClock className="clockIcon" />
              {trip.pickUpDate}
            </h4>
            <h4 className="tripsList__trip__info">
              <TbCircleDotFilled className="pickUpIcon" />
              {trip.pickUpAddress}
            </h4>
            <h4 className="tripsList__trip__info">
              <TbCircleDotFilled className="dropOffIcon" />
              {trip.dropOffAddress}
            </h4>
          </section>

          {showDetails[index] && !placementInfo && hasClientRole && !hasDriverRole ? (
            <DriverDetails trip={trip} />
          ) : null}
          {showDetails[index] && !placementInfo && hasDriverRole && !hasClientRole ? (
            <ClientDetails trip={trip} />
          ) : null}

          <section className="tripsList__trip__right">
            <section>
              <h4 className="tripsList__trip__right__price">${trip.totalPrice.toFixed(2)}</h4>
              <p>{trip.TripState.name}</p>
            </section>
            <section className="tripsList__trip__right__bottom">
              {isScheduled(trip) && hasDriverRole ? (
                <button
                  type="button"
                  className="startButton"
                  onClick={() => { handleStart(trip.id, trip.vehicleID); }}
                >
                  Start
                </button>
              ) : null}
              {isStarted(trip) && hasDriverRole ? (
                <button
                  type="button"
                  className="finishButton"
                  onClick={() => { handleFinish(trip.id, trip.vehicleID); }}
                >
                  Finish
                </button>
              ) : null}
              {isScheduled(trip) ? (
                <button
                  type="button"
                  className="cancelButton"
                  onClick={() => { handleCancel(trip.id, trip.vehicleID); }}
                >
                  Cancel
                </button>
              ) : null}
            </section>
          </section>

          {showDetails[index] && placementInfo && hasClientRole && !hasDriverRole ? (
            <DriverDetails trip={trip} />
          ) : null}
          {showDetails[index] && placementInfo && hasDriverRole && !hasClientRole ? (
            <ClientDetails trip={trip} />
          ) : null}
        </div>
      ))}
    </div>
  );
}

export default RegularUserTrips;
