import * as React from 'react'
import { aboutLight, aboutDark, subHeroText } from 'api/mock'
import classes from './About.module.css'
import PropTypes from 'prop-types'

const About = React.forwardRef(function About(props, ref) {
  const { ...other } = props

  return (
    <section className={classes.root} ref={ref} {...other}>
      <div className={classes.imgContainer}>
        <img className={classes.img} src={aboutDark} alt="Dark furniture" />
      </div>
      {subHeroText.map((text, idx) => (
        <div className={classes.textContainer} key={idx}>
          <h3 className={classes.heading}>{text.heading}</h3>
          <p className={classes.text}>{text.text}</p>
        </div>
      ))}
      <div className={classes.imgContainer}>
        <img className={classes.img} src={aboutLight} alt="Light furniture" />
      </div>
    </section>
  )
})

export default About
