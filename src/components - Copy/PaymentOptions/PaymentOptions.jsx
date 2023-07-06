import CreditCardForm from '../CreditCardForm/CreditCardForm';
import './PaymentOptions.css';

function PaymentOptions() {
  return (
    <div className="paymentOptions">
      <div className="paymentOptions__header">
        <p>Payment Options</p>
      </div>
      <div className="paymentOptions__content">
        <CreditCardForm />
      </div>
    </div>
  );
}

export default PaymentOptions;
