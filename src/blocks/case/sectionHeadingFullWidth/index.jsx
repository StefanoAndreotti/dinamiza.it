import React from 'react'
import style from './style.module.scss'

class SectionHeadingFullWidth extends React.Component {
  render() {

    const {children} = this.props

    return(
      <div className={style.section}>
        <div className={`container`}>
          <div className={`row`}>
            <div className={`col-md-10`}>
              {children}
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default SectionHeadingFullWidth
