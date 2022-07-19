import * as React from 'react'
import { iconHamburger } from 'api/mock'
import PropTypes from 'prop-types'
import classes from './Hamburger.module.css'

const Hamburger = (props) => {
  const { toggleMenu } = props
  return (
    <div className={classes.root}>
      <img className={classes.img} src={iconHamburger} onClick={toggleMenu} alt="nav menu" />
    </div>
  )
}

Hamburger.propTypes = {
  toggleMenu: PropTypes.func,
}

export default Hamburger
