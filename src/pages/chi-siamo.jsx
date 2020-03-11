import { graphql } from 'gatsby'
import get from 'lodash/get'
import Img from 'gatsby-image'
import React from 'react'

import { siteMetadata } from '../../gatsby-config'
import Layout from 'components/layout'
import Meta from 'components/meta'
import style from "scss/pages/chiSiamo.module.scss";
import Lines from "components/lines";
import Image from "components/image";

class ChiSiamo extends React.Component {
  render() {
    const { location, data } = this.props

    return (
      <Layout location={location}>
        <Meta site={siteMetadata} title="Profile" />

        <div className={style.header}>
          <Lines />
          <div className={'container'}>
            <div className={'row'}>

              <div className={'col-md-5'}>
                <h2 className={'has-color-elements-dark'}>Dinamiza <span className={'has-color-primary-negative'}>nasce nel 2009</span> per dare vita a <span className={'has-color-primary-negative'}>progetti digitali data driven con componenti tecnologiche</span> e progettuali avanzate e complesse.</h2>
              </div>

              <div className={'offset-md-1 col-md-5 image'}>
                <p className={`has-color-elements-dark`}>Basandoci sui dati, intercettiamo le esigenze degli utenti che ruotano attorno al brand per tradurli in <span className={'has-color-primary-negative'}>progetti ad alto impatto tecnologico e creativo</span>, in cui l'obiettivo principale è creare esperienze che lascino il segno. Rendere l'esperienza di navigazione e interazione dell'utente con il brand, semplice e fruibile richiede uno studio approfondito di più variabili, ecco perché il prodotto finale e i progetti di comunicazione sono frutto di un flusso di lavoro complesso e metodico.</p>
                <p className={`has-color-elements-dark ${style.header__textBottom}`}><span className={'has-color-dinamiza has-font-element'}>DINAMIZA</span> è parte del gruppo <span className={'has-color-primary-negative'}>STARSOFTWARE</span></p>
              </div>

            </div>

            <div className={style.header__payoff}>
              <hr />
              <h4><span>your idea.</span> our amazing creation</h4>
            </div>

          </div>
        </div>

        <div className={`${style.section1} is-overlap`}>

          <div className={`container-fluid no-padding`}>
            <div className={`row`}>
              <div className={`offset-md-7 col-md-5`}>

                <Image url={'https://plh.fpp.li/500x500'} className={style.section1__image} />

              </div>
            </div>
          </div>
          <div className={`container`}>
            <div className={`row`}>
              <div className={`col-md-6`}>
                <div className={style.section1__content}>
                  <p>Siamo il partner ideale per lo sviluppo di prodotti digitali che migliorano le performance del business.</p>
                  <p>Sviluppiamo soluzioni ad alto impatto tecnologico e creativo, partendo dai bisogni e dall'identità della tua azienda. Il nostro obiettivo è quello di lavorare assieme a te per permettere alla tua impresa di crescere.</p>
                  <p>Grazie alle competenze trasversali e alle esperienze pregresse del team, Dinamiza copre tutte le componenti progettuali con un alto livello di seniority.</p>
                  <p>Dinamiza è parte di Starsoftware Group, azienda storica con una forte competenza tecnologica in ambito infrastruttura informatica, software per l'automazione
                    e business intelligence.</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className={`${style.section2} is-overlap`}>

          <div className={`container-fluid no-padding`}>
            <div className={`row`}>
              <div className={`col-md-5`}>

                <Image url={'https://plh.fpp.li/501x500'} className={style.section2__image} />

              </div>
            </div>
          </div>
          <div className={`container`}>
            <div className={`row`}>
              <div className={`offset-md-6 col-md-6`}>
                <div className={style.section2__content}>
                  <span>Via B. Maderna, 7 | Mestre — Venezia | <a data-hover="true" href={'mailto:info@dinamiza.it'}>info@dinamiza.it</a></span>
                  <p><b>DINAMIZA</b> è parte di Starsoftware Group, azienda storica con una forte competenza tecnologica in ambito infrastruttura informatica, software per l'automazione e business intelligence.</p>
                  <p>La mission del Gruppo Starsoftware è dotare il cliente di strumenti informatici e tecnologici innovativi che gli consentano di cogliere le opportunità attuali e di prepararsi ad affrontare le sfide del futuro.</p>
                  <p>I diversi ambiti di business sono sviluppati da divisioni specialistiche dedicate che lavorano in modo integrato, unite dalla solidità e dalla vision strategica del gruppo.</p>
                  <p>I vantaggi di questa integrazione sono la massima flessibilità e velocità nel corrispondere e soddisfare le esigenze del cliente.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={style.section3}>
          <div className={`container`}>
            <div className={`row`}>
              <div className={`col-md-5`}>
                <div className={style.section3__content}>
                  <img className={style.section3__logo} src='/img/logo_seon.svg' />
                  <p><span className={style.section3__red}>SEON</span> è la divisione del Gruppo Starsoftware che presidia l’ambito ICT del cliente a 360 gradi attraverso la creazione di infrastrutture tecnologiche realizzate sulle reali esigenze delle PMI.</p>
                  <a href={'https://seon.it/'} data-hover="true" target={'_blank'}><img src='/img/icon_link.svg' />https://seon.it/</a>
                </div>
              </div>
              <div className={`offset-md-2 col-md-5`}>
                <div className={style.section3__content}>
                  <img className={style.section3__logo} src='/img/logo_cylix.svg' />
                  <p><span className={style.section3__black}>CYLIX</span> è la divisione del Gruppo Starsoftware dedicata alla creazione di soluzioni informatiche che mirano alla razionalizzazione e ottimizzazione dei processi interni alle PMI.</p>
                  <a href={'https://cylix.it/'} data-hover="true" target={'_blank'}><img src='/img/icon_link.svg' />https://cylix.it/</a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </Layout>
    )
  }
}

export default ChiSiamo
