import { useState } from 'react';
import ClientTrips from '../ClientTrips/ClientTrips';
import './ProfileAccordion.scss';

function ProfileAccordion() {
  const [tripsIsActive, setTripsIsActive] = useState(false);
  const [carsIsActive, setCarsIsActive] = useState(false);
  const accordionData = {
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore, hic temporibus velit dicta earum
      suscipit commodi eum enim atque at? Et perspiciatis dolore iure
      voluptatem.`,
  };

  const { content } = accordionData;

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
        <div
          className="profileAccordion__title"
          onClick={() => setCarsIsActive(!carsIsActive)}
          aria-hidden="true"
        >
          <div>C A R S</div>
          <div>{carsIsActive ? '-' : '+'}</div>
        </div>
        {carsIsActive && <div className="profileAccordion__content">{content}</div>}
      </div>
    </div>
  );
}

export default ProfileAccordion;
