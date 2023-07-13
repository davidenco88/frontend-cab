import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchAvailableCars } from '../../../services/cars';
import { useDispatch, useSelector } from '../../../Context';
import { SET_CONTEXT_OBJECT, SET_TRIP } from '../../../Context/actionTypes';
import { createTrip } from '../../../services/trip';
import ImageAndType from '../ImageAndType/ImageAndType';
import InfoIcons from '../InfoIcons/InfoIcons';
import ListPrice from '../ListPrice/ListPrice';
import OrangeButton from '../../OrangeButton/OrangeButton';
import './ListedCar.scss';

function ListedCar() {
  const dispatch = useDispatch();
  const { renderVehicles, searchForm, trip } = useSelector();

  useEffect(() => {
    fetchAvailableCars().then((fetchVehicles) => {
      dispatch({
        type: SET_CONTEXT_OBJECT,
        payload: {
          originalVehicles: fetchVehicles,
          renderVehicles: fetchVehicles,
        },
      });
    });
  }, []);

  const navigate = useNavigate();

  async function onClickBookHandler(item) {
    // const newtrip = await dispatch({ type: SET_TRIP, payload: { selectedVehicle: item } });
    // dispatch({ type: SET_TRIP, payload: { selectedVehicle: item } });
    // CUAL ES LA DIFERENCIA ENTRE USAR EL DISPATCH, ESTE
    // NO ES INMEDIATO Y LO DE ABAJO SI?
    trip.selectedVehicle = item;
    trip.clientID = JSON.parse(localStorage.getItem('profile')).id;
    const newTrip = await createTrip(trip);

    if (newTrip.status === 201) {
      dispatch({ type: SET_CONTEXT_OBJECT, payload: { createdTrip: newTrip.data } });
      navigate('/booking');
    } else {
      console.log('Algo salio mal en la funcion postTrip');
    }
  }

  const isLoggedIn = !!localStorage.getItem('authToken');
  const isMissingSomething = searchForm.pickUpDate === ''
    || searchForm.pickUpLocation === ''
    || searchForm.dropOffLocation === ''
    || !isLoggedIn;

  return (
    <main className="list">
      {renderVehicles.map((item) => (
        <div className="list__listedCar" key={item.id}>
          <ImageAndType item={item} />
          <InfoIcons item={item} />
          <ListPrice item={item} />
          {/* <NavLink className="list__listedCar__button" to="/booking"> */}
          <OrangeButton
            isDisabled={isMissingSomething}
            text="Book now"
            onClick={() => onClickBookHandler(item)}
          />
          {/* </NavLink> */}
        </div>
      ))}
    </main>
  );
}

export default ListedCar;
