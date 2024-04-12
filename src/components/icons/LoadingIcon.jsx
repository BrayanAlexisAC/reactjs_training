import React from 'react'
import { FaReact } from "react-icons/fa";
import '../../assets/styles/icons/LoadingIcon.css'

function LoadingIcon() {
  return React.createElement(
    'div',
    {className: "icon-loading"},
    <FaReact className='icon-loader-circle'/>
  )
}

export { LoadingIcon }