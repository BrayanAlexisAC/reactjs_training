import React from 'react'
import {ReactComponent as CheckSVG} from '../../assets/images/check.svg'
import { IoClose } from "react-icons/io5";
import { MdOutlineSearch } from "react-icons/md";

const defaultIcons = {
  "verification": (color, className) => <CheckSVG className='icon-check' fill={color} />,
  "cancel": (color, className) => <IoClose className='icon-close' fill={color}/>,
  "search": (color, className) => <MdOutlineSearch className={'icon-search ' + className} fill={color}/>
}

function TodoIcons({type, className, color, action}) {
  return React.createElement(
    'span',
    {
      className:`icon-${type}`, 
      onClick:action
    },
    defaultIcons[type](color, className)
  )
}

export {TodoIcons}