import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import CreditCardForm from '../CreditCardForm/CreditCardForm';

import './PaymentOptions.css';

const stripePromise = loadStripe('pk_test_51NQp0PAZSJwZCRk8ayK08jaJ94er9slqbBktNTjYOZDZcC2OBByYavtg26XZqwbyuWpF31NpYo7rFf66RXzsz9wr00fPwMiug6');

function PaymentOptions() {
  // const options = {
  //   // passing the client secret obtained from the server
  //   clientSecret: '{{CLIENT_SECRET}}',
  // };

  return (

    <div className="paymentOptions">
      <div className="paymentOptions__header">
        <p>Payment Options</p>
      </div>
      <div className="paymentOptions__content">
        <Elements stripe={stripePromise}>
          <CreditCardForm />
        </Elements>
      </div>
    </div>

  );
}

export default PaymentOptions;
