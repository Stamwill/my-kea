import * as React from 'react'
import { iconHamburger } from 'api/mock'
import classes from './Hamburger.module.css'

const Hamburger = () => {
  return (
    <div className={classes.root}>
      <img className={classes.img} src={iconHamburger} alt="nav menu" />
    </div>
  )
}

export default Hamburger
