import React from 'react'
import CartIcon from '../Cart/Carticon'
import classes from './HeaderCardButton.module.css'
const HeaderCardButton=()=> {
  return (
    <button className={classes.button} >
         <span className={classes.icon}><CartIcon/></span>
        <span>YOur Cart</span>
        <span className={classes.badge}>3</span>
    </button>

  )}

export default HeaderCardButton