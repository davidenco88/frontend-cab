import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { fetchCars } from '../../../services/cars';
import ImageAndType from '../ImageAndType/ImageAndType';
import InfoIcons from '../InfoIcons/InfoIcons';
import ListPrice from '../ListPrice/ListPrice';
import OrangeButton from '../../OrangeButton/OrangeButton';
import './ListedCar.scss';

function ListedCar() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetchCars()
      .then((vehicles) => {
        setCars(vehicles);
      });
  }, []);

  return (
    <main className="list">
      {cars.map((item) => (
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
