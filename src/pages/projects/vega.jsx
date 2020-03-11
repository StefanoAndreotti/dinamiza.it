import React from 'react'
import Layout from 'components/layout'
import Meta from 'components/meta'
import { siteMetadata } from '../../../gatsby-config'
import HeaderCase from 'blocks/case/headerCase'
import SectionHalfIntroduction from 'blocks/case/sectionHalfIntroduction'
import SectionHeadingFullWidth from 'blocks/case/sectionHeadingFullWidth'
import Dinamiza from 'components/colorDinamiza'
import SectionTextImageContainer from 'blocks/case/sectionTextImageContainer'
import ParagraphLine from 'components/paragraphLine'
import Image from 'components/image'
import style from 'scss/pages/projects/vega.module.scss'
import SectionDark from 'components/sectionDark'
import SectionTextImageFullWidth from 'blocks/case/sectionTextImageFullWidth'
import SectionSlider from 'blocks/case/sectionSlider'
import FooterCase from 'blocks/case/footerCase'

class Vega extends React.Component {

  render() {

    const { location, data } = this.props

    const headerInfo = {
      data: "22.08.2019",
      color: "#b23433",
      logoUrl: "https://plh.fpp.li/125x30",
      image: "https://plh.fpp.li/1250x300",
      title: "MyVEGA Una piattaforma user friendly integrata per un servizio clienti da STAR",
      tags: ["UI-UX DESIGN","BRAND IDENTITY","PROJECT MANAGEMENT","SOFTWARE ARCHITECT","SYSTEM INTEGRATION","PROGRAMMAZIONE"]
    }

    const slideImages = ['https://plh.fpp.li/800x501', 'https://plh.fpp.li/800x502', 'https://plh.fpp.li/800x503', 'https://plh.fpp.li/800x504', 'https://plh.fpp.li/800x505', 'https://plh.fpp.li/800x506']

    return(
      <div>
        <Layout location={location}>
          <Meta site={siteMetadata} title="Vega" />

          <HeaderCase data={headerInfo} />

          <SectionHalfIntroduction>
            <h2>L'innovazione parte dal basso.</h2>
            <p>Utilizziamo questionari, tool innovativi e mappe che consentono di acquisire dati qualitativi e quantitativi sugli utenti per individuare i gap logici da colmare per semplificare l'esperienza con il brand tramite la piattaforma digitale ideata per VEGA.
              <br/><br/>
              Partendo dall'analisi degli insight sulle abitudini d'uso dei prodotti e servizi VEGA, sono state studiate funzionalità innovative, che posizionano VEGA come brand non solo al passo con i tempi, ma in grado di anticipare le tendenze e le esigenze del cliente.</p>
          </SectionHalfIntroduction>

          <SectionHeadingFullWidth>
            <h2>Service Design e UX per <Dinamiza>amplificare l'esperienza utente</Dinamiza>.</h2>
          </SectionHeadingFullWidth>

          <SectionTextImageContainer>
            <ParagraphLine>
              <h2 data-title>Web e Mobile Application</h2>
              <p>Partendo dall'architettura e dal design di tutte le funzionalità utili a semplificare i processi e il percorso utente per aiutarlo a trovare ciò che serve nel posto e nel momento giusto, è stata creata una web app scegliendo la soluzione tecnologica più adeguata al progetto.
                Prima di procedere allo sviluppo vero e proprio del backend e del frontend sono stati disegnati i wireframe e l'architettura della piattaforma. Tra le funzionalità:
              </p>
              <ul>
                <li>Richiesta carte carburante</li>
                <li>Report rifornimenti</li>
                <li>gestione contratti</li>
                <li>gestione card e rifornimenti</li>
                <li>fatturazione semplice</li>
                <li>notifiche smart</li>
              </ul>
            </ParagraphLine>
            <div>
              <Image url={'https://plh.fpp.li/800x500'} className={style.page__firstImage} />
            </div>
          </SectionTextImageContainer>

          <SectionTextImageContainer textPosition={'right'}>
            <div className={style.page__thirdContent}>
              <h2>Architecture & Design</h2>
              <p>Il progetto è stato costruito step by step: analisi e progettazione, sviluppo, rilascio e besta test.
                Una volta messo in produzione, il progetto viene monitorato costantemente tramite tracking tool e report per valutare l'implementazione di eventuali migliorie.
              </p>
            </div>
            <div>
              <Image url={'https://plh.fpp.li/800x500'} className={style.page__firstImage} />
            </div>
          </SectionTextImageContainer>

          <SectionDark imageSrc={'https://plh.fpp.li/800x501'} imagePosition={'top'}>

            <SectionTextImageFullWidth textPosition={'left'} padding={true} imageFade={false}>
              <Image url={'https://plh.fpp.li/800x500'} className={style.page__firstImage} />
              <ParagraphLine>
                <h2 data-title className={`has-color-primary-negative`}>System Integration</h2>
                <p className={`has-color-primary-negative`}>Quando introduciamo nuovi spazi digitali ci occupiamo anche della parte di integrazione con i sistemi di gestione esistenti. Nel caso di My VEGA è stata studiata una integrazione con il gestionale SAP attingendo ai dati necessari per elaborare la fatturazione tramite codice scontrino, in maniera efficiente e immediata sia lato utente che lato amministrativo.</p>
              </ParagraphLine>
            </SectionTextImageFullWidth>

            <SectionTextImageFullWidth textPosition={'left'} padding={false} imageFade={false}>
              <div className={style.page__secondImage}>
                <img src={'https://pngimage.net/wp-content/uploads/2018/06/png-2-10.png'} />
              </div>
              <ParagraphLine>
                <h2 data-title className={`has-color-primary-negative`}>System Integration</h2>
                <p className={`has-color-primary-negative`}>Quando introduciamo nuovi spazi digitali ci occupiamo anche della parte di integrazione con i sistemi di gestione esistenti. Nel caso di My VEGA è stata studiata una integrazione con il gestionale SAP attingendo ai dati necessari per elaborare la fatturazione tramite codice scontrino, in maniera efficiente e immediata sia lato utente che lato amministrativo.</p>
              </ParagraphLine>
            </SectionTextImageFullWidth>

            <SectionSlider slidesData={slideImages}>
              <h2 className={`has-color-primary-negative`}>Risultati</h2>
              <p className={`has-color-primary-negative`}>Il design segue la filosofia aziendale di offrire al cliente “Un rifornimento da Star!” portando avanti i valori unicità, passione, accoglienza erano le parole chiave del concept. Non solo un sito con contenuti istituzionali ma uno spazio User friendly dove ricerca grafica, soluzioni UX e interattività si fondono per creare il mondo VEGA.</p>
            </SectionSlider>

          </SectionDark>

          <FooterCase />

        </Layout>
      </div>
    )

  }
}

export default Vega
