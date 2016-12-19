import React, { Component, PropTypes } from 'react'
import Timer from 'components/timer/timer'
import { formatDial, parseMillis } from 'helpers/datetime'
import { COUNTDOWN_DIALS_PAD as pad } from 'constants'

/**
 * @typedef {Object} Time
 * @property {number} day
 * @property {number} hour
 * @property {number} minute
 * @property {number} second
 */

class Countdown extends Component {
  constructor (props) {
    super(props)

    this.state = Object.assign(
      this.getTimeRemaining(),
      { areDotsVisible: true }
    )
  }

  /**
   * @return {Time} The remaining time before bang occurs.
   */
  getTimeRemaining () {
    const bang = this.props.bang
    const now = Date.now()
    const time = bang - now // Remaining time in ms.
    return parseMillis(time)
  }

  componentDidMount () {
    setInterval(
      () => {
        const state = Object.assign(
          this.state,
          this.getTimeRemaining(),
          { areDotsVisible: !this.state.areDotsVisible }
        )
        this.setState(state)
      },
      1000
    )
  }

  render () {
    const { day, hour, minute, second, areDotsVisible } = this.state
    const dials = {
      day: formatDial(day, pad),
      hour: formatDial(hour, pad),
      minute: formatDial(minute, pad),
      second: formatDial(second, pad)
    }

    return (
      <Timer {...dials} areDotsVisible={areDotsVisible} />
    )
  }
}

Countdown.propTypes = {
  bang: PropTypes.instanceOf(Date).isRequired
}

export default Countdown
