import React from 'react'
import style from './style.module.scss'

class Lines extends React.Component {

  render() {
    return(

      <div className={style.lines}>
        <div className={'container'}>
          <div className={'row'}>
            <div className={'col-md-4'} data-first-line />
            <div className={'col-md-4'} data-second-line />
          </div>
        </div>
      </div>

    )
  }

}

export default Lines
