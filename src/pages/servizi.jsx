import React from 'react'
import style from 'scss/pages/servizi.module.scss'
import Meta from 'components/meta'
import { siteMetadata } from '../../gatsby-config'
import Layout from 'components/layout'
import Lines from 'components/lines'

class Servizi extends React.Component{

  render() {

    const { location, data } = this.props

    return(

      <div className={style.page}>
        <Layout location={location}>
          <Meta site={siteMetadata} title="Servizi" />

          <Lines />

          <div className={`container-fluid ${style.page__content}`}>
            <div className={`row`}>
              <div className={`offset-md-2 col-md-3`}>
                <div className={style.page__content__menu}>
                  Test
                </div>
              </div>
              <div className={`col-md-7`}>

              </div>
            </div>
          </div>

        </Layout>
      </div>

    )
  }

}

export default Servizi
