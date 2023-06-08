import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './DatePicker.scss';

function DatePicker() {
  const [value, setValue] = useState(new Date().toJSON());

  function onChange(nextValue) {
    setValue(nextValue);
    alert(`Value is ${nextValue.toJSON()}`);
  }

  return (
    <div className="datePicker">
      <h1>date picker</h1>
      <Calendar
        onChange={onChange}
        value={value}
      />
    </div>
  );
}

export default DatePicker;
