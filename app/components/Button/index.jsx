import React from 'react'

import "./Button.css"

const Button = ({setStageWins}) => {

  const handleClick = () => {
    setStageWins(prev => prev + 1)
  }  
  return (
    <button onClick={handleClick}>Add stage win</button>
  )
}

export default Button