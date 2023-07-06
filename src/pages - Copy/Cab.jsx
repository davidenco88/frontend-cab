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
  return (
    <>
      <HeroDefault text={cabSearch} />
      <div className="cabSearch">
        <SearchForm />
      </div>
      <main className="cabMain">
        <ListFilter className="cabMain__filter" />
        <ListedCar className="cabMain__list" />
      </main>
    </>
  );
}

export default Cab;
