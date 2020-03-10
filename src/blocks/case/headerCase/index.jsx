import React from 'react'
import 'animate.css'
import style from './style.module.scss'
import Lines from 'components/lines'
import ParagraphLine from 'components/paragraphLine'

class HeaderCase extends React.Component {
  constructor() {
    super()
    this.headerRef = React.createRef()
    this.logoRef = React.createRef()
  }

  componentDidMount() {
    const element = this.headerRef.current
    const logo = this.logoRef.current
    setTimeout(function() {
      element.classList.add(style.headerCase__opened)
      logo.classList.add(style.headerCase__logoContainer__opened)
    }, 200)
  }

  render() {
    const { data, className } = this.props
    const tags = []

    for (const [index, value] of data.tags.entries()) {
      tags.push(<li key={index}>{value}</li>)
    }

    return (
      <div
        ref={this.headerRef}
        className={style.headerCase}
        style={{ backgroundImage: `url(${data.image})` }}
      >
        <Lines />
        <div className={`container`}>
          <div className={`row`}>
            <div className={`col-md-10`}>
              <div className={style.headerCase__dataContainer}>
                <ParagraphLine>
                  <label data-title>Data:</label>
                  <span>{data.data}</span>
                </ParagraphLine>
              </div>
              <div className={style.headerCase__titleContainer}>
                <h1>{data.title}</h1>
              </div>
            </div>
          </div>
          <div className={style.headerCase__tagsContainer}>
            <ParagraphLine>
              <ul data-title>{tags}</ul>
            </ParagraphLine>
          </div>
        </div>

        <div
          ref={this.logoRef}
          className={style.headerCase__logoContainer}
          style={{ backgroundColor: data.color }}
        >
          <img className={`animated fadeInUp delay-2s`} src={data.logoUrl} />
        </div>
      </div>
    )
  }
}

export default HeaderCase
