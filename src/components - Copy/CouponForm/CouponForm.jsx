import './CouponForm.css';

function CouponForm() {
  return (
    <div className="couponForm">
      <form className="form">
        <div className="couponForm__item">
          <label htmlFor="promoCode" className="couponForm__input">
            <span className="couponForm__item-name">Have A Coupon Code?</span>
            <div className="c-promoCode">
              <input type="text" name="promoCode" id="promoCode" placeholder="Promo Code" />
              <button type="button">Apply</button>
            </div>
          </label>
        </div>
        <div className="couponForm__item">
          <label htmlFor="rica50">
            <input type="radio" name="promoCode" id="rica50" />
            <span className="couponForm__item-name">RICA50</span>
            <p className="couponForm__item-descripton">Use RICA50, And Get $50 Off On First Booking.</p>
          </label>
        </div>
        <div className="couponForm__item">
          <label htmlFor="cab10">
            <input type="radio" name="promoCode" id="cab10" />
            <span className="couponForm__item-name">CAB10</span>
            <p className="couponForm__item-descripton">Use CAB10, And Get 10% Off Upto $50 On Cab Ticket Bookings.</p>
          </label>
        </div>
        <div className="couponForm__item">
          <label htmlFor="cab80">
            <input type="radio" name="promoCode" id="cab80" />
            <span className="couponForm__item-name">CAB80</span>
            <p className="couponForm__item-descripton">
              Use CAB80, And Get 80% Off + Upto 40% Cashback On Cab Bookings & More
              + Extra 10% Off Via ICICI Cards --10th to 13th OCt--
            </p>
          </label>
        </div>
      </form>
    </div>
  );
}

export default CouponForm;
