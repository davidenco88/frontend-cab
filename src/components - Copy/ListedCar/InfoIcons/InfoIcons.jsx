import { GiCarSeat } from 'react-icons/gi';
import { MdOutlineLuggage } from 'react-icons/md';
import './InfoIcons.scss';

function InfoIcons({ item }) {
  const { VehicleTypes } = item;
  return (
    <div className="icons">
      <p className="icons__item"><GiCarSeat /> {VehicleTypes.seats} Seats</p>
      <p className="icons__item"><MdOutlineLuggage />Luggage: {VehicleTypes.luggage}</p>
    </div>
  );
}

export default InfoIcons;
