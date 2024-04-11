import React from 'react'
import {ReactComponent as CheckSVG} from '../../assets/images/check.svg'
import { IoClose } from "react-icons/io5";

const defaultIcons = {
  "verification": (color) => <CheckSVG className='icon-check' fill={color} />,
  "cancel": (color) => <IoClose className='icon-close' fill={color}/>
}

function TodoIcons({type, color, action}) {
  return React.createElement(
    'span',
    {
      className:`icon-${type}`, 
      onClick:action
    },
    defaultIcons[type](color)
  )
}

export {TodoIcons}