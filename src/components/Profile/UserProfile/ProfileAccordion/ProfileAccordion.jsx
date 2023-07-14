import { useState, useEffect } from 'react';
import ClientTrips from '../ClientTrips/ClientTrips';
import VehiclesDriver from '../VehiclesDriver/VehiclesDriver';
import './ProfileAccordion.scss';

function ProfileAccordion() {
  const [tripsIsActive, setTripsIsActive] = useState(false);
  const [carsIsActive, setCarsIsActive] = useState(false);

  const profile = JSON.parse(localStorage.getItem('profile'));
  const hasDriverRole = profile.roles.some((role) => role.name === 'Driver');
  const hasClientRole = profile.roles.some((role) => role.name === 'Client');

  useEffect(() => {
    if (hasClientRole) {
      setTripsIsActive(true);
    }

    if (hasDriverRole) {
      setCarsIsActive(true);
    }
  }, []);

  return (
    <div className="profileAccordion">
      <div className="profileAccordion__item">
        <div
          className="profileAccordion__title one"
          onClick={() => setTripsIsActive(!tripsIsActive)}
          aria-hidden="true"
        >
          <div>T R I P S</div>
          <div>{tripsIsActive ? '-' : '+'}</div>
        </div>
        {tripsIsActive && <div className="profileAccordion__content"><ClientTrips /> </div>}
        {hasDriverRole && (
        <div
          className="profileAccordion__title"
          onClick={() => setCarsIsActive(!carsIsActive)}
          aria-hidden="true"
        >
          <div>C A R S</div>
          <div>{carsIsActive ? '-' : '+'}</div>
        </div>
        )}
        {carsIsActive && <VehiclesDriver />}
      </div>
    </div>
  );
}

export default ProfileAccordion;
