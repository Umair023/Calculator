import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import moduleCSS from'./App.module.css';
import Display from './components/Display';
import ButtonsContainer from './components/ButtonsContainer';
const App = () => {
  let [calValue,setCalValue]=useState('');
  let buttonClick=(buttonValue)=>{
    if(buttonValue==='C'){
       
      setCalValue('');
    }
    else if(buttonValue==='='){
     let result=eval(calValue);
     setCalValue(result);
    }
    else{
      let newDisplayValue=calValue+ buttonValue
      setCalValue(newDisplayValue);
    }
    
  }
  return (
    <div>
      
      <div className={`container ${moduleCSS.calculator} `}>
      <h1>Calculator</h1>
      <Display DisplayValue={calValue}/>
      <ButtonsContainer ButtonClickEvent={buttonClick}/>
       
      </div>
    </div>
  )
}

export default App
