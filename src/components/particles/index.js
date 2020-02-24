import React from 'react'
import App from "./scripts/App"
import style from './style.module.scss'

class Particles extends React.Component {

  componentDidMount() {

    const app = new App();
    app.init()

  }

  render() {
    return (
      <div>
        <div className={`particles-container ${style.container}`}></div>
      </div>
    )
  }
}

export default Particles
