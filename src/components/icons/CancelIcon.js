import React from 'react'
import { TodoIcons } from './TodoIcons'

function CancelIcon({onDelete}) {
  return (
    <TodoIcons
      type={"cancel"}
      action={onDelete}
    />
  )
}

export {CancelIcon} 