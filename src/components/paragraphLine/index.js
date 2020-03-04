import React from "react";
import style from './style.module.scss'

class ParagraphLine extends React.Component {
  render() {

    const { children } = this.props

    return(
      <div className={style.paragraphLine}>
        <div>
          {children}
        </div>
      </div>
    )
  }
}

export default ParagraphLine
