import React from 'react'
import style from 'scss/pages/servizi.module.scss'
import Meta from 'components/meta'
import { siteMetadata } from '../../gatsby-config'
import Layout from 'components/layout'
import Lines from 'components/lines'
import Swiper from 'swiper'
import 'swiper/css/swiper.css'

class Servizi extends React.Component{

  constructor() {
    super()
    this.page = new React.createRef()
    this.verticalSlider = new React.createRef()
    this.applicationSlider = new React.createRef()
    this.websiteSlider = new React.createRef()
    this.ecommerceSlider = new React.createRef()
    this.digitalMarketingSlider = new React.createRef()
  }

  initSlider(){

    //
    //  Const Slider
    const verticalSlider_container = this.verticalSlider.current
    const applicationSlider_container = this.applicationSlider.current
    const websiteSlider_container = this.websiteSlider.current
    const ecommerceSlider_container = this.ecommerceSlider.current
    const digitalMarketingSlider_container = this.digitalMarketingSlider.current
    //
    // end - Const Slider

    //
    //  Init Swiper Slider

    //  Slider - Vertical
    const verticalSlider = new Swiper(verticalSlider_container, {
      direction: 'vertical',
      slidesPerView: 1,
      spaceBetween: 0,
      mousewheel: false,
      draggable: false,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    })

    //  Slider - Application
    const applicationSlider = new Swiper(applicationSlider_container, {
      slidesPerView: 'auto',
      spaceBetween: 0,
      slidesPerColumn: 2,
      mousewheel: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    })

    //  Slider - Website
    const websiteSlider = new Swiper(websiteSlider_container, {
      slidesPerView: 'auto',
      spaceBetween: 0,
      slidesPerColumn: 2,
      mousewheel: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    })

    //  Slider - eCommerce
    const ecommerceSlider = new Swiper(ecommerceSlider_container, {
      slidesPerView: 'auto',
      spaceBetween: 0,
      slidesPerColumn: 2,
      mousewheel: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    })

    //  Slider - Application
    const digitalMarketingSlider = new Swiper(digitalMarketingSlider_container, {
      slidesPerView: 'auto',
      spaceBetween: 0,
      slidesPerColumn: 2,
      mousewheel: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    })

    //
    //  Event - onInit

    // applicationSlider.on('init',function() {
    //   applicationSlider.prependSlide([
    //     '<div class="swiper-slide fake-slide"></div>',
    //     '<div class="swiper-slide fake-slide"></div>'
    //   ])
    // })


    //
    //

    //
    //  Event - reachEnd
    applicationSlider.on('reachEnd',function(){
      if(applicationSlider.isEnd){
        verticalSlider.slideNext()
      }
    })
    websiteSlider.on('reachEnd',function(){
      if(websiteSlider.isEnd){
        verticalSlider.slideNext()
      }
    })
    ecommerceSlider.on('reachEnd',function(){
      if(ecommerceSlider.isEnd){
        verticalSlider.slideNext()
      }
    })
    //
    // Fin - event reachEnd

    //
    //  Event - reachBeginning
    websiteSlider.on('reachBeginning',function(){
      if(websiteSlider.isBeginning){
        verticalSlider.slidePrev()
      }
    })
    ecommerceSlider.on('reachBeginning',function(){
      if(ecommerceSlider.isBeginning){
        verticalSlider.slidePrev()
      }
    })
    digitalMarketingSlider.on('reachBeginning',function(){
      if(digitalMarketingSlider.isBeginning){
        verticalSlider.slidePrev()
      }
    })
    //
    // Fin - event reachBeginning



  }

  componentDidMount() {
    this.initSlider()
  }

  componentDidUpdate() {
    this.initSlider()
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
                {
                  /*
                  * Vertical Slider
                  * */
                }
                <div ref={this.verticalSlider} className="swiper-container">
                  <div className="swiper-wrapper">
                    <div className={`swiper-slide`}  >
                      <div className={style.testSliderOutside}>

                        {
                          /*
                          * Application Slider
                          * */
                        }
                        <div ref={this.applicationSlider} className="swiper-container">
                          <div className="swiper-wrapper">
                            <div className="swiper-slide fake-slide"></div>
                            <div className="swiper-slide fake-slide"></div>
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
                    <div className={`swiper-slide`}>
                      <div className={style.testSliderOutside}>

                        {
                          /*
                          * Website Slider
                          * */
                        }
                        <div ref={this.websiteSlider} className="swiper-container">
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
                    <div className={`swiper-slide`}>
                      <div className={style.testSliderOutside}>

                        {
                          /*
                          * eCommerce Slider
                          * */
                        }
                        <div ref={this.ecommerceSlider} className="swiper-container">
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
                    <div className={`swiper-slide`}>
                      <div className={style.testSliderOutside}>

                        {
                          /*
                          * Digital Marketing Slider
                          * */
                        }
                        <div ref={this.digitalMarketingSlider} className="swiper-container">
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
