import { HiClock } from 'react-icons/hi';
import { TbCircleDotFilled } from 'react-icons/tb';
import './RegularUserTrips.scss';

function RegularUserTrips() {
  const trips = [
    {
      pickUpAddress: 'cll 1 #1 Santa Teresita',
      dropOffAddress: 'cll 2 # 2 Santa Teresita',
      totalPrice: 300,
      pickUpDate: '07/07/2023, 5:49 PM',
      vehicle: {
        image: 'https://cdn.imagin.studio/getImage?&customer=counivalle&make=cupra&modelFamily=formentor&modelRange=formentor&modelVariant=od&modelYear=2020',
        brand: 'Cupra',
        model: 'Formentor',
        plates: 'HHH 666',
      },
      driver: {
        avatar: 'https://res.cloudinary.com/dltibnft3/image/upload/v1688949117/profile-images/blank-profile-picture_wagjpu.jpg',
        fullName: 'Pepito Perez',
      },
      serviceType: 'Economic',
      tripState: 'Scheduled',
    },
    {
      pickUpAddress: 'cll 3 #3 Santa Teresita',
      dropOffAddress: 'cll 4 #4 Santa Teresita',
      totalPrice: 250,
      pickUpDate: '07/07/2023, 5:49 PM',
      vehicle: {
        image: 'https://cdn.imagin.studio/getImage?&customer=counivalle&make=cupra&modelFamily=formentor&modelRange=formentor&modelVariant=od&modelYear=2020',
        brand: 'Toyota',
        model: 'Corolla',
        plates: 'ABC 123',
      },
      driver: {
        avatar: 'https://res.cloudinary.com/dltibnft3/image/upload/v1688949117/profile-images/blank-profile-picture_wagjpu.jpg',
        fullName: 'Juanita Rodriguez',
      },
      serviceType: 'Economic',
      tripState: 'Scheduled',
    },
    {
      pickUpAddress: 'cll 5 #5 Santa Teresita',
      dropOffAddress: 'cll 6 #6 Santa Teresita',
      totalPrice: 400,
      pickUpDate: '07/07/2023, 5:49 PM',
      vehicle: {
        image: 'https://cdn.imagin.studio/getImage?&customer=counivalle&make=cupra&modelFamily=formentor&modelRange=formentor&modelVariant=od&modelYear=2020',
        brand: 'Tesla',
        model: 'Model 3',
        plates: 'XYZ 789',
      },
      driver: {
        avatar: 'https://res.cloudinary.com/dltibnft3/image/upload/v1688949117/profile-images/blank-profile-picture_wagjpu.jpg',
        fullName: 'Pedro Ramirez',
      },
      serviceType: 'Economic',
      tripState: 'Scheduled',
    },
    {
      pickUpAddress: 'cll 7 #7 Santa Teresita',
      dropOffAddress: 'cll 8 #8 Santa Teresita',
      totalPrice: 180,
      pickUpDate: '07/07/2023, 5:49 PM',
      vehicle: {
        image: 'https://cdn.imagin.studio/getImage?&customer=counivalle&make=cupra&modelFamily=formentor&modelRange=formentor&modelVariant=od&modelYear=2020',
        brand: 'Volkswagen',
        model: 'Golf',
        plates: 'DEF 456',
      },
      driver: {
        avatar: 'https://res.cloudinary.com/dltibnft3/image/upload/v1688949117/profile-images/blank-profile-picture_wagjpu.jpg',
        fullName: 'María Lopez',
      },
      serviceType: 'Economic',
      tripState: 'Scheduled',
    },
    {
      pickUpAddress: 'cll 9 #9 Santa Teresita',
      dropOffAddress: 'cll 10 #10 Santa Teresita',
      totalPrice: 320,
      pickUpDate: '07/07/2023, 5:49 PM',
      vehicle: {
        image: 'https://cdn.imagin.studio/getImage?&customer=counivalle&make=cupra&modelFamily=formentor&modelRange=formentor&modelVariant=od&modelYear=2020',
        brand: 'BMW',
        model: 'X5',
        plates: 'JKL 321',
      },
      driver: {
        avatar: 'https://res.cloudinary.com/dltibnft3/image/upload/v1688949117/profile-images/blank-profile-picture_wagjpu.jpg',
        fullName: 'Carlos Martinez',
      },
      serviceType: 'Economic',
      tripState: 'Scheduled',
    },
  ];
  return (
    <div className="tripsList">
      {trips.map((trip) => (
        <button className="expand" type="button">
          <div className="tripsList__trip">
            <section className="tripsList__trip__left">
              <p className="tripsList__trip__type">{trip.serviceType}</p>
              <h4 className="tripsList__trip__info"><HiClock className="clockIcon" />{trip.pickUpDate}</h4>
              <h4 className="tripsList__trip__info"><TbCircleDotFilled className="pickUpIcon" />{trip.pickUpAddress}</h4>
              <h4 className="tripsList__trip__info"><TbCircleDotFilled className="dropOffIcon" />{trip.dropOffAddress}</h4>
            </section>
            <section className="tripsList__trip__right">
              <p>${trip.totalPrice}</p>
              <p>{trip.tripState}</p>
            </section>
          </div>
        </button>
      ))}
    </div>
  );
}

export default RegularUserTrips;
