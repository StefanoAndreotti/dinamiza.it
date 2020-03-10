import React from 'react'
import style from './style.module.scss'
import Image from 'components/image'
import ParagraphLine from 'components/paragraphLine'

class SectionTextImageLeft extends React.Component {

  render() {

    const { children } = this.props

    return (
      <div className={`is-overlap ${style.section}`}>

        <div className={`container-fluid is-align-center`}>
          <div className={`row`}>
            <div className={`col-md-6 d-flex justify-content-end`}>
              {children[0]}
            </div>
          </div>
        </div>

        <div className={`container d-flex align-items-center`}>
          <div className={`row`}>

            <div className={`offset-md-7 col-md-5`}>

              <div className={`content-text ${style.section__content_text}`}>
                {children[1]}
              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default SectionTextImageLeft
