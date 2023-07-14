// eslint-disable-next-line import/no-extraneous-dependencies
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useNavigate } from 'react-router-dom';
import { fetchPayment, fetchRegisterPayment } from '../../services/payments';
import { modifyCarAvailability } from '../../services/trip';
import { useSelector } from '../../Context';
import './CreditCardForm.css';

function CreditCardForm() {
  const navigate = useNavigate();

  const stripe = useStripe();
  const elements = useElements();

  const { createdTrip, trip } = useSelector();

  const onSubmithandle = async (event) => {
    event.preventDefault();

    const cardDetails = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardDetails,
    });

    const amount = Math.round(createdTrip.totalPrice * 100);

    const response = await fetchPayment(paymentMethod, amount);

    if (response.status === 200) {
      const response = fetchRegisterPayment(createdTrip);
      modifyCarAvailability(trip.selectedVehicle.id, false);
      navigate('/successful');
    } else {
      navigate('/failed');
    }
  };

  return (
    <div className="creditCardOption">
      <h3 className="creditCardOptions__header">
        Card Details
      </h3>
      <form className="formCreditCard" onSubmit={onSubmithandle}>
        <div className="formCreditCard__input">
          <CardElement />
        </div>
        <button className="orangeButton" type="submit">MAKE PAYMENT</button>
      </form>
    </div>
  );
}

export default CreditCardForm;
