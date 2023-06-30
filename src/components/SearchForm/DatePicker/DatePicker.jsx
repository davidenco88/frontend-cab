import Calendar from 'react-calendar';
import { useSelector, useDispatch } from '../../../Context';
import { SHOW_COMPONENT, SET_SEARCH_FORM } from '../../../Context/actionTypes';
import './DatePicker.scss';
// import 'react-calendar/dist/Calendar.css';

function DatePicker() {
  const { showComponentHandler } = useSelector();
  const dispatch = useDispatch();

  function onChange(newDate) {
    const year = newDate.getFullYear();
    const month = (newDate.getMonth() + 1).toString().padStart(2, '0');
    const day = newDate.getDate().toString().padStart(2, '0');
    const selectedDate = `${day}-${month}-${year}`;

    dispatch({
      type: SHOW_COMPONENT,
      payload: {
        componentName: 'pickUpDate',
        showing: false,
      },
    });
    dispatch({
      type: SET_SEARCH_FORM,
      payload: {
        fieldName: 'pickUpDate',
        newField: selectedDate,
      },
    });
  }

  return (
    <div className={showComponentHandler.pickUpDate ? 'open-datePicker' : ' datePicker'}>
      <h2>PICK UP DATE</h2>
      <Calendar
        onChange={onChange}
        // value={value}
        minDate={new Date()}
      />
    </div>
  );
}

export default DatePicker;
