import * as React from 'react'
import SliderClicker from 'components/SlideClicker'
import classes from './TextContent.module.css'
import PropTypes from 'prop-types'

const TextContent = React.forwardRef(function TextContent(props, ref) {
  const { heading, text, toggleSlide, ...other } = props

  return (
    <section className={classes.root} ref={ref} {...other}>
      <div className={classes.headingContainer}>
        <h1 className={classes.heading}>{heading}</h1>
      </div>
      <div className={classes.textContainer}>
        <p className={classes.text}>{text}</p>
      </div>
      <div className={classes.clicker}>
        <SliderClicker toggleSlide={toggleSlide} />
      </div>
    </section>
  )
})

TextContent.propTypes = {
  heading: PropTypes.string,
  text: PropTypes.string,
  toggleSlide: PropTypes.func,
}

export default TextContent
