import React from 'react'
import { FaReact } from "react-icons/fa";

import '../../assets/styles/common/TodoEmpty.css'

function TodoEmpty({ message }) {
  return React.createElement(
    'span',
    {className: 'todoEmptySection'},
    <FaReact/>,
    <p className='todoEmptySection-message'> { message } </p>
  )
}

export { TodoEmpty }