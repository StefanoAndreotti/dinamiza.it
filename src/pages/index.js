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
import arrive from 'arrive'

class Index extends React.Component {
  render() {

    const { location, data } = this.props
    document.arrive('.particles-container',{existing:true},function () {

      document.getElementsByTagName('body')[0].setAttribute('style','height: 100vh')

    });

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
