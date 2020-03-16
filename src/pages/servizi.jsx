import React from 'react'
import style from 'scss/pages/servizi.module.scss'
import Meta from 'components/meta'
import { siteMetadata } from '../../gatsby-config'
import Layout from 'components/layout'
import Lines from 'components/lines'
import Swiper from 'swiper'

class Servizi extends React.Component{

  constructor() {
    super()
    this.page = new React.createRef()
    this.fullScreenSlider = new React.createRef()
    this.sliderIside = new React.createRef()
  }

  initSlider(){

    const swiper = new Swiper(this.fullScreenSlider.current, {
      direction: 'vertical',
      slidesPerView: 1,
      spaceBetween: 0,
      mousewheel: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    })

    const swiper2 = new Swiper(this.sliderIside.current, {
      slidesPerView: 3,
      spaceBetween: 10,
      //slidesPerColumn: 2,
      mousewheel: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    })

    swiper.on('slideChange', function () {
      swiper.mousewheel.disable()
    })

    swiper2.on('slideChangeTransitionEnd', function () {
      if(swiper2.isEnd) {
        swiper.mousewheel.enable()
      }
    })

    swiper2.on('reachBeginning', function () {
      swiper.mousewheel.enable()
    })

  }

  initFullScreenScroll(){

    const target = this.fullScreenSlider.current
    let counterSlide = 0

    window.addEventListener('wheel', function(event){
      if (event.wheelDelta < 0) {
        console.log('scrolling up', counterSlide)
        counterSlide -= event.wheelDelta
        target.scrollTop = counterSlide
      }
      else if (event.wheelDelta > 0) {
        console.log('scrolling down', counterSlide);
        counterSlide += event.wheelDelta
        target.scrollTop = counterSlide
      }
    })

  }

  componentDidMount() {
    this.initSlider()
    this.initFullScreenScroll()
  }

  componentDidUpdate() {
    this.initSlider()
    this.initFullScreenScroll()
  }

  render() {

    const { location, data } = this.props

    return(

      <div ref={this.page} className={style.page}>
        <Layout location={location}>
          <Meta site={siteMetadata} title="Servizi" />

          <Lines />

          <div className={`container-fluid ${style.page__content}`}>
            <div className={`row`}>
              <div className={`offset-md-2 col-md-2`}>
                <div className={style.page__content__menu}>
                  Test
                </div>
              </div>
              <div className={`offset-md-1 col-md-7 no-padding ${style.page__content__fullScreenSlide}`}>
                <div ref={this.fullScreenSlider} className="swiper-container">
                  <div className="swiper-wrapper">
                    <div className={`swiper-slide`} style={{ backgroundColor: 'green', color: 'white' }} >
                      <div className={style.testSliderOutside}></div>
                    </div>
                    <div className={`swiper-slide`} style={{ backgroundColor: 'blue', color: 'white' }}>
                      <div className={style.testSliderOutside}>
                        <div ref={this.sliderIside} className="swiper-container">
                        <div className="swiper-wrapper">
                          <div className={`swiper-slide `} style={{ backgroundColor: 'red', color: 'white' }}>
                            <div className={style.testSliderInside}></div>
                          </div>
                          <div className={`swiper-slide `}  style={{ backgroundColor: 'green', color: 'white' }}>
                            <div className={style.testSliderInside}></div>
                          </div>
                          <div className={`swiper-slide `}  style={{ backgroundColor: 'yellow', color: 'white' }}>
                            <div className={style.testSliderInside}></div>
                          </div>
                          <div className={`swiper-slide `}  style={{ backgroundColor: 'orange', color: 'white' }}>
                            <div className={style.testSliderInside}></div>
                          </div>
                          <div className={`swiper-slide `}  style={{ backgroundColor: 'black', color: 'white' }}>
                            <div className={style.testSliderInside}></div>
                          </div>
                          <div className={`swiper-slide `} style={{ backgroundColor: 'red', color: 'white' }}>
                            <div className={style.testSliderInside}></div>
                          </div>
                          <div className={`swiper-slide `}  style={{ backgroundColor: 'green', color: 'white' }}>
                            <div className={style.testSliderInside}></div>
                          </div>
                          <div className={`swiper-slide `}  style={{ backgroundColor: 'yellow', color: 'white' }}>
                            <div className={style.testSliderInside}></div>
                          </div>
                          <div className={`swiper-slide `}  style={{ backgroundColor: 'orange', color: 'white' }}>
                            <div className={style.testSliderInside}></div>
                          </div>
                          <div className={`swiper-slide `}  style={{ backgroundColor: 'black', color: 'white' }}>
                            <div className={style.testSliderInside}></div>
                          </div>

                        </div>
                        <div className="swiper-pagination"></div>
                      </div>
                      </div>
                    </div>
                    <div className={`swiper-slide`} style={{ backgroundColor: 'yellow', color: 'white' }}>
                      <div className={style.testSliderOutside}></div>
                    </div>
                    <div className={`swiper-slide`} style={{ backgroundColor: 'orange', color: 'white' }}>
                      <div className={style.testSliderOutside}></div>
                    </div>
                  </div>
                  <div className="swiper-pagination"></div>
                </div>
              </div>
            </div>
          </div>

        </Layout>
      </div>

    )
  }

}

export default Servizi
