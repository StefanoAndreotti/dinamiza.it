import React from 'react'
import Swiper from 'swiper';
import { siteMetadata } from '../../../gatsby-config'
import Layout from "components/layout";
import Meta from "components/meta";
import HeaderPage from "blocks/headerPage";
import style from "scss/pages/projects/pathlog.module.scss"
import ParagraphLine from "components/paragraphLine";

class Pathlog extends React.Component {

  componentDidMount() {
    const slider = new Swiper('.swiper-container', {
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });

  }

  componentDidUpdate() {
    const slider = new Swiper('.swiper-container', {
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });

  }

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

    return (
      <div className={'page-home'}>
        <Layout location={location}>
          <Meta site={siteMetadata} title="Pathlog" />

          <HeaderPage data={headerInfo} />

          <div className={`container ${style.section1}`}>
            <div className={`row`}>
              <div className={`col-md-6`}>
                <h2>Il SaaS innovativo che rivoluziona la <span className={`color-dinamiza`}>supply chain</span></h2>
              </div>
              <div className={`col-md-6`}>
                <p>Ideato insieme a Click Logistic, Pathlog nasce come sistema ERP smart per assegnare le spedizioni.<br />L'utilizzo della piattaforma da parte di trasportatori e aziende ha permesso la creazione di un vero e proprio network, dove è possibile non solo consentire una gestione snella, bensì far incontrare domanda e offerta.</p>
              </div>
            </div>
          </div>

          <div className={`container ${style.section2}`}>
            <div className={`row`}>
              <div className={`col-md-5`}>

                  <ParagraphLine>
                    <h2 data-title>Un ecosistema intelligente integrabile con i propri gestionali</h2>
                    <p>Pathlog è sviluppato in modo tale da consentire l'estensione con le proprie piattaforme gestionali.<br />Sono state implementate e rese disponibili le API, che permettono di integrare qualsiasi sistema ERP sia per le utenze di tipo trasportatore che per quelle di tipo azienda.</p>
                  </ParagraphLine>

              </div>
            </div>
          </div>

          <div className={style.section__dark}>

            <div className={`is-overlap ${style.section__dark__block_containerFluid}`}>

              <div className={`container-fluid is-align-center`}>
                <div className={`row`}>
                  <div className={`col-md-6 d-flex justify-content-end`}>
                    <img src={`https://plh.fpp.li/800x500`} />
                  </div>
                </div>
              </div>

              <div className={`container d-flex align-items-center`}>
                <div className={`row`}>

                  <div className={`offset-md-7 col-md-5`}>

                    <div className={`content-text ${style.section__dark__block_containerFluid__content_text}`}>
                      <ParagraphLine>
                        <h2 data-title className={`has-color-primary-negative`}>Prototipazione interfaccia, e Analisi Funzionalità</h2>
                        <p className={`has-color-primary-negative`}>L'aspetto grafico di un sistema di gestione delle spedizioni non è stato meno importante delle componenti tecniche. Abbiamo cercato di togliere per semplificare, adottando uno stile pulito e minimale.</p>
                      </ParagraphLine>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            <div className={`is-overlap ${style.section__dark__block_containerFluid}`}>

              <div className={`container-fluid is-align-center`}>
                <div className={`row`}>
                  <div data-fadeout className={`offset-md-5 col-md-7 no-padding d-flex justify-content-end`}>
                    <img src={`https://plh.fpp.li/800x500`} />
                  </div>
                </div>
              </div>

              <div className={`container d-flex align-items-center`}>
                <div className={`row`}>

                  <div className={`col-md-4`}>

                    <div className={`content-text ${style.section__dark__block_containerFluid__content_text}`}>
                      <ParagraphLine>
                        <h2 data-title className={`has-color-primary-negative`}>Prototipazione interfaccia, e Analisi Funzionalità</h2>
                        <p className={`has-color-primary-negative`}>L'aspetto grafico di un sistema di gestione delle spedizioni non è stato meno importante delle componenti tecniche. Abbiamo cercato di togliere per semplificare, adottando uno stile pulito e minimale.</p>
                      </ParagraphLine>
                    </div>

                  </div>
                </div>
              </div>

              <div className={`container-fluid`}>

              </div>

            </div>

            <div className={`container ${style.section__dark__block_container}`}>
              <div className={`row`}>
                <div className={`col-md-6`}>
                  <div className={`${style.section__dark__block_container__content_text}`}>
                    <ParagraphLine>
                      <h2 data-title className={`has-color-primary-negative`}>Brand identity</h2>
                      <p className={`has-color-primary-negative`}>Partendo dalle tre domande chiave per definire l'identità aziendale, è stata identificata la linea grafica per la comunicazione online. I colori utilizzati comunicano innovazione e fiducia, entrambi valori emersi dalla strategia aziendale. I punti e le linee inseriti nella P simboleggiano la mission aziendale: mettere in contatto domanda - offerta, gestendo la spedizione in tutte le sue fasi.</p>
                    </ParagraphLine>
                  </div>
                </div>
                <div className={`col-md-6`}></div>
              </div>
            </div>

            <div className={`${style.section__dark__block_slider}`}>

              <div className="swiper-container">
                <div className="swiper-wrapper">
                  <div className={`swiper-slide ${style.section__dark__block_slider__slide}`}>
                    <div className={`${style.section__dark__block_slider__slide__content}`}></div>
                  </div>
                  <div className={`swiper-slide ${style.section__dark__block_slider__slide}`}>
                    <div className={`${style.section__dark__block_slider__slide__content}`}></div>
                  </div>
                  <div className={`swiper-slide ${style.section__dark__block_slider__slide}`}>
                    <div className={`${style.section__dark__block_slider__slide__content}`}></div>
                  </div>
                  <div className={`swiper-slide ${style.section__dark__block_slider__slide}`}>
                    <div className={`${style.section__dark__block_slider__slide__content}`}></div>
                  </div>
                  <div className={`swiper-slide ${style.section__dark__block_slider__slide}`}>
                    <div className={`${style.section__dark__block_slider__slide__content}`}></div>
                  </div>
                  <div className={`swiper-slide ${style.section__dark__block_slider__slide}`}>
                    <div className={`${style.section__dark__block_slider__slide__content}`}></div>
                  </div>
                </div>
              </div>

              <div className={`${style.section__dark__block_slider__content_text}`}>
                <div className={`contaienr-fluid`}>
                  <div className={`row`}>
                    <div className={`offset-md-7 col-md-3`}>
                      <h2 className={`has-color-primary-negative`}>Risultati</h2>
                      <p className={`has-color-primary-negative`}>Il sistema creato ha generato interesse tra domanda-offerta, la facilità d'uso ne ha permesso l'adozione contribuendo così ad aumentare l'efficienza della supply chain aziendale e il business dei trasportatori.</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>


        </Layout>
      </div>
    )
  }
}

export default Pathlog
