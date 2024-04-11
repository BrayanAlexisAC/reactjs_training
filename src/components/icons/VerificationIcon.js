import React from 'react'
import { TodoIcons } from './TodoIcons'

function VerificationIcon({completed, onComplete}) {
  return (
    <TodoIcons 
      type={"verification"}
      color={completed ? "#4caf50" : "#7c7c7c"}
      action={onComplete}
    />
  )
}

export {VerificationIcon}