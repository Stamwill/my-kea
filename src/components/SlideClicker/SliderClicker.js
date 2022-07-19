import * as React from 'react'
import { iconAngleLeft, iconAngleRight } from 'api/mock'
import classes from './SliderClicker.module.css'

const SliderClicker = (props) => {
  const {} = props
  return (
    <div className={classes.root}>
      <img className={classes.arrow} src={iconAngleLeft} />
      <img className={classes.arrow} src={iconAngleRight} />
    </div>
  )
}

export default SliderClicker
