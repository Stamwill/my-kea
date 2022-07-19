import * as React from 'react'
import { sliderImgs, iconAngleLeft, iconAngleRight } from 'api/mock'
import Picture from 'components/Picture'
import SliderClicker from 'components/SlideClicker'
import classes from './Hero.module.css'
import PropTypes from 'prop-types'
import HeroNav from './partials/HeroNav'

const Hero = (props) => {
  const { open, toggleMenu } = props
  return (
    <section className={classes.root}>
      <HeroNav open={open} toggleMenu={toggleMenu} />
      <div className={classes.imgSlider}>
        <Picture data={sliderImgs} />
      </div>
      <div className={classes.clicker}>
        <SliderClicker />
      </div>
    </section>
  )
}

Hero.propTypes = {
  open: PropTypes.bool,
  ToggleMenu: PropTypes.func,
}

export default Hero
