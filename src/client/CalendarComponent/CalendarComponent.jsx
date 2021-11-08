import React, { useState, useCallback } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'

import s from './CalendarComponent.module.scss'

const  CalendarComponent= () => {
  const [value, setValue] = useState([
    new Date(2019, 10, 17),
    new Date(2019, 10, 23),
  ]);
  console.log(value);

  const [openCalendar, setOpenCalendar] = useState(false)
    
    const toggle = () => {
    setOpenCalendar(!openCalendar)
    }
    
  

  const onChange = useCallback((value) => {
      setValue(value);
    },
    [setValue],
  );

  return (
    <div>
      <div className={s.calendar__wrapper}>
        <p className={s.calendar__title}>Select date range</p>
        {value.length > 0 ? (
        <p className={`${s.calendar__title} ${s.calendar__data}`} onClick={toggle}>
          {value[0].toDateString()}
          &nbsp;|&nbsp;
          {value[1].toDateString()}
        </p>
      ) : (
        <p className={`${s.calendar__title} ${s.calendar__data}`} onClick={toggle}>
          {value.toDateString()}
        </p>
      )}
      </div>
      {openCalendar && <div>
        <Calendar
          onChange={onChange}
          value={value}
          selectRange={true}
          className={s.calendar}
          // formatDay={true}
        />
      </div>}
    </div>
  );
}

export default CalendarComponent

