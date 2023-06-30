import { useSelector ,useDispatch } from '../../../Context';
import { SHOW_PICK_UP_DATE, SET_SEARCH_FORM } from "../../../Context/actionTypes";
import Calendar from 'react-calendar';
import './DatePicker.scss';
// import 'react-calendar/dist/Calendar.css';

function DatePicker() {
  const { showPickUpDate } = useSelector();
  const dispatch = useDispatch();

  function onChange(newDate) {
    const year = newDate.getFullYear();
    const month = (newDate.getMonth() + 1).toString().padStart(2, '0');
    const day = newDate.getDate().toString().padStart(2, '0');
    const selectedDate = `${day}-${month}-${year}`;

    dispatch({type: SHOW_PICK_UP_DATE, payload: false})
    dispatch({type: SET_SEARCH_FORM, payload: {
      fieldName:"pickUpDate",
      newField: selectedDate,
    }});
  }

  return (
    <div className={showPickUpDate ? 'open-datePicker' : ' datePicker'}>
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
