import { GiCarSeat } from 'react-icons/gi';
import { MdOutlineLuggage } from 'react-icons/md';
import { IoSnow } from 'react-icons/io5';
import { FiSettings } from 'react-icons/fi';
import './InfoIcons.scss';

function InfoIcons({ item }) {
  return (
    <div className="icons">
      <p className="icons__item"><GiCarSeat /> {item.seats} Seats</p>
      <p className="icons__item"><IoSnow /> AC</p>
      <p className="icons__item"><MdOutlineLuggage /> {item.luggage} Luggage</p>
      <p className="icons__item"><FiSettings /> {item.option} </p>
    </div>
  );
}

export default InfoIcons;
