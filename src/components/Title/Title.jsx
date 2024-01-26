import React from 'react'
import "./style.css"

const Title = ({title, userId,  ...props}) => {
  const {handleClick, colored, children} = props;
  return (
    <h1 className={colored ? "title" : ""} onClick={() => handleClick(props)}>{title ? title : "random title"}</h1>
  )
}

export default Title