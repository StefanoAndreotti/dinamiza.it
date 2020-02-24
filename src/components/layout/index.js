import style from 'scss/global.scss'
import React from 'react'

import emergence from 'emergence.js'
import Navi from 'components/navi'
import Footer from 'components/footer'

import { siteMetadata } from '../../../gatsby-config'
import NaviBottom from "components/naviBottom";

class Layout extends React.Component {
  componentDidMount() {
    emergence.init()
  }

  componentDidUpdate() {
    emergence.init()
  }

  render() {
    const { children } = this.props
    return (
      <div>
        <Navi title={siteMetadata.title} {...this.props} />
        {children}
        <NaviBottom />
        <Footer title={siteMetadata.title} author={siteMetadata.author} />
      </div>
    )
  }
}

export default Layout
