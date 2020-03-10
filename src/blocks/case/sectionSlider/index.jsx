import React from 'react'
import style from './style.module.scss'
import Swiper from 'swiper'

class SectionSlider extends React.Component{

  constructor() {
    super()
    this.slider = React.createRef()
    this.counterSlider = React.createRef()
    this.counterTotalSlider = React.createRef()
  }

  componentDidMount() {

    const sliderElem = this.slider.current
    const counterSlider = this.counterSlider.current
    const counterTotalSlider = this.counterTotalSlider.current

    const slider = new Swiper(sliderElem, {
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });

    slider.on('slideChange', function () {
      counterSlider.innerHTML = ((slider.activeIndex < 10) ? ('0' + (slider.activeIndex + 1)) : (slider.activeIndex + 1))
    });

    counterTotalSlider.innerHTML = ((slider.slides.length < 10) ? ('0' + (slider.slides.length - 1)) : (slider.slides.length - 1))

  }

  componentDidUpdate() {

    const sliderElem = this.slider.current
    const counterSlider = this.counterSlider.current
    const counterTotalSlider = this.counterTotalSlider.current

    const slider = new Swiper(sliderElem, {
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });

    slider.on('slideChange', function () {
      counterSlider.innerHTML = ((slider.activeIndex < 10) ? ('0' + (slider.activeIndex + 1)) : (slider.activeIndex + 1))
    });

    counterTotalSlider.innerHTML = ((slider.slides.length < 10) ? ('0' + (slider.slides.length - 1)) : (slider.slides.length - 1))

  }

  render() {

    const { slidesData, children} = this.props
    const slides = []

    for (const [index, value] of slidesData.entries()) {
      slides.push(
        <div key={index} className={`swiper-slide ${style.section__slide}`}>
          <div className={`${style.section__slide__content}`}>
            <div style={{ backgroundImage: `url(${value})` }}></div>
          </div>
        </div>
      )
    }

    return(

      <div className={`${style.section}`}>

        <div ref={this.slider} className="swiper-container">
          <div className="swiper-wrapper">

            {slides}

            <div className={`swiper-slide ${style.section__slide}`}>
              <div className={`${style.section__slide__content}`}>
              </div>
            </div>

          </div>
        </div>

        <div className={`${style.section__content_text}`}>
          <div className={`contaienr-fluid`}>
            <div className={`row`}>
              <div className={`offset-md-7 col-md-3`}>
                {children[0]}
                {children[1]}
              </div>
            </div>
          </div>
        </div>

        <div className={`${style.section__counter}`}>
          <div className={`contaienr-fluid`}>
            <div className={`row`}>
              <div className={`offset-md-9 col-md-2`}>

                <span className={`${style.section__counter__relative}`} ref={this.counterTotalSlider}>01</span>
                <span className={`${style.section__counter__total}`} ref={this.counterSlider}>01</span>

              </div>
            </div>
          </div>
        </div>

      </div>

    )
  }
}

export default SectionSlider
