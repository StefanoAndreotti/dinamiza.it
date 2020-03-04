import React from 'react'
import { siteMetadata } from '../../../gatsby-config'
import Layout from "components/layout";
import Meta from "components/meta";
import HeaderPage from "blocks/headerPage";

class Pathlog extends React.Component {

  render() {

    const { location, data } = this.props

    return (
      <div className={'page-home'}>
        <Layout location={location}>
          <Meta site={siteMetadata} title="Pathlog" />

            <HeaderPage />

        </Layout>
      </div>
    )
  }
}

export default Pathlog
