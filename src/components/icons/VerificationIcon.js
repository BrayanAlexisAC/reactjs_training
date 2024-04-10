import React from 'react'
import { TodoIcons } from './TodoIcons'

function VerificationIcon({onComplete}) {
  return (
    <TodoIcons 
      type={"verification"}
      action={onComplete}
    />
  )
}

export {VerificationIcon}