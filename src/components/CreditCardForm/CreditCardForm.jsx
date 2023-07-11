// eslint-disable-next-line import/no-extraneous-dependencies
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { fetchPayment, fetchRegisterPayment } from '../../services/payments';
import { useDispatch, useSelector } from '../../Context';
import Swal from 'sweetalert2'
import './CreditCardForm.css';

function CreditCardForm() {
  const stripe = useStripe();
  const elements = useElements();

  const { createdTrip } = useSelector();
  console.log(createdTrip);

  const onSubmithandle = async (event) => {
    event.preventDefault();

    const cardDetails = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardDetails,
    });

    const response = await fetchPayment(paymentMethod);

    if (response.status === 200) {
      const response = fetchRegisterPayment(createdTrip);
      Swal.fire(
        'Success payment',
        'Your trip has been successfully booked',
        'success'
      );
    } else {
      Swal.fire(
        'Something went wrong',
        'Plese check your card details',
        'error'
      );
    }

    const data = await response.json();
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
