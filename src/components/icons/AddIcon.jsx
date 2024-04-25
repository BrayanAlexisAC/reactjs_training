import React from 'react'
import { TodoIcons } from './TodoIcons'

function AddIcon({color}) {
  return (
    <TodoIcons
      type={"add"}
      color={color}
    />
  )
}

export {AddIcon} 