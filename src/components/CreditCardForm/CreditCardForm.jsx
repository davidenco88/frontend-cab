import './CreditCardForm.css';

function CreditCardForm() {
  return (
    <div className="creditCardOption">
      <label htmlFor="creditCard" className="creditCardOptions__header">
        <input type="radio" name="paymentOption" id="creditCard" />
        Credit Card
      </label>
      <div className="formCreditCard">
        <label htmlFor="cardOwner-cc" className="formCreditCard__item-name">
          Name On Card
          <div className="formCreditCard__input">
            <input type="text" id="cardOwner-cc" required />
          </div>
        </label>
        <label htmlFor="cardNumber-cc" className="formCreditCard__item-number ">
          Card Number
          <div className="formCreditCard__input">
            <input type="number" id="cardNumber-cc" required />
            <img src="visa_icon.svg" alt="visa icon" />
            <img src="mastercard_icon.svg" alt="mastercard icon" />
            <img src="amex_icon.svg" alt="amex icon" />
          </div>
        </label>
        <label htmlFor="cardMonth-cc">
          Month
          <div className="formCreditCard__input">
            <input type="number" id="cardMonth-cc" required />
          </div>
        </label>
        <label htmlFor="cardYear-cc">
          Year
          <div className="formCreditCard__input">
            <input type="number" id="cardYear-cc" required />
          </div>
        </label>
        <label htmlFor="cardCVV-cc">
          CVV
          <div className="formCreditCard__input">
            <input type="number" id="cardCVV-cc" required />
            <img src="cvv_icon.svg" alt="cvv icon" />
          </div>
        </label>
      </div>
    </div>
  );
}

export default CreditCardForm;
