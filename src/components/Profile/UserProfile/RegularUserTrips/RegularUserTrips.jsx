import { useState } from 'react';
import { HiClock } from 'react-icons/hi';
import { TbCircleDotFilled } from 'react-icons/tb';
import { IoExpand } from 'react-icons/io5';
import { LuShrink } from 'react-icons/lu';
import './RegularUserTrips.scss';

function RegularUserTrips() {
  const profile = JSON.parse(localStorage.getItem('profile'));
  const hasDriverRole = profile.roles.some((role) => role.name === 'Client');

  const trips = [
    {
      id: 1,
      pickUpAddress: 'cll 1 #1 Santa Teresita',
      dropOffAddress: 'cll 2 # 2 Santa Teresita',
      totalPrice: 300,
      pickUpDate: '07/07/2023, 5:49 PM',
      vehicle: {
        image:
          'https://cdn.imagin.studio/getImage?&customer=counivalle&make=cupra&modelFamily=formentor&modelRange=formentor&modelVariant=od&modelYear=2020',
        brand: 'Cupra',
        model: 'Formentor',
        plates: 'HHH 666',
      },
      driver: {
        avatar:
          'https://res.cloudinary.com/dltibnft3/image/upload/v1688949117/profile-images/blank-profile-picture_wagjpu.jpg',
        fullName: 'Pepito Perez',
      },
      serviceType: 'Economic',
      tripState: 'Scheduled',
    },
    {
      id: 2,
      pickUpAddress: 'cll 3 #3 Santa Teresita',
      dropOffAddress: 'cll 4 #4 Santa Teresita',
      totalPrice: 250,
      pickUpDate: '07/07/2023, 5:49 PM',
      vehicle: {
        image:
          'https://cdn.imagin.studio/getImage?&customer=counivalle&make=cupra&modelFamily=formentor&modelRange=formentor&modelVariant=od&modelYear=2020',
        brand: 'Toyota',
        model: 'Corolla',
        plates: 'ABC 123',
      },
      driver: {
        avatar:
          'https://res.cloudinary.com/dltibnft3/image/upload/v1688949117/profile-images/blank-profile-picture_wagjpu.jpg',
        fullName: 'Juanita Rodriguez',
      },
      serviceType: 'Economic',
      tripState: 'Started',
    },
    {
      id: 3,
      pickUpAddress: 'cll 5 #5 Santa Teresita',
      dropOffAddress: 'cll 6 #6 Santa Teresita',
      totalPrice: 400,
      pickUpDate: '07/07/2023, 5:49 PM',
      vehicle: {
        image:
          'https://cdn.imagin.studio/getImage?&customer=counivalle&make=cupra&modelFamily=formentor&modelRange=formentor&modelVariant=od&modelYear=2020',
        brand: 'Tesla',
        model: 'Model 3',
        plates: 'XYZ 789',
      },
      driver: {
        avatar:
          'https://res.cloudinary.com/dltibnft3/image/upload/v1688949117/profile-images/blank-profile-picture_wagjpu.jpg',
        fullName: 'Pedro Ramirez',
      },
      serviceType: 'Economic',
      tripState: 'Finished',
    },
    {
      id: 4,
      pickUpAddress: 'cll 7 #7 Santa Teresita',
      dropOffAddress: 'cll 8 #8 Santa Teresita',
      totalPrice: 180,
      pickUpDate: '07/07/2023, 5:49 PM',
      vehicle: {
        image:
          'https://cdn.imagin.studio/getImage?&customer=counivalle&make=cupra&modelFamily=formentor&modelRange=formentor&modelVariant=od&modelYear=2020',
        brand: 'Volkswagen',
        model: 'Golf',
        plates: 'DEF 456',
      },
      driver: {
        avatar:
          'https://res.cloudinary.com/dltibnft3/image/upload/v1688949117/profile-images/blank-profile-picture_wagjpu.jpg',
        fullName: 'María Lopez',
      },
      serviceType: 'Economic',
      tripState: 'Finished',
    },
    {
      id: 5,
      pickUpAddress: 'cll 9 #9 Santa Teresita',
      dropOffAddress: 'cll 10 #10 Santa Teresita',
      totalPrice: 320,
      pickUpDate: '07/07/2023, 5:49 PM',
      vehicle: {
        image:
          'https://cdn.imagin.studio/getImage?&customer=counivalle&make=cupra&modelFamily=formentor&modelRange=formentor&modelVariant=od&modelYear=2020',
        brand: 'BMW',
        model: 'X5',
        plates: 'JKL 321',
      },
      driver: {
        avatar:
          'https://res.cloudinary.com/dltibnft3/image/upload/v1688949117/profile-images/blank-profile-picture_wagjpu.jpg',
        fullName: 'Carlos Martinez',
      },
      serviceType: 'Economic',
      tripState: 'Canceled',
    },
  ];

  const [showDetails, setShowDetails] = useState(trips.map(() => false));

  function isScheduled(trip) {
    if (trip.tripState === 'Scheduled') {
      return true;
    }
    return false;
  }
  const handleCancel = () => {
    // Aca va la lógica para actualizar el estado del viaje a cancelado
  };

  const handleStart = () => {
    // Aca va la lógica para actualizar el estado del viaje a cancelado
  };
  const handleShowDetails = (index) => {
    // Algo se pone true y eso cambia la vizualizacion?
    setShowDetails((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <div className="tripsList">
      {trips.map((trip, index) => (
        <div key={trip.id} className="tripsList__trip">
          <section className="tripsList__trip__left">
            <span className="tripsList__trip__left__span">
              <p className="tripsList__trip__type">{trip.serviceType}</p>
              <button
                className="expandButton"
                type="button"
                aria-label="expand"
                onClick={() => handleShowDetails(index)}
              >
                {showDetails[index] ? <LuShrink className="expandButton" /> : <IoExpand className="expandButton" />}

              </button>
            </span>
            <h4 className="tripsList__trip__info">
              <HiClock className="clockIcon" />
              {trip.pickUpDate}
            </h4>
            <h4 className="tripsList__trip__info">
              <TbCircleDotFilled className="pickUpIcon" />
              {trip.pickUpAddress}
            </h4>
            <h4 className="tripsList__trip__info">
              <TbCircleDotFilled className="dropOffIcon" />
              {trip.dropOffAddress}
            </h4>
          </section>
          <section className="tripsList__trip__right">
            <section>
              <p>${trip.totalPrice}</p>
              <p>{trip.tripState}</p>
            </section>
            <section className="tripsList__trip__right__bottom">
              {isScheduled(trip) && hasDriverRole ? (
                <button
                  type="button"
                  className="startButton"
                  onClick={handleStart}
                >
                  Start
                </button>
              ) : null}
              {isScheduled(trip) ? (
                <button
                  type="button"
                  className="cancelButton"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
              ) : null}
            </section>
          </section>
        </div>
      ))}
    </div>
  );
}

export default RegularUserTrips;
