import React from 'react'
import style from './style.module.scss'
import ParagraphLine from 'components/paragraphLine'

class SectionTextImageContainer extends React.Component{

  render() {

    const { textPosition, children } = this.props

    return (
      <div className={`container ${style.section}`}>
        <div className={`row`}>
          <div className={`col-md-6 ${ (textPosition == "right") ? 'order-2' : '' }`}>
            <div className={`${style.section__content_text}`}>
              {children.length > 1 ? children[0] : children}
            </div>
          </div>
          <div className={`col-md-6 ${ (textPosition == "right") ? 'order-1' : '' }`}></div>
        </div>
      </div>
    )
  }

}

export default SectionTextImageContainer
