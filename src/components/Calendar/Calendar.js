import React, {useEffect, useState} from 'react';
import classes from './Calendar.module.css'
import moment from "moment";
import 'moment/locale/ru';
import {observer} from "mobx-react-lite";

const Calendar = observer(() => {

    moment.updateLocale('ru', {week: {dow: 1}})
    const startDay = moment().startOf('month').startOf('week')
    const endDay = moment().endOf('month').endOf('week')

    const [calendar, setCalendar] = useState([])
    const [headCalendar, setHeadCalendar] = useState([])

    const [current, setCurrent] = useState(startDay.clone())

    const [active, setActive] = useState(moment().clone().startOf('day'))

    const [today, setToday] = useState(moment().startOf('day').clone())

    useEffect(() => {
        if (current.isBefore(endDay)) {
            setCalendar([...calendar, current.clone()])
            setCurrent(current.add(1, 'day'))
        }
    }, [calendar])

    return (
        <div className={classes.calendar}>
            <div className={classes.calendarTitleContainer}>
                <div
                    className={classes.calendarItemBtnContainer + " " + classes.calendarTitleContent + " " + classes.leftBtn}>
                    <div className={classes.calendarItemBtn}>
                        L
                    </div>
                </div>
                <div className={classes.calendarTitle + " " + classes.calendarTitleContent}>
                    {today.format("MMMM")}
                </div>
                <div
                    className={classes.calendarItemBtnContainer + " " + classes.calendarTitleContent + " " + classes.rightBtn}>
                    <div className={classes.calendarItemBtn}>
                        R
                    </div>
                </div>
            </div>
            <div className={classes.calendarItemsContainer}>
                <div className={classes.calendarDay}>Пн</div>
                <div className={classes.calendarDay}>Вт</div>
                <div className={classes.calendarDay}>Ср</div>
                <div className={classes.calendarDay}>Чт</div>
                <div className={classes.calendarDay}>Пт</div>
                <div className={classes.calendarDay + " " + classes.weekend}>Сб</div>
                <div className={classes.calendarDay + " " + classes.weekend}>Вс</div>
                {calendar ?
                    calendar.map(el =>
                        <div
                            className={active.format('DD-MM-YYYY') === el.format('DD-MM-YYYY') ? classes.calendarItem + " " + classes.active : classes.calendarItem}
                            onClick={() => {
                                if (!el.isBefore(today))
                                    setActive(el)
                            }}
                            key={el}>
                            <span
                                className={el.isBefore(today) ? classes.calendarItemText + " " + classes.active : classes.calendarItemText}>
                                {+el.format("DD") < 10?
                                    el.format("DD").slice(1):
                                    el.format("DD")
                                }
                            </span>
                        </div>
                    ) : null}
            </div>
        </div>
    );
});

export default Calendar;