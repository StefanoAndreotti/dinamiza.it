import React from 'react'
import style from "scss/pages/projects/materica.module.scss"
import Layout from 'components/layout'
import Meta from 'components/meta'
import { siteMetadata } from '../../../gatsby-config'
import HeaderCase from 'blocks/case/headerCase'
import SectionHalfIntroduction from 'blocks/case/sectionHalfIntroduction'
import SectionHeadingFullWidth from 'blocks/case/sectionHeadingFullWidth'
import ParagraphLine from 'components/paragraphLine'
import SectionTextImageFullWidth from 'blocks/case/sectionTextImageFullWidth'

class Materica extends React.Component {
  render() {

    const { location, data } = this.props

    const headerInfo = {
      data: "22.08.2019",
      color: "#000000",
      logoUrl: "https://plh.fpp.li/125x30",
      image: "https://plh.fpp.li/1250x300",
      title: "Da boutique artigianale a brand di design",
      tags: ["UI-UX DESIGN","BRAND IDENTITY","PROJECT MANAGEMENT","SOFTWARE ARCHITECT","SYSTEM INTEGRATION","PROGRAMMAZIONE"]
    }

    const slideImages = ['https://plh.fpp.li/800x501', 'https://plh.fpp.li/800x502', 'https://plh.fpp.li/800x503', 'https://plh.fpp.li/800x504', 'https://plh.fpp.li/800x505', 'https://plh.fpp.li/800x506']

    return(
      <div>
        <Layout location={location}>
          <Meta site={siteMetadata} title="Materica" />

          <HeaderCase data={headerInfo} />

          <SectionHalfIntroduction>
            <h2>Da boutique artigianale a brand di design</h2>
            <p>Materica è una luxury boutique che realizza finiture metalliche di pregio. Attraverso la metallizzazione e la verniciatura, Materica trasforma le materie prime per esaltarle o dargli una nuova luce.
              <br/>La richiesta è stata quella di creare una presenza digitale significativa partendo da zero per aumentare la notorietà del brand tra gli addetti ai lavori.</p>
          </SectionHalfIntroduction>

          <SectionTextImageFullWidth textPosition={'left'} padding={false} imageFade={false}>
            <div className={style.page__secondImage}>
              <img src={'https://pngimage.net/wp-content/uploads/2018/06/png-2-10.png'} />
            </div>
            <ParagraphLine>
              <h2 data-title>System Integration</h2>
              <p>Quando introduciamo nuovi spazi digitali ci occupiamo anche della parte di integrazione con i sistemi di gestione esistenti. Nel caso di My VEGA è stata studiata una integrazione con il gestionale SAP attingendo ai dati necessari per elaborare la fatturazione tramite codice scontrino, in maniera efficiente e immediata sia lato utente che lato amministrativo.</p>
            </ParagraphLine>
          </SectionTextImageFullWidth>

        </Layout>
      </div>

    )
  }
}

export default Materica
