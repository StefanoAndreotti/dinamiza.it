import React from 'react'
import style from './style.module.scss'
import Image from 'components/image'
import ParagraphLine from 'components/paragraphLine'

class SectionTextImageRight extends React.Component {

  render() {

    const { children } = this.props

    return(
      <div className={`is-overlap ${style.section}`}>

        <div className={`container-fluid is-align-center`}>
          <div className={`row`}>
            <div data-fadeout className={`offset-md-6 col-md-6 no-padding d-flex justify-content-end`}>
              {children[0]}
            </div>
          </div>
        </div>

        <div className={`container d-flex align-items-center`}>
          <div className={`row`}>

            <div className={`col-md-4`}>

              <div className={`content-text ${style.section__content_text}`}>
                {children[1]}
              </div>

            </div>
          </div>
        </div>

        <div className={`container-fluid`}>

        </div>

      </div>
    )
  }

}

export default SectionTextImageRight
