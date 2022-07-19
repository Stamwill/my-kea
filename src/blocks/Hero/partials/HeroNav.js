import * as React from 'react'
import { logo, navigation } from 'api/mock'
import Hamburger from 'components/Hamburger'
import PropTypes from 'prop-types'
import classes from './HeroNav.module.css'

const HeroNav = React.forwardRef(function HeroNav(props, ref) {
  const { open, toggleMenu, ...other } = props
  return (
    <nav className={classes.root} ref={ref} {...other}>
      <div className={classes.hamburgerContainer}>
        <Hamburger toggleMenu={toggleMenu} />
      </div>
      <div className={classes.logoContainer}>
        <img className={classes.logo} src={logo} alt="company logo" />
      </div>
      <div className={classes.navList}>
        {navigation.map((item, idx) => (
          <div key={idx}>
            <a className={classes.navItem} href="#">
              {item.heading}
            </a>
          </div>
        ))}
      </div>
      <span className={classes.hidden}>hidden</span>
    </nav>
  )
})

HeroNav.propTypes = {
  menu: PropTypes.bool,
  toggleMenu: PropTypes.func,
}

export default HeroNav
