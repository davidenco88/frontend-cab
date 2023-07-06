import HeroDefault from '../components/HeroDefault/HeroDefault';

import PaymentContent from '../components/PaymentContent/PaymentContent';

const cabSearch = {
  title: 'CAB PAYMENT',
  details: 'Home >> Cab Payment',
};

function Payment() {
  return (
    <>
      <HeroDefault text={cabSearch} />
      <PaymentContent />
    </>
  );
}

export default Payment;
