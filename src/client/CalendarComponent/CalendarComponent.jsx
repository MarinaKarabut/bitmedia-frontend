import React, { useState, useCallback } from 'react';
import { useParams } from "react-router-dom"
import { useEffect } from 'react';
import { useDispatch} from 'react-redux';
import { getOneUser } from '../../redux/users/users-operations'

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'

import s from './CalendarComponent.module.scss'

const CalendarComponent = () => {
  const [value, setValue] = useState([
    new Date(2019, 9, 17),
    new Date(2019, 9, 23),
  ]);
 

  const start =value[0].toJSON().slice(0,10)
  const end = value[1].toJSON().slice(0, 10)

  const [openCalendar, setOpenCalendar] = useState(false)
    
    

  const onChange = useCallback((value) => {
      setValue(value);
    },
    [setValue],
  );

  const { id } = useParams()

  const dispatch = useDispatch()

  const toggle = () => {
      setOpenCalendar(!openCalendar)
    }
    
    
    useEffect(() => {
      dispatch(getOneUser(id, start, end))
    }, [dispatch,id, start, end]);
  

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
          locale="en-En"
        />
      </div>}
    </div>
  );
}

export default CalendarComponent

