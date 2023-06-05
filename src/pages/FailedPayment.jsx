import HeroDefault from '../components/HeroDefault/HeroDefault';
import Failed from '../components/Failed/Failed';

const cabSearch = {
  title: 'PAYMENT FAILED',
  details: 'Home >> Payment Failed',
};

function FailedPayment() {
  return (
    <>
      <HeroDefault text={cabSearch} />
      <Failed />
    </>
  );
}

export default FailedPayment;
