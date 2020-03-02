import React from 'react'
import style from './style.module.scss'

class Image extends React.Component {

  constructor(props) {
    super(props)
    this.state = { visible: false }
    this.imageRef = React.createRef()
  }

  componentDidMount() {

    const rect = this.imageRef.current.getBoundingClientRect()
    const image = parseInt(rect.top + document.body.scrollTop)
    const imageHeight = parseInt(this.imageRef.current.offsetHeight)
    window.addEventListener('scroll', this._calcScroll.bind(this, image, imageHeight))
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this._calcScroll)
  }

  _calcScroll(image, imageHeight) {
    const _window = window
    const heightDiff = parseInt(image) - parseInt(imageHeight / 2)
    let scrollPos = _window.scrollY
    if (scrollPos > heightDiff) {
      this.setState({
        visible: true
      })
    }
  }

  render() {
    const { url, className } = this.props
    const visible = this.state.visible

    return(
      <div ref={this.imageRef} className={`component-img-reveal ${className} ${ visible ? style.image : ''}`} >
        <div className="content__image-wrap content__image-wrap--half">

          <div className={`content__image is-background-center-cover`} style={{ backgroundImage: 'url('+url+')' }}/>

        </div>
      </div>
    )
  }
}

export default Image
