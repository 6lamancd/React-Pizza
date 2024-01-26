import React from 'react'
import cls from "./style.module.scss"

const Container = ({children}) => {
  return (
    <div className={cls.container}>
      {children}
    </div>
  )
}

export default Container