import React from 'react'
import 'animate.css'
import style from './style.module.scss'
import Lines from 'components/lines'
import ParagraphLine from 'components/paragraphLine'

class HeaderPage extends React.Component {
  constructor() {
    super()
    this.headerRef = React.createRef()
    this.logoRef = React.createRef()
  }

  componentDidMount() {
    const element = this.headerRef.current
    const logo = this.logoRef.current
    setTimeout(function() {
      element.classList.add(style.headerPage__opened)
      logo.classList.add(style.headerPage__logoContainer__opened)
    }, 200)
  }

  render() {
    const { data, className } = this.props
    const tags = []

    for (const [index, value] of data.tags.entries()) {
      tags.push(<li>{value}</li>)
    }

    return (
      <div
        ref={this.headerRef}
        className={style.headerPage}
        style={{ backgroundImage: `url(${data.image})` }}
      >
        <Lines />
        <div className={`container`}>
          <div className={`row`}>
            <div className={`col-md-10`}>
              <div className={style.headerPage__dataContainer}>
                <ParagraphLine>
                  <label data-title>Data:</label>
                  <span>{data.data}</span>
                </ParagraphLine>
              </div>
              <div className={style.headerPage__titleContainer}>
                <h1>{data.title}</h1>
              </div>
            </div>
          </div>
          <div className={style.headerPage__tagsContainer}>
            <ParagraphLine>
              <ul data-title>{tags}</ul>
            </ParagraphLine>
          </div>
        </div>

        <div
          ref={this.logoRef}
          className={style.headerPage__logoContainer}
          style={{ backgroundColor: data.color }}
        >
          <img className={`animated fadeInUp delay-2s`} src={data.logoUrl} />
        </div>
      </div>
    )
  }
}

export default HeaderPage
