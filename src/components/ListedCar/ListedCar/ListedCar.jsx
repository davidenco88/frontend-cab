import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { fetchAvailableCars } from '../../../services/cars';
import { useDispatch, useSelector } from '../../../Context';
import { SET_VEHICLES } from '../../../Context/actionTypes';
import ImageAndType from '../ImageAndType/ImageAndType';
import InfoIcons from '../InfoIcons/InfoIcons';
import ListPrice from '../ListPrice/ListPrice';
import OrangeButton from '../../OrangeButton/OrangeButton';
import './ListedCar.scss';

function ListedCar() {
  const dispatch = useDispatch();
  const { vehicles } = useSelector();

  useEffect(() => {
    fetchAvailableCars()
      .then((fetchVehicles) => {
        dispatch({ type: SET_VEHICLES, payload: fetchVehicles });
      });
  }, []);

  return (
    <main className="list">
      {vehicles.map((item) => (
        <div className="list__listedCar" key={item.id}>
          <ImageAndType item={item} />
          <InfoIcons item={item} />
          <ListPrice item={item} />
          <NavLink className="list__listedCar__button" to="/booking">
            <OrangeButton text="Book now" />
          </NavLink>
        </div>
      ))}
    </main>
  );
}

export default ListedCar;
