import * as React from 'react'
import { sliderImgs, iconAngleLeft, iconAngleRight } from 'api/mock'
import Picture from 'components/Picture'
import classes from './Hero.module.css'
import PropTypes from 'prop-types'
import HeroNav from './partials/HeroNav'

const Hero = () => {
  return (
    <section className={classes.root}>
      <HeroNav />
      <div className={classes.imgSlider}>
        {/* <Picture data={sliderImgs} /> */}
        <img className={classes.img} src={sliderImgs[0].background.mobile} />
      </div>
      <div className={classes.arrowContainer}>
        <img className={classes.arrow} src={iconAngleLeft} />
        <img className={classes.arrow} src={iconAngleRight} />
      </div>
    </section>
  )
}

export default Hero
