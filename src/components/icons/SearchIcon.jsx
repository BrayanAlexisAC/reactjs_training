import React from 'react'
import { TodoIcons } from './TodoIcons'

import '../../assets/styles/icons/SearchIcon.css'

function SearchIcon({ className }) {
  return (
    <TodoIcons 
      type={'search'}
      className={className}
    />
  )
}

export { SearchIcon }