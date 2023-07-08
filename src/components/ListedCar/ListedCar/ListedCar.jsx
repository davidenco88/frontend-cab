import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { fetchAvailableCars } from '../../../services/cars';
import { useDispatch, useSelector } from '../../../Context';
import { SET_CONTEXT_OBJECT, SET_TRIP } from '../../../Context/actionTypes';
import ImageAndType from '../ImageAndType/ImageAndType';
import InfoIcons from '../InfoIcons/InfoIcons';
import ListPrice from '../ListPrice/ListPrice';
import OrangeButton from '../../OrangeButton/OrangeButton';
import './ListedCar.scss';

function ListedCar() {
  const dispatch = useDispatch();
  const { renderVehicles, searchForm } = useSelector();

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
          <NavLink className="list__listedCar__button" to="/booking">
            <OrangeButton
              isDisabled={isMissingSomething}
              text="Book now"
              onClick={() => dispatch({ type: SET_TRIP, payload: { selectedVehicle: item } })}
            />
          </NavLink>
        </div>
      ))}
    </main>
  );
}

export default ListedCar;
