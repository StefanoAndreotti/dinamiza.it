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
            <div className={'row'}>

              <h1>Connettiamo valore <span>attraverso la tecnologia</span></h1>

              <div className={style.block__container__payoff}>
                <hr />
                <h4><span>your idea.</span> our amazing creation</h4>
              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HeaderHome
