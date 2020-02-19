import { graphql } from 'gatsby'
import get from 'lodash/get'
import Img from 'gatsby-image'
import React from 'react'

import { siteMetadata } from '../../gatsby-config'
import Layout from 'components/layout'
import Meta from 'components/meta'
import Icon from 'components/icon'
import HeaderHome from 'blocks/headerHome'

import 'scss/pages/index.scss'

class Index extends React.Component {
  render() {
    return (
      <Layout location={location}>
        <Meta site={siteMetadata} title="Profile" />

          <HeaderHome title={'test'} location={'asdasdasd'} />

      </Layout>
    )
  }
}

export default Index

export const query = graphql`
  query IndexPageQuery {
    profile: file(name: { eq: "profile" }) {
      childImageSharp {
        fixed(width: 120, height: 120) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    work1: file(name: { eq: "work1" }) {
      childImageSharp {
        sizes(quality: 100) {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }
    work2: file(name: { eq: "work2" }) {
      childImageSharp {
        sizes(quality: 100) {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }
    work3: file(name: { eq: "work3" }) {
      childImageSharp {
        sizes(quality: 100) {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }
    back1: file(name: { eq: "back1" }) {
      childImageSharp {
        sizes(quality: 100) {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }
    back2: file(name: { eq: "back2" }) {
      childImageSharp {
        sizes(quality: 100) {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }
  }
`
