import * as React from 'react'
import PropTypes from 'prop-types'
import classes from './Picture.module.css'

const Picture = React.forwardRef(function Picture(props, ref) {
  const { className, children, sliderImgs, ...other } = props

  return (
    <section className={classes.root} ref={ref} {...other}>
      {sliderImgs.map((item, idx) => (
        <picture key={idx} className={classes.imgContainer}>
          <source
            className={classes.mobile}
            media="(max-width: 768px)"
            srcSet={item.background.mobile}
          />
          <img className={classes.desktop} src={item.background.desktop} alt="furniture" />
        </picture>
      ))}
    </section>
  )
})

Picture.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  sliderImgs: PropTypes.array,
}

export default Picture
