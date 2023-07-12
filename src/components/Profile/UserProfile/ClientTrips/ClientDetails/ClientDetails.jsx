import '../DriverDetails/TripDetails.scss';

function ClientDetails(data) {
  const { trip } = data;
  const { Vehicles, Users } = trip;

  return (
    <div className="tripDetails">
      <img className="tripDetails__avatar" src={Users.avatar} alt="driver-pic" />
      <section className="tripDetails__text">
        <h4 className="tripDetails__name">{`${Users.name}${" "}${Users.lastname}`}</h4>
        {/* <h5 className="tripDetails__vehicle">{vehicle.brand} {vehicle.model} </h5>
        <h5 className="tripDetails__vehicle">{vehicle.plates}</h5> */}
      </section>
    </div>
  );
}

export default ClientDetails;
