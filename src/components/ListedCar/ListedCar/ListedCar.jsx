import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { fetchAvailableCars } from '../../../services/cars';
import { useDispatch, useSelector } from '../../../Context';
import { SET_VEHICLES, SET_TRIP } from '../../../Context/actionTypes';
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
        type: SET_VEHICLES,
        payload: {
          originalVehicles: fetchVehicles,
          renderVehicles: fetchVehicles,
        },
      });
    });
  }, []);
  // const handleClick = (item) => {
  //   dispatch({ type: SET_TRIP, payload: { selectedVehicle: item } });
  // };
  const isSearchFormEmpty = (searchForm.pickUpDate === ''
          || searchForm.pickUpLocation === ''
          || searchForm.dropOffLocation === '');

  return (
    <main className="list">
      {renderVehicles.map((item) => (
        <div className="list__listedCar" key={item.id}>
          <ImageAndType item={item} />
          <InfoIcons item={item} />
          <ListPrice item={item} />
          <NavLink className="list__listedCar__button" to="/booking">
            <OrangeButton isDisabled={isSearchFormEmpty} text="Book now" />
          </NavLink>
        </div>
      ))}
    </main>
  );
}

export default ListedCar;
