// import { NavLink } from 'react-router-dom';
// import OrangeButton from '../OrangeButton/OrangeButton';
import './ContactDetailsForm.css';

function ContactDetailsForm() {
  return (
    <div className="ContactDetailsForm">
      <h3 className="ContactDetailsForm__header">Contact Details</h3>
      <form className="ContactDetailsForm__content">
        <div className="ContactDetailsForm__item ContactDetailsForm__item--flex">
          <label htmlFor="ContactDetailsForm__firstName">
            First Name
            <div className="c-ContactDetailsForm__input">
              <input type="text" id="ContactDetailsForm__firstName" required placeholder="First name" />
            </div>
          </label>
          <label htmlFor="ContactDetailsForm__lastName">
            Last name
            <div className="c-ContactDetailsForm__input">
              <input type="text" id="ContactDetailsForm__lastName" required placeholder="Last name" />
            </div>
          </label>
        </div>
        <div className="ContactDetailsForm__item">
          <label htmlFor="ContactDetailsForm__email">
            Email Adress
            <div className="c-ContactDetailsForm__input">
              <input type="email" id="ContactDetailsForm__email" required placeholder="Enter email" />
            </div>
            <span>Booking confirmation will be sent to this email ID</span>
          </label>
        </div>
        <div className="ContactDetailsForm__item">
          <label htmlFor="ContactDetailsForm__phoneNumber">
            Phone Number
            <div className="c-ContactDetailsForm__input">
              <input type="tel" id="ContactDetailsForm__phoneNumber" required placeholder="Phone Number" />
            </div>
          </label>
        </div>
        <div className="ContactDetailsForm__item">
          <label htmlFor="ContactDetailsForm__request">
            Special Request
            <div className="c-ContactDetailsForm__input">
              <textarea id="ContactDetailsForm__request" cols="30" rows="10" />
            </div>
          </label>
        </div>
        <div className="ContactDetailsForm__item">
          <label htmlFor="ContactDetailsForm__promoCode" className="ContactDetailsForm__promoCode">
            Have A Coupon Code?
            <div className="c-ContactDetailsForm__promoCode">
              <input type="text" name="ContactDetailsForm__promoCode" id="ContactDetailsForm__promoCode" placeholder="Promo Code" />
              <button type="button">Apply</button>
            </div>
          </label>
        </div>
        {/* <NavLink className="ContactDetailsForm__button" to="/payment">
          <OrangeButton text="PROCEED TO PAY" />
        </NavLink> */}
      </form>
    </div>
  );
}

export default ContactDetailsForm;
