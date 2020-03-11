import React from 'react'
import style from './style.module.scss'

class SectionTextImageFullWidth extends React.Component {

  render() {

    const { textPosition, padding, imageFade, children } = this.props

    return(
      <div className={`is-overlap ${style.section}`}>

        <div className={`container-fluid is-align-center`}>
          <div className={`row`}>

            <div data-fadeout={imageFade} className={`${(textPosition == 'left') ? 'offset-md-6' : ''} col-md-6 ${ padding ? '' : 'no-padding'} d-flex justify-content-end`}>
              {children[0]}
            </div>

          </div>
        </div>

        <div className={`container d-flex align-items-center`}>
          <div className={`row`}>

            <div className={`${(textPosition == 'left') ? 'col-md-4' : 'offset-md-7 col-md-5'}`}>

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

export default SectionTextImageFullWidth
