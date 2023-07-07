/* eslint-disable import/no-extraneous-dependencies */
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDateTimePicker } from '@mui/x-date-pickers/StaticDateTimePicker';
import { useDispatch } from '../../../Context';
import { SET_SEARCH_FORM, SET_TRIP, SHOW_COMPONENT } from '../../../Context/actionTypes';

import './DateTimePicker.css';
// eslint-disable-next-line import/order
import dayjs from 'dayjs';

function DateTimePicker() {
  const dispatch = useDispatch();

  function onChangeHandler(dateTime) {
    dispatch({
      type: SET_SEARCH_FORM,
      payload: {
        fieldName: 'pickUpDate',
        newField: dayjs(dateTime),
      },
    });
    dispatch({
      type: SET_TRIP,
      payload: {
        pickUpDate: dateTime.format('DD / MM / YYYY - hh:mm A'),
      },
    });
  }

  function onAcceptHandler() {
    dispatch({
      type: SHOW_COMPONENT,
      payload: { componentName: 'pickUpDate', showing: false },
    });
  }

  return (
    <div className="modal-wrap">
      <div className="modal">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <StaticDateTimePicker
            minDate={dayjs()}
            defaultValue={dayjs()}
            orientation="portrait"
            onAccept={() => onAcceptHandler()}
            onChange={(dateTime) => onChangeHandler(dateTime)}
          />
        </LocalizationProvider>
      </div>
    </div>
  );
}

export default DateTimePicker;
