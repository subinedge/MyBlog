import React from 'react'

import backdrop from '../styles/scss/backdrop.module.scss'

const Backdrop = (props) => (
  <div onClick = {props.click} className={backdrop.backdrop}></div>
);  

export default Backdrop;