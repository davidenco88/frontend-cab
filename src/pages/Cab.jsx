import { useSelector } from '../Context';
import ListedCar from '../components/ListedCar/ListedCar/ListedCar';
import HeroDefault from '../components/HeroDefault/HeroDefault';
import ListFilter from '../components/ListFilter/ListFilter';
import SearchForm from '../components/SearchForm/SearchForm';
import './Cab.scss';

const cabSearch = {
  title: 'CAB SEARCH',
  details: 'Home >> Cab Payment',
};

function Cab() {
  const { searchForm } = useSelector();

  const isLoggedIn = !!localStorage.getItem('authToken');
  const isMissingSomething = searchForm.pickUpDate === ''
    || searchForm.pickUpLocation === ''
    || searchForm.dropOffLocation === ''
    || !isLoggedIn;
  return (
    <>
      <HeroDefault text={cabSearch} />
      <div className="cabSearch">
        <SearchForm />
      </div>
      {isMissingSomething ? (<h3 className="verification">Sign in and fill search form to book</h3>) : null}
      <main className="cabMain">
        <ListFilter className="cabMain__filter" />
        <ListedCar className="cabMain__list" />
      </main>
    </>
  );
}

export default Cab;
