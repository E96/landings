import './timer.css'
import React, { PropTypes } from 'react'
import { getDeclension } from 'helpers/inflexion'

const Timer = (props) => {
  const {
    day,
    hour,
    minute,
    second,
    areDotsVisible
  } = props

  const dayLabel = getDeclension(day, ['День', 'Дня', 'Дней'])
  const hourLabel = getDeclension(hour, ['Час', 'Часа', 'Часов'])
  const minuteLabel = getDeclension(minute, ['Минута', 'Минуты', 'Минут'])

  return (
    <div className="timer">
      <div className="timer--dial">
        <div className="timer--value">{day}</div>
        <div className="timer--label">{dayLabel}</div>
      </div>
      <div className="timer--dial">
        {areDotsVisible &&
          <div className="timer--dots"></div>
        }
        <div className="timer--value">{hour}</div>
        <div className="timer--label">{hourLabel}</div>
      </div>
      <div className="timer--dial">
        <div className="timer--value">{minute}</div>
        <div className="timer--label">{minuteLabel}</div>
      </div>
      <div className="timer--dial">
        <div className="timer--value">{second}</div>
      </div>
    </div>
  )
}

Timer.propTypes = {
  day: PropTypes.string.isRequired,
  hour: PropTypes.string.isRequired,
  minute: PropTypes.string.isRequired,
  second: PropTypes.string.isRequired,
  areDotsVisible: PropTypes.bool
}

export default Timer
