import React from 'react'
import './Button.css'

function Button(props) {
  const attributes = props.attributes
  return(
    <button
      key={props.key}
      id={props.id}
      label={attributes.label}
      className={"button " + (attributes.className || '')}
      onClick={()=>props.onClick(attributes.label)}
    >
      {attributes.label}
    </button>
  )
}

export default Button