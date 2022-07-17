import * as React from 'react'
import { sliderImgs, iconAngleLeft, iconAngleRight } from 'api/mock'
import Picture from 'components/Picture'
import classes from './Hero.module.css'
import PropTypes from 'prop-types'

const Hero = () => {
  return (
    <section className={classes.root}>
      <div className={classes.imgSlider}>
        <Picture data={sliderImgs} />
      </div>
      <div className={classes.arrowContainer}>
        <img className={classes.arrow} src={iconAngleLeft} />
        <img className={classes.arrow} src={iconAngleRight} />
      </div>
    </section>
  )
}

export default Hero
