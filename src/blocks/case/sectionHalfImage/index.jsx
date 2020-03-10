import React from 'react'
import style from './style.module.scss'

class SectionHalfImage extends React.Component{


  render() {

    const { children } = this.props

    return(
      <div className={`container ${style.section}`}>
        <div className={`row`}>
          <div className={`col-md-5`}>
              {children.length > 1 ? children[0] : children}
          </div>
        </div>
      </div>
    )
  }

}

export default SectionHalfImage
