import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({title, color,link,classname}) => {
  return (
    <Link to={link} className={`py-1 px-3 rounded-md text-white bg-${color}-600 ${classname}`}>{title}</Link>
  )
}

export default Button