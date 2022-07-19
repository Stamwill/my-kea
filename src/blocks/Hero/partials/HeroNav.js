import * as React from 'react'
import { logo } from 'api/mock'
import Hamburger from 'components/Hamburger/Hamburger'
import classes from './HeroNav.module.css'

const HeroNav = React.forwardRef(function HeroNav(props, ref) {
  const { ...other } = props
  return (
    <nav className={classes.root} ref={ref} {...other}>
      <div className={classes.hamburgerContainer}>
        <Hamburger />
      </div>
      <div className={classes.logoContainer}>
        <img className={classes.logo} src={logo} alt="company logo" />
      </div>
      <span className={classes.hidden}>hidden</span>
    </nav>
  )
})

export default HeroNav