import React from 'react'
import {ReactComponent as CheckSVG} from '../../assets/images/check.svg'
import { IoClose } from "react-icons/io5";

const defaultIcons = {
  "verification": <CheckSVG/>,
  "cancel": <IoClose/>
}

function TodoIcons({type, completed, action}) {
  return React.createElement(
    'span',
    {
      className:`icon-${type}`, 
      onClick:action
    },
    defaultIcons[type]
  )
}

export {TodoIcons}