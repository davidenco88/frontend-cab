// eslint-disable-next-line import/no-extraneous-dependencies
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import fetchPayment from '../../services/payments';
import './CreditCardForm.css';

function CreditCardForm() {
  const stripe = useStripe();
  const elements = useElements();

  const onSubmithandle = async (event) => {
    event.preventDefault();

    const cardDetails = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardDetails,
    });

    const response = await fetchPayment(paymentMethod);

    const data = await response.json();
    console.log(data);
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
