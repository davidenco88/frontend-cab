/* eslint-disable import/no-extraneous-dependencies */
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticTimePicker } from '@mui/x-date-pickers/StaticTimePicker';

import './TimePicker.css';
import dayjs from 'dayjs';

function TimePicker({ onAccept, onChange }) {
  return (
    <div className="modal-wrap">
      <div className="modal">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <StaticTimePicker
            defaultValue={dayjs()}
            orientation="portrait"
            onAccept={onAccept}
            onChange={(time) => onChange(dayjs(time))}
          />
        </LocalizationProvider>
      </div>
    </div>
  );
}

export default TimePicker;
