import * as React from 'react'
import { aboutLight, aboutDark } from 'api/mock'
import classes from './About.module.css'
import PropTypes from 'prop-types'

const About = React.forwardRef(function About(props, ref) {
  const { ...other } = props

  return (
    <section className={classes.root} ref={ref} {...other}>
      <div className={classes.imgContainer}>
        <img className={classes.img} src={aboutDark} alt="Light furniture" />
      </div>
    </section>
  )
})

export default About
