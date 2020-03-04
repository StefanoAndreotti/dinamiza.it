import React from 'react'
import style from './style.module.scss'

class HeaderPage extends React.Component {
  render() {
    const { location, title } = this.props
    return (
      <div className={style.headerPage} style={{ backgroundImage: 'url(https://plh.fpp.li/300x200)' }}>

      </div>
    )
  }
}

export default HeaderPage
