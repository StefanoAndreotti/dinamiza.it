import React from 'react'
import style from './style.module.scss'

class Dinamiza extends React.Component {
  render() {

    const { children } = this.props

    return(
      <span className={style.component}>
        { children }
      </span>
    )
  }
}

export default Dinamiza
