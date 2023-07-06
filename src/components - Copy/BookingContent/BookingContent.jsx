import './BookingContent.css';

import BookingSummery from '../BookingSummery/BookingSummery';
import CouponForm from '../CouponForm/CouponForm';
import ContactDetailsForm from '../ContactDetailsForm/ContactDetailsForm';

function BookingContent() {
  return (
    <div className="BookingContent">
      <div className="BookingContent__Column-2">
        <div className="BookingContent__Column-2__item">
          <BookingSummery />
        </div>
        <div className="BookingContent__Column-2__item">
          <CouponForm />
        </div>
      </div>
      <div className="BookingContent__Column-1">
        <div className="BookingContent__Column-1__item">
          <ContactDetailsForm />
        </div>
      </div>
    </div>
  );
}

export default BookingContent;
