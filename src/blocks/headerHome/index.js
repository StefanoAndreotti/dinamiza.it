import React from 'react'
import Particles from 'components/particles'

import style from './style.module.scss'

class HeaderHome extends React.Component {
  render() {
    const { location, title } = this.props
    return (
      <div className={style.block}>
        <Particles />
        <div className={style.block__container}>
          <div className={'container'}>
            <h1>Connettiamo valore <span>attraverso la tecnologia</span></h1>
          </div>
        </div>
      </div>
    )
  }
}

export default HeaderHome
