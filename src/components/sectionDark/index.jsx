import React from 'react'
import style from './style.module.scss'

class SectionDark extends React.Component {

  render() {

    const { imageSrc, imagePosition, children } = this.props

    return(
      <div className={style.section}>
        <div className={style.section__background} data-position={imagePosition} style={{ backgroundImage: `url(${imageSrc})` }}></div>
        { children }
      </div>
    )
  }

}

export default SectionDark
