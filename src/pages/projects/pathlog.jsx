import React from 'react'
import { siteMetadata } from '../../../gatsby-config'
import Layout from "components/layout";
import Meta from "components/meta";
import HeaderCase from "blocks/case/headerCase";
import style from "scss/pages/projects/pathlog.module.scss"
import ParagraphLine from "components/paragraphLine";
import Image from 'components/image'
import SectionHalfIntroduction from 'blocks/case/sectionHalfIntroduction'
import SectionHalfImage from 'blocks/case/sectionHalfImage'
import SectionTextImageLeft from 'blocks/case/sectionTextImageLeft'
import SectionTextImageRight from 'blocks/case/sectionTextImageRight'
import SectionTextImageContainer from 'blocks/case/sectionTextImageContainer'
import SectionSlider from 'blocks/case/sectionSlider'
import FooterCase from 'blocks/case/footerCase'
import SectionHeadingFullWidth from 'blocks/case/sectionHeadingFullWidth'
import Dinamiza from 'components/colorDinamiza'
import SectionDark from 'components/sectionDark'

class Pathlog extends React.Component {

  render() {

    const { location, data } = this.props

    const headerInfo = {
      data: "22.08.2019",
      color: "#009ee0",
      logoUrl: "https://plh.fpp.li/125x30",
      image: "/img/projects/pathlog/cover.png",
      title: "Il sistema più innovativo per assegnare le spedizioni",
      tags: ["UI-UX DESIGN","BRAND IDENTITY","PROJECT MANAGEMENT","SOFTWARE ARCHITECT","SYSTEM INTEGRATION","PROGRAMMAZIONE"]
    }

    const slideImages = ['https://plh.fpp.li/800x501', 'https://plh.fpp.li/800x502', 'https://plh.fpp.li/800x503', 'https://plh.fpp.li/800x504', 'https://plh.fpp.li/800x505', 'https://plh.fpp.li/800x506']

    return (
      <div className={'page-home'}>
        <Layout location={location}>
          <Meta site={siteMetadata} title="Pathlog" />

          <HeaderCase data={headerInfo} />

          <SectionHalfIntroduction>
            <h2>Il SaaS innovativo che rivoluziona la <span className={`color-dinamiza`}>supply chain</span></h2>
            <p>Ideato insieme a Click Logistic, Pathlog nasce come sistema ERP smart per assegnare le spedizioni.<br />L'utilizzo della piattaforma da parte di trasportatori e aziende ha permesso la creazione di un vero e proprio network, dove è possibile non solo consentire una gestione snella, bensì far incontrare domanda e offerta.</p>
          </SectionHalfIntroduction>

          <SectionTextImageContainer textPosition={'left'} >
            <ParagraphLine>
              <h2 data-title >Brand identity</h2>
              <p>Partendo dalle tre domande chiave per definire l'identità aziendale, è stata identificata la linea grafica per la comunicazione online. I colori utilizzati comunicano innovazione e fiducia, entrambi valori emersi dalla strategia aziendale. I punti e le linee inseriti nella P simboleggiano la mission aziendale: mettere in contatto domanda - offerta, gestendo la spedizione in tutte le sue fasi.</p>
              <ul>
                <li>Richiesta carte carburante</li>
                <li>Richiesta carte carburante</li>
                <li>Richiesta carte carburante</li>
                <li>Richiesta carte carburante</li>
              </ul>
            </ParagraphLine>
          </SectionTextImageContainer>

          <SectionTextImageContainer textPosition={'right'} >
            <div>
              <h2 data-title >Brand identity</h2>
              <p>Partendo dalle tre domande chiave per definire l'identità aziendale, è stata identificata la linea grafica per la comunicazione online. I colori utilizzati comunicano innovazione e fiducia, entrambi valori emersi dalla strategia aziendale. I punti e le linee inseriti nella P simboleggiano la mission aziendale: mettere in contatto domanda - offerta, gestendo la spedizione in tutte le sue fasi.</p>
              <ul>
                <li>Richiesta carte carburante</li>
                <li>Richiesta carte carburante</li>
                <li>Richiesta carte carburante</li>
                <li>Richiesta carte carburante</li>
              </ul>
            </div>
          </SectionTextImageContainer>

          <SectionHeadingFullWidth>
            <h3>Service Design e UX per <Dinamiza>amplificare l'esperienza utente</Dinamiza>.</h3>
          </SectionHeadingFullWidth>

          <SectionHalfImage>
            <ParagraphLine>
              <h2 data-title>Un ecosistema intelligente integrabile con i propri gestionali</h2>
              <p>Pathlog è sviluppato in modo tale da consentire l'estensione con le proprie piattaforme gestionali.<br />Sono state implementate e rese disponibili le API, che permettono di integrare qualsiasi sistema ERP sia per le utenze di tipo trasportatore che per quelle di tipo azienda.</p>
            </ParagraphLine>
          </SectionHalfImage>

          <SectionDark imageSrc={'https://plh.fpp.li/800x501'} imagePosition={'bottom'}>

            <SectionTextImageLeft>
              <Image url={'https://plh.fpp.li/800x500'} className={style.section__dark__firstImage} />
              <ParagraphLine>
                <h2 data-title className={`has-color-primary-negative`}>Prototipazione interfaccia, e Analisi Funzionalità</h2>
                <p className={`has-color-primary-negative`}>L'aspetto grafico di un sistema di gestione delle spedizioni non è stato meno importante delle componenti tecniche. Abbiamo cercato di togliere per semplificare, adottando uno stile pulito e minimale.</p>
              </ParagraphLine>
            </SectionTextImageLeft>

            <SectionTextImageRight>
              <Image url={'https://plh.fpp.li/800x500'} className={style.section__dark__firstImage} />
              <ParagraphLine>
                <h2 data-title className={`has-color-primary-negative`}>Prototipazione interfaccia, e Analisi Funzionalità</h2>
                <p className={`has-color-primary-negative`}>L'aspetto grafico di un sistema di gestione delle spedizioni non è stato meno importante delle componenti tecniche. Abbiamo cercato di togliere per semplificare, adottando uno stile pulito e minimale.</p>
              </ParagraphLine>
            </SectionTextImageRight>

            <SectionTextImageContainer textPosition={'left'}>
              <ParagraphLine>
                <h2 data-title className={`has-color-primary-negative`}>Brand identity</h2>
                <p className={`has-color-primary-negative`}>Partendo dalle tre domande chiave per definire l'identità aziendale, è stata identificata la linea grafica per la comunicazione online. I colori utilizzati comunicano innovazione e fiducia, entrambi valori emersi dalla strategia aziendale. I punti e le linee inseriti nella P simboleggiano la mission aziendale: mettere in contatto domanda - offerta, gestendo la spedizione in tutte le sue fasi.</p>
              </ParagraphLine>
            </SectionTextImageContainer>

            <SectionSlider slidesData={slideImages}>
              <h2 className={`has-color-primary-negative`}>Risultati</h2>
              <p className={`has-color-primary-negative`}>Il sistema creato ha generato interesse tra domanda-offerta, la facilità d'uso ne ha permesso l'adozione contribuendo così ad aumentare l'efficienza della supply chain aziendale e il business dei trasportatori.</p>
            </SectionSlider>

          </SectionDark>

          <FooterCase />

        </Layout>
      </div>
    )
  }
}

export default Pathlog
