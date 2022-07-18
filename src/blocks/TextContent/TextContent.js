import * as React from 'react'
import classes from './TextContent.module.css'
import PropTypes from 'prop-types'

const TextContent = React.forwardRef(function TextContent(props, ref) {
  const { heroText, ...other } = props

  return (
    <section className={classes.root} ref={ref} {...other}>
      <div className={classes.headingContainer}>
        <h1 className={classes.heading}>{heroText[0].heading}</h1>
      </div>
      <div className={classes.textContainer}>
        <p className={classes.text}>{heroText[0].text}</p>
      </div>
    </section>
  )
})

export default TextContent
