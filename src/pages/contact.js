import React from 'react'

import { siteMetadata } from '../../gatsby-config'
import Layout from 'components/layout'
import Meta from 'components/meta'

import style from 'scss/pages/contact.module.scss'

class Contact extends React.Component {
  render() {

    const { location, data } = this.props

    return (
      <Layout location={location}>
        <Meta site={siteMetadata} title="Contattaci" />

        <div className={style.header}>
          <div className={'container'}>
            <div className={'row'}>

              <div className={'col-md-6'}>
                <h2>Hai delle <span className={'color-dinamiza'}>idee digitali</span> interessanti?<br />Vieni a trovarci!</h2>
              </div>

            </div>
          </div>
        </div>

      </Layout>
    )
  }
}

export default Contact

