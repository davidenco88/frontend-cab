import './TripDetails.scss';

function DriverDetails(data, options) {
  const { trip } = data;
  const { vehicle, driver } = trip;

  return (
    <div className="tripDetails">
      <img className="tripDetails__avatar" src={driver.avatar} alt="driver-pic" />
      <section className="tripDetails__text">
        <h4 className="tripDetails__name">{driver.fullName}</h4>
        <h5 className="tripDetails__vehicle">{vehicle.brand} {vehicle.model} </h5>
        <h5 className="tripDetails__vehicle">{vehicle.plates}</h5>
      </section>
    </div>
  );
}

export default DriverDetails;
