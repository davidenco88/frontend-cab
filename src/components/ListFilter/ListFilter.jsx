import { useState } from 'react';
import {
  FaBars,
  FaWindowClose,
} from 'react-icons/fa';
import CheckFilter from './CheckFilter/CheckFilter';
import './ListFilter.scss';

const carTypes = {
  title: 'Car Type',
  checks: ['Spacious',
    'Luxury',
    'Economic'],
  filterBy: 'VehicleTypes.type',
};
const carCapacity = {
  title: 'Capacity',
  checks: [
    3,
    4,
    5,
  ],
  filterBy: 'VehicleTypes.seats',
};
const carOptions = {
  title: 'Car Option',
  checks: ['Automatic',
    'Manual',
  ],
};

function ListFilter({ testFilterOptions, testBarIcon, testCloseIcon }) {
  const [menuHide, setMenuHide] = useState(true);

  const handleClikMenu = () => setMenuHide(!menuHide);

  return (
    <section className="listFilter">
      <div className="listFilter__title">
        <h3 className="listFilter__title__text">Latest Filter</h3>
        {menuHide
          ? <FaBars onClick={handleClikMenu} className="listFilter__title__text" data-testid={testBarIcon} />
          : <FaWindowClose onClick={handleClikMenu} className="listFilter__title__text" data-testid={testCloseIcon} />}
      </div>
      <div
        data-testid={testFilterOptions}
        className={menuHide
          ? 'listFilter__options hide'
          : 'listFilter__options'}
      >
        <CheckFilter data={carTypes} />
        <CheckFilter data={carCapacity} />
      </div>
    </section>
  );
}

export default ListFilter;
