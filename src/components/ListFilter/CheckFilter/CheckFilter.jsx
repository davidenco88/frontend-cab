import { useState, useEffect } from 'react';
import { BsPlusSquareFill, BsFillDashSquareFill } from 'react-icons/bs';
import { useDispatch, useSelector } from '../../../Context';
import { SET_CONTEXT_OBJECT } from '../../../Context/actionTypes';
import './CheckFilter.scss';

function CheckFilter({ data, testPlusIcon, testMinusIcon }) {
  const { title, checks, filterBy } = data;
  const [menuHide, setMenuHide] = useState(true);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const { originalVehicles } = useSelector();
  const dispatch = useDispatch();

  const handleClikMenu = () => setMenuHide(!menuHide);

  function handleFilter(type, event) {
    if (event.target.checked) {
      setSelectedFilters((prevFilters) => {
        const result = [...prevFilters, type];
        return result;
      });
    } else {
      setSelectedFilters((prevFilters) => {
        const result = prevFilters.filter((filter) => filter !== type);
        return result;
      });
    }
  }

  useEffect(() => {
    if (selectedFilters.length > 0) {
      const newVehicles = originalVehicles.filter((vehicle) => {
        const path = filterBy.split('.');
        const value = path.reduce((obj, key) => obj[key], vehicle);
        const result = selectedFilters.includes(value);
        return result;
      });
      dispatch({ type: SET_CONTEXT_OBJECT, payload: { renderVehicles: newVehicles } });
    } else {
      dispatch({ type: SET_CONTEXT_OBJECT, payload: { renderVehicles: originalVehicles } });
    }
  }, [selectedFilters]);

  return (
    <>
      <hr />
      <div className="checkFilter">
        <div className="checkFilter__title">
          <h4>{title}</h4>
          <div>
            {menuHide
              ? <button className="checkFilter__title__button" type="button" aria-label="plus" onClick={handleClikMenu}><BsPlusSquareFill className="checkFilter__icon" data-testid={testPlusIcon} /></button>
              : <button className="checkFilter__title__button" type="button" aria-label="less" onClick={handleClikMenu}><BsFillDashSquareFill className="checkFilter__icon" data-testid={testMinusIcon} /></button>}
          </div>
        </div>
        <ul className={menuHide
          ? 'checkFilter__list hide'
          : 'checkFilter__list'}
        >
          {checks.map((type) => (
            <li className="checkFilter__list__item" key={type}>
              <label className="checkFilter__list__item__label" htmlFor={type}>
                <input className="checkFilter__list__item__input" type="checkbox" id={type} onChange={(event) => handleFilter(type, event)} />
                <span className="checkFilter__list__item__checkmark" />
                {type}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default CheckFilter;
