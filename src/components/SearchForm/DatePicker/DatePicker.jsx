import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './DatePicker.scss';
// import 'react-calendar/dist/Calendar.css';

function DatePicker({ state, setClickedPickUp, setPickUpDate }) {
  // const [value, setValue] = useState(new Date().toJSON());

  function onChange(newDate) {
    const year = newDate.getFullYear();
    const month = (newDate.getMonth() + 1).toString().padStart(2, '0');
    const day = newDate.getDate().toString().padStart(2, '0');
    const selectedDate = `${day}-${month}-${year}`;
    // setValue(selectedDate);
    setClickedPickUp(false);
    setPickUpDate(selectedDate);
  }

  return (
    <div className={state ? 'open-datePicker' : ' datePicker'}>
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
