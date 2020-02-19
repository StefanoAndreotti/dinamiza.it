import React from 'react'
import App from "./scripts/App"
import './style.scss'

class Particles extends React.Component {
  // componentDidMount() {
  //   const script = document.createElement("script");
  //   script.src = "static-scripts/particles.js";
  //   script.async = true;
  //
  //   document.body.appendChild(script);
  // }
  componentDidMount() {

    const app = new App();
    app.init()

  }

  render() {
    return (
      <div>
        <div className={'particles-container'}></div>
      </div>
    )
  }
}

export default Particles
