import './BookingSummery.css';

function BookingSummery() {
  return (
    <div className="bookingSummery">
      <h3 className="bookingSummery__header">Booking Summery</h3>
      <div className="bookingSummery__content">
        <ul>
          <li><span>Itinerary:</span><span>Paris--Toules</span></li>
          <li><span>Pickup Date:</span><span>04/06/2023, 11:35pm</span></li>
          <li><span>Return Date:</span><span>14/06/2023, 13:00pm</span></li>
          <li><span>Car Type:</span><span>Fiat Chrysler</span></li>
        </ul>
        <h3 className="bookingSummery__total">
          <span>Total Fare:</span><span>$1250</span>
        </h3>
      </div>
    </div>
  );
}

export default BookingSummery;
