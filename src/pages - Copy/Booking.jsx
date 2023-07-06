import HeroDefault from '../components/HeroDefault/HeroDefault';

import BookingContent from '../components/BookingContent/BookingContent';

const cabSearch = {
  title: 'CAB BOOKING',
  details: 'Home >> Cab Booking',
};

function Booking() {
  return (
    <>
      <HeroDefault text={cabSearch} />
      <BookingContent />
    </>
  );
}

export default Booking;
