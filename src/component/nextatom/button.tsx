import React from 'react'

const Button = (props:{
  label: string,
  onClick?: () => void
}) => {


  return (
    <button 
      className="bg-yellow-500 border border-black"
      onClick={props.onClick} 
    >
      {props.label}
    </button>
  )
}

export default Button