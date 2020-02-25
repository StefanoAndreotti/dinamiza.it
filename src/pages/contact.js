import React from 'react'

import { siteMetadata } from '../../gatsby-config'
import Layout from 'components/layout'
import Meta from 'components/meta'

import style from 'scss/pages/contact.module.scss'
import Form from "components/form";

class Contact extends React.Component {
  render() {

    const { location, data } = this.props

    const config = {
      klassName: 'form-contact-page',
      successMessage: 'Thank you for contacting me.',
      errorMessage: 'Sorry we have some problems.',
      fields:{
        firstName: '',
        lastName: '',
        email: '',
        msg: ''
      },
      fieldsConfig:  [
        { id: 1, label: '', fieldName: 'firstName', type: 'text',placeholder:'Nome', isRequired: true , className:'first-name-field'},
        { id: 2, label: '', fieldName: 'lastName', type: 'text', placeholder: 'Cognome', isRequired: true , className:'last-name-field'},
        { id: 3, label: '', fieldName: 'email', type: 'email', placeholder: ' eMail', isRequired: true , className:'email-field'},
        { id: 4, label: '', fieldName: 'msg', type: 'textarea',placeholder:'Messaggio', isRequired: true , className:'message-field'},
        { id: 5, label: 'Consenso al trattamento di dati personali ai sensi del D. LGS. N. 196/03 e del REG. UE 2016/679 In relazione all\'informativa che è stata fornita e consultabile qui.', fieldName: 'policy', type: 'radio', placeholder:'Write something.....', name1: 'Accetto', isRequired: true , className:'message-field'},
        { id: 6, label: 'Consenso al trattamento di dati personali ai sensi del D. LGS. N. 196/03 e del REG. UE 2016/679 In relazione all\'informativa che è stata fornita e consultabile qui.', fieldName: 'marketing', type: 'radio', placeholder:'', name1: 'Accetto', name2: 'Rifiuto', isRequired: true , className:'message-field'},
      ]
    }

    return (
      <Layout location={location}>
        <Meta site={siteMetadata} title="Contattaci" />

        <div className={style.header}>

          <div className={'container'}>
            <div className={'row'}>

              <div className={'col-md-6'}>
                <h2>Hai delle <span className={'color-dinamiza'}>idee digitali</span> interessanti?<br />Vieni a trovarci!</h2>
              </div>

              <div className={'col-md-6'}>
                <div className={style.form}>
                  <Form config={config} />
                </div>
              </div>

            </div>

            <div className={style.header__payoff}>
              <hr />
              <h4><span>your idea.</span> our amazing creation</h4>
            </div>

          </div>

        </div>

      </Layout>
    )
  }
}

export default Contact

