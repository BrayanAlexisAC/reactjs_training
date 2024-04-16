import React from 'react'

function TodoButton({ type, label, action }) {
  return React.createElement(
    'button',
    {
      className: `button-${type.toLowerCase()}`,
      onClick: action
    },
    label
  )
}

export {TodoButton}