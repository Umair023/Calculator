import React from 'react'
import moduleCSS from './ButtonsContainer.module.css'
const ButtonsContainer = (props) => {
  let {ButtonClickEvent}=props
  let ButtonsContainer=['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.']
  return (
    <div className={moduleCSS.buttonContainer}>
      {ButtonsContainer.map((buttonName)=><button className={moduleCSS.button} 
      onClick={()=>ButtonClickEvent(buttonName)}
       key={buttonName}>{buttonName}</button>)}
    
      </div>
  )
}

export default ButtonsContainer
