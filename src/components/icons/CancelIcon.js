import React from 'react'
import { TodoIcons } from './TodoIcons'

function CancelIcon({onDelete}) {
  return (
    <TodoIcons
      type={"cancel"}
      color={"#7c7c7c"}
      action={onDelete}
    />
  )
}

export {CancelIcon} 