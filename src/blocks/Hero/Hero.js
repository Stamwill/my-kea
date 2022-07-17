import * as React from 'react'
import { sliderImgs } from 'api/mock'
import classes from './Hero.module.css'
import PropTypes from 'prop-types'

const Hero = () => {
  return (
    <section className={classes.root}>
      <div className={classes.imgSlider}>
        {sliderImgs.map((img, idx) => (
          <img className={classes.background} src={img.img} alt="test" key={idx} />
        ))}
      </div>
    </section>
  )
}

export default Hero
