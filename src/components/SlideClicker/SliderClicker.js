import * as React from 'react'
import { iconAngleLeft, iconAngleRight } from 'api/mock'
import PropTypes from 'prop-types'
import classes from './SliderClicker.module.css'

const SliderClicker = (props) => {
  const { toggleSlide } = props
  return (
    <div className={classes.root}>
      <img className={classes.arrow} src={iconAngleLeft} onClick={toggleSlide} />
      <img className={classes.arrow} src={iconAngleRight} />
    </div>
  )
}

SliderClicker.propTypes = {
  toggleSlide: PropTypes.func,
}

export default SliderClicker
