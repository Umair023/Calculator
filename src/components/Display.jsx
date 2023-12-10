import React from 'react'
import moduleCSS from './Display.module.css'
const Display = (props) => {
  let {DisplayValue}=props
  return (
    <input type="text" className={moduleCSS.display} value={DisplayValue} readOnly />
  )
}

export default Display
