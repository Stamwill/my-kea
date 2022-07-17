import * as React from 'react'
import { sliderImgs } from 'api/mock'
import Picture from 'components/Picture'
import classes from './Hero.module.css'
import PropTypes from 'prop-types'

const Hero = () => {
  return (
    <section className={classes.root}>
      <div className={classes.imgSlider}>
        <Picture sliderImgs={sliderImgs} />
      </div>
    </section>
  )
}

export default Hero
