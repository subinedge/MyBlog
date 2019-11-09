import React from 'react'

import toggleMenu from '../styles/scss/DrawerToggleButton.module.scss'

const drawerToggleButton = props => {
  return (
    <button className={toggleMenu.toggle__button} onClick = {props.click}>
      <div className={toggleMenu.toggle__button__line}></div>
      <div className={toggleMenu.toggle__button__line}></div>
      <div className={toggleMenu.toggle__button__line}></div>
  </button>
  )
  
};

export default drawerToggleButton;