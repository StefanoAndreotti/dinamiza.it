import { graphql } from 'gatsby'
import get from 'lodash/get'
import Img from 'gatsby-image'
import React from 'react'

import { siteMetadata } from '../../gatsby-config'
import Layout from 'components/layout'
import Meta from 'components/meta'
import Icon from 'components/icon'
import HeaderHome from 'blocks/headerHome'

import style from '../scss/pages/index.scss'

class Index extends React.Component {

  componentDidMount() {
    document.getElementsByTagName('body')[0].setAttribute('style','height: 100vh')
  }

  render() {

    const { location, data } = this.props

    return (
      <div className={'page-home'}>
        <Layout location={location}>
          <Meta site={siteMetadata} title="" />

            <HeaderHome title={'test'} location={location} />

        </Layout>
      </div>
    )
  }
}

export default Index
