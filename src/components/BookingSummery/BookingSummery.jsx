import { useEffect } from 'react';
import { useSelector } from '../../Context';
import './BookingSummery.css';

function BookingSummery() {
  const { searchForm, trip } = useSelector();

  useEffect(() => {
    // Aca el fetch enviando un post al back para calculo de fee con la info de trip?
  }, []);

  const pickUpArray = searchForm.pickUpLocation.split(',');
  const pickUp = `${pickUpArray[0]} ${pickUpArray[1]}`;
  const dropOffArray = searchForm.dropOffLocation.split(',');
  const dropOff = `${dropOffArray[0]} ${dropOffArray[1]}`;

  return (
    <div className="bookingSummery">
      <h3 className="bookingSummery__header">Booking Summery</h3>
      <div className="bookingSummery__content">
        <ul>
          <li>
            <h4>Pick Up:</h4>
            <span>{pickUp}</span>
          </li>
          <li>
            <h4>Drop Off:</h4>
            <span> {dropOff}</span>
          </li>
          <li>
            <h4>Pickup Date:</h4>
            <span>{searchForm.pickUpDate.format('DD / MM / YYYY - hh:mm A')}</span>
          </li>
          <li>
            <h4>Vehicle Type:</h4>
            <span>{trip.selectedVehicle.VehicleTypes.type}</span>
          </li>
          <li>
            <h4>Vehicle:</h4>
            <span>{trip.selectedVehicle.brand} {trip.selectedVehicle.model}</span>
          </li>
        </ul>
        <h3 className="bookingSummery__total">
          <span>Total Fare:</span><span>$1250</span>
        </h3>
      </div>
    </div>
  );
}

export default BookingSummery;
