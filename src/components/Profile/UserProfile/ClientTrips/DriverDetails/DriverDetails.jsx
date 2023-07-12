import './TripDetails.scss';

function DriverDetails(data, options) {
  const { trip } = data;
  const { Vehicles } = trip;

  return (
    <div className="tripDetails">
      <img className="tripDetails__avatar" src={Vehicles.Users.avatar} alt="driver-pic" />
      <section className="tripDetails__text">
        <h4 className="tripDetails__name">{`${Vehicles.Users.name}${" "}${Vehicles.Users.lastname}`}</h4>
        <h5 className="tripDetails__vehicle">{Vehicles.brand} {Vehicles.model} </h5>
        <h5 className="tripDetails__vehicle">{Vehicles.plates}</h5>
      </section>
    </div>
  );
}

export default DriverDetails;
