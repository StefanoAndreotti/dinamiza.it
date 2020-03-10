import React from 'react'
import style from './style.module.scss'
import Dinamiza from 'components/colorDinamiza'

class FooterCase extends React.Component{
  render() {
    return (
      <div className={style.section}>

        <div className={style.section__linkProjects}>
          <a className={style.section__linkProjects__prev}>
            <div>
              <span>Return to</span>
              <span className={style.section__linkProjects__link}>Projects</span>
            </div>
          </a>
          <a className={style.section__linkProjects__next}>
            <div>
              <span>Next project</span>
              <span className={style.section__linkProjects__link}>Vega</span>
            </div>
          </a>
        </div>

        <div className={`container`}>
          <div className={`row`}>
            <div className={`col-12`}>
              <h4 className={`text-right`}>Thank <Dinamiza>you</Dinamiza><br/>for watching</h4>
            </div>
          </div>
        </div>

        <div
          ref={this.logoRef}
          className={style.section__logoContainer}
          style={{ backgroundColor: 'red' }}
        >
          <img src={'https://plh.fpp.li/125x31'} />
        </div>

      </div>
    )
  }
}

export default FooterCase
