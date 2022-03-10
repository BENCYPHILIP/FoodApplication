import React, { Fragment } from 'react';
import headerimage from '../../assests/img1.jpg';
import classes from '../Layout/Header.module.css'
import HeaderCardButton from '../Layout/HeaderCardButton'
const Header=()=> {
  return (
    <Fragment>
        <header className={classes.header}>
            <h1>Food Order App</h1>
            <HeaderCardButton/>
        </header>
        <div className={classes['main-image']}>
            <img src={headerimage} alt="header images"/>
        </div> 
    </Fragment>
  )
}

export default Header