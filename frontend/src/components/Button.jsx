import React from 'react';
import '../styles/Button.scss'

const Button = ({toggleMode, mode}) => {
  return (
    <button className="modeBtn" style={{marginLeft:'15px'}} onClick={() => {toggleMode(); console.log("color Change");}} >
      {mode === "light" ? "🌙" : "☀️"} 
    </button>
  )
}

export default Button;