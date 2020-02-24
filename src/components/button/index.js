import React from 'react'
import style from './style.module.scss'

class Button extends React.Component{

  render() {

    const { href, children } = this.props

    return (
      <a className={style.btnCustom} href={href ? href : ''} >
        {children}
      </a>
    )
  }

}

export default Button
