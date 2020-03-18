import React from 'react'
import style from 'scss/pages/servizi.module.scss'
import Meta from 'components/meta'
import { siteMetadata } from '../../gatsby-config'
import Layout from 'components/layout'
import Lines from 'components/lines'
import $ from 'jquery'

class Servizi extends React.Component {

  constructor() {
    super();
    this.page = React.createRef()
    this.containerIsotope = React.createRef()
    this.isotope = React.createRef()
  }

  initTiles(){

    const Isotope = require('isotope-layout')
    require('isotope-masonry-horizontal')

    //
    //  Init Const
    const constainerIsotope = this.containerIsotope.current
    const elementIsotope = this.isotope.current

    //
    //  Init grid
    const grid = new Isotope(elementIsotope, {
      layoutMode: 'masonryHorizontal',
      itemSelector: '.grid-item',
      filter: '.application',
      masonryHorizontal: {
        rowHeight: '.grid-sizer',
        gutter: 10
      }
    })

    //
    // Scroll - Horizontal
    window.addEventListener("wheel", event => {
      constainerIsotope.scrollLeft -= event.wheelDelta
    })

    //
    // Event - onClick
    $('.filters-button-group').on( 'click', '.button', function() {
      const filterValue = $( this ).attr('data-filter');
      $('.filters-button-group > .button').removeClass('active')
      $(this).addClass('active')
      grid.arrange({ filter: filterValue })
    });

    //
    // Event - Change on Scroll

    let enableEvent = true

    window.addEventListener("wheel", event => {

      if (enableEvent) {
        if (event.wheelDelta < 0) {

          if (elementIsotope.offsetWidth > constainerIsotope.offsetWidth) {
            if (($('#container').scrollLeft() + $('#container').width()).toFixed(0) == $('.grid').width().toFixed(0)) {
              var $newElem = $('.button.active').next();
              $('.filters-button-group .button').removeClass('active')
              if ($newElem[0]) {
                $newElem.addClass('active')
              } else {
                $('.button').first().addClass('active')
              }
              $newElem = $('.button.active')
              grid.arrange({ filter: $newElem.attr('data-filter') })

              setTimeout(function() {
                document.getElementById('container').scrollLeft = 0
              }, 200)

              enableEvent = false
              setTimeout(function() {
                enableEvent = true
              }, 2000)

            }
          } else if (elementIsotope.offsetWidth < constainerIsotope.offsetWidth) {
            var $newElem = $('.button.active').next();
            $('.filters-button-group .button').removeClass('active')
            if ($newElem[0]) {
              $newElem.addClass('active')
            } else {
              $('.button').first().addClass('active')
            }
            $newElem = $('.button.active')
            grid.arrange({ filter: $newElem.attr('data-filter') })

            setTimeout(function() {
              document.getElementById('container').scrollLeft = 0
            }, 200)

            enableEvent = false
            setTimeout(function() {
              enableEvent = true
            }, 2000)

          }

        } else {

          if ($('#container').scrollLeft() == 0) {
            var $newElem = $('.button.active').prev();
            $('.filters-button-group .button').removeClass('active')
            if ($newElem[0]) {
              $newElem.addClass('active')
            } else {
              $('.button').last().addClass('active')
            }
            $newElem = $('.button.active')
            grid.arrange({ filter: $newElem.attr('data-filter') })
            setTimeout(function() {
              document.getElementById('container').scrollLeft = 0
            }, 200)

            enableEvent = false
            setTimeout(function() {
              enableEvent = true
            }, 2000)

          }

        }


      }

    })


  }

  componentDidMount() {
    this.initTiles()
  }

  componentDidUpdate() {
    this.initTiles()
  }

  render() {
    const { location, data } = this.props

    return (
      <div ref={this.page} className={style.page}>
        <Layout location={location}>
          <Meta site={siteMetadata} title="Servizi" />

          <Lines />

          <div className={`container-fluid ${style.page__content}`}>
            <div className={`row`}>
              <div className={`offset-md-2 col-md-2`}>
                <div className={style.page__content__menu}>

                  <div className="button-group filters-button-group">
                    <div className={`button ${style.page__content__menu__section} active`} data-hover data-filter=".application">
                      <h4>Applicazioni Web/Mobile</h4>
                      <ul>
                        <li>Analisi dei Benchmark</li>
                        <li>UI/UX Design</li>
                        <li>Content</li>
                        <li>Sviluppo web</li>
                        <li>SEO Optimization</li>
                      </ul>
                    </div>
                    <div className={`button ${style.page__content__menu__section}`} data-hover data-filter=".website">
                      <h4>Website</h4>
                      <ul>
                        <li>Analisi dei Benchmark</li>
                        <li>UI/UX Design</li>
                        <li>Content</li>
                        <li>Sviluppo web</li>
                        <li>SEO Optimization</li>
                      </ul>
                    </div>
                    <div className={`button ${style.page__content__menu__section}`} data-hover data-filter=".ecommerce">
                      <h4>eCommerce/B2B</h4>
                      <ul>
                        <li>Analisi dei Benchmark</li>
                        <li>UI/UX Design</li>
                        <li>Content</li>
                        <li>Sviluppo web</li>
                        <li>SEO Optimization</li>
                      </ul>
                    </div>
                    <div className={`button ${style.page__content__menu__section}`} data-hover data-filter=".digital">
                      <h4>Digital Marketing</h4>
                      <ul>
                        <li>Analisi dei Benchmark</li>
                        <li>UI/UX Design</li>
                        <li>Content</li>
                        <li>Sviluppo web</li>
                        <li>SEO Optimization</li>
                      </ul>
                    </div>
                  </div>

                </div>
              </div>
              <div className={`offset-md-1 col-md-7 no-padding ${style.page__content__fullScreenSlide}`}>
                <div ref={this.containerIsotope} id="container" className={`${style.page__content__fullScreenSlide__content}`}>
                  <div ref={this.isotope} className="grid">
                    <div className="grid-sizer"></div>
                    <div className="grid-item grid-item--height2 application"></div>
                    <div className="grid-item grid-item--width2 website"></div>
                    <div className="grid-item application digital"></div>
                    <div className="grid-item application website"></div>
                    <div className="grid-item grid-item--width2 grid-item--height2 application"></div>
                    <div className="grid-item grid-item--width2 ecommerce"></div>
                    <div className="grid-item grid-item--width2 application"></div>
                    <div className="grid-item grid-item--height2 application"></div>
                    <div className="grid-item website ecommerce"></div>
                    <div className="grid-item grid-item--width2 website"></div>
                    <div className="grid-item grid-item--height2 application"></div>
                    <div className="grid-item website"></div>
                    <div className="grid-item website"></div>
                    <div className="grid-item ecommerce"></div>
                    <div className="grid-item website digital"></div>
                    <div className="grid-item website digital"></div>
                    <div className="grid-item application digital"></div>
                    <div className="grid-item application"></div>
                    <div className="grid-item application"></div>
                    <div className="grid-item ecommerce"></div>
                    <div className="grid-item ecommerce"></div>
                  </div>
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
