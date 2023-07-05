import { useState } from 'react';
import { BsPlusSquareFill, BsFillDashSquareFill } from 'react-icons/bs';
import './CheckFilter.scss';

function CheckFilter({ data, testPlusIcon, testMinusIcon }) {
  const { title, checks } = data;
  const [menuHide, setMenuHide] = useState(true);

  const handleClikMenu = () => setMenuHide(!menuHide);

  function handleFilter(type, event) {
    if (event.target.checked) {
      console.log(type);
    }
  }

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
