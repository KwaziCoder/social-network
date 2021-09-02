// modules
import React from 'react'
// global imports
import {logo} from './../../assets/images'
// local imports
import classes from './Header.module.css'


const Header = () => {
  return(
    <header className={classes.header}>
      <p className={classes.link}>My profile</p>
      <p className={classes.link}>Messages</p>
      <div className={classes.logoContainer}>
        <img className={classes.logo} src={logo}/>
      </div>
      <p className={classes.link}>Groups</p>
      <p className={classes.link}>News</p>
    </header>

  )
}


export default Header;