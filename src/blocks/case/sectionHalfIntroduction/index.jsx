import React from 'react'
import style from './style.module.scss'
import Lines from 'components/lines'


class SectionHalfIntroduction extends React.Component{


  render() {

    const { children } = this.props

    return(
      <div className={`container ${style.section}`}>

        <Lines />

        <div className={`row`}>
          <div className={`col-md-6`}>
            {children[0]}
          </div>
          <div className={`col-md-6`}>
            {children[1]}
          </div>
        </div>
      </div>
    )
  }

}

export default SectionHalfIntroduction
