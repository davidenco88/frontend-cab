import './PaymentContent.css';

import BookingSummery from '../BookingSummery/BookingSummery';
import CouponForm from '../CouponForm/CouponForm';
import PaymentOptions from '../PaymentOptions/PaymentOptions';

function PaymentContent() {
  return (
    <div className="PaymentOptions">
      <div className="PaymentOptions__Column-2">
        <div className="PaymentOptions__Column-2__item">
          <BookingSummery />
        </div>
        <div className="PaymentOptions__Column-2__item">
          <CouponForm />
        </div>
      </div>
      <div className="PaymentOptions__Column-1">
        <div className="PaymentOptions__Column-1__item">
          <PaymentOptions />
        </div>
      </div>
    </div>
  );
}

export default PaymentContent;
