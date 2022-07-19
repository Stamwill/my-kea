import * as React from 'react'
import { sliderImgs, iconAngleLeft, iconAngleRight } from 'api/mock'
import Picture from 'components/Picture'
import classes from './Hero.module.css'
import PropTypes from 'prop-types'
import HeroNav from './partials/HeroNav'

const Hero = (props) => {
  const { menu, toggleMenu } = props
  return (
    <section className={classes.root}>
      <HeroNav menu={menu} toggleMenu={toggleMenu} />
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

Hero.propTypes = {
  menu: PropTypes.bool,
  ToggleMenu: PropTypes.func,
}

export default Hero
