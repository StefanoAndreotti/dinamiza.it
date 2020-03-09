import style from 'scss/global.scss'
import React from 'react'

import emergence from 'emergence.js'
import Navi from 'components/navi'
import Footer from 'components/footer'

import { siteMetadata } from '../../../gatsby-config'
import NaviBottom from 'components/naviBottom'
import Smooth from './smooth'
import CursorFx from './cursor'

import styleLayout from './style.module.scss'

class Layout extends React.Component {
  componentDidMount() {
    emergence.init()
    //new Smooth()
    const cursor = new CursorFx(document.querySelector('.cursor'))
    document.querySelectorAll('[data-hover]').forEach(link => {
      link.addEventListener('mouseenter', () => cursor.enter())
      link.addEventListener('mouseleave', () => cursor.leave())
      link.addEventListener('click', () => cursor.click())
    })
  }
  componentDidUpdate() {
    emergence.init()
    //new Smooth()
    const cursor = new CursorFx(document.querySelector('.cursor'))
    document.querySelectorAll('[data-hover]').forEach(link => {
      link.addEventListener('mouseenter', () => cursor.enter())
      link.addEventListener('mouseleave', () => cursor.leave())
      link.addEventListener('click', () => cursor.click())
    })
  }

  render() {
    const { children } = this.props
    return (
      <div>
        <Navi title={siteMetadata.title} {...this.props} />
        <div data-scroll>
          <div data-scroll-content>{children}</div>
        </div>
        <NaviBottom />
        <Footer title={siteMetadata.title} author={siteMetadata.author} />

        <div className={`cursor ${styleLayout.cursor}`}>
          <div
            className="cursor__inner cursor__inner--circle"
            data-cursor-circle
          ></div>
          <div
            className="cursor__inner cursor__inner--dot"
            data-cursor-dot
          ></div>
        </div>
      </div>
    )
  }
}

export default Layout
