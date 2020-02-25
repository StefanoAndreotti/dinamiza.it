import React from "react";
import PropTypes from "prop-types";
import axios from "axios";

import style from './style.scss'

/**
 * @component Form
 * @props - { object } -  config
 */
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mailSent: false,
      error: null
    };
  }
  /**
   * @function handleFormSubmit
   * @param e { obj } - form event
   * @return void
   */
  handleFormSubmit = e => {
    e.preventDefault();
    axios({
      method: "post",
      url: '/mailer/api.php',
      headers: { "content-type": "application/json" },
      data: this.state
    })
      .then(result => {
        if (result.data.sent) {
          this.setState({
            mailSent: result.data.sent
          });
          this.setState({ error: false });
        } else {
          this.setState({ error: true });
        }
      })
      .catch(error => this.setState({ error: error.message }));
  };
  /**
   * @function handleChange
   * @param e { obj } - change event
   * @param field { string } - namve of the field
   * @return void
   */
  handleChange = (e, field) => {
    let value = e.target.value;
    let updateValue = {};
    updateValue[field] = value;
    this.setState(updateValue);
  };

  render() {
    const { klassName, successMessage, errorMessage, fieldsConfig } = this.props.config;
    return (
      <div className={`form-wrapper form-contact-style-dinamiza`}>
        <div>
          <form className={klassName} action="#">
            {fieldsConfig &&
            fieldsConfig.map(field => {
              return (
                <React.Fragment key={field.id}>
                  {field.type !== "textarea" && field.type !== "radio" ? (
                    <div className={'form-group'}>
                      <React.Fragment>
                      {field.label ? (
                        <label>{field.label}</label>
                      ) : ('')}
                      <input
                        type={field.type}
                        className={field.klassName}
                        placeholder={field.placeholder}
                        value={field.name}
                        onChange={e => this.handleChange(e, field.fieldName)}
                      />
                    </React.Fragment>
                    </div>
                  ) : field.type === "radio" ?  (
                      <React.Fragment>
                      <div className={'form-group'}>
                          <p>{field.label}</p>
                          <span className={'form-element-radio'}>
                            <input
                              type={field.type}
                              name={field.fieldName}
                              id={field.fieldName + field.name1}
                              value={field.name1}
                              onChange={e => this.handleChange(e, field.fieldName)}
                            />
                            <label for={field.fieldName + field.name1}>{field.name1}</label>
                          </span>

                        { field.name2 ? (

                          <span className={'form-element-radio'}>
                              <input
                                type={field.type}
                                name={field.fieldName}
                                id={field.fieldName + field.name2}
                                value={field.name2}
                                onChange={e => this.handleChange(e, field.fieldName)}
                              />
                              <label htmlFor={field.fieldName + field.name2}>{field.name2}</label>
                            </span>

                        ) : ('')}
                        </div>

                      </React.Fragment>
                  ) : (
                    <React.Fragment>
                      <div className={'form-group'}>
                        {field.label ? (
                          <label>{field.label}</label>
                        ) : ('')}
                        <textarea className={field.klassName} placeholder={field.placeholder} onChange={e => this.handleChange(e, field.fieldName)} value={field.name} rows={4}/>
                      </div>
                    </React.Fragment>
                  )}
                </React.Fragment>
              );
            })}
            <input type="submit" onClick={e => this.handleFormSubmit(e)} value="Invia il modulo" />
            <div>
              {this.state.mailSent && <div className="success" data-success>{successMessage}</div>}
              {this.state.error && <div className="error" data-error>{errorMessage}</div>}
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
//propTypes for the component
Form.propTypes = {
  config: PropTypes.object.isRequired
};
