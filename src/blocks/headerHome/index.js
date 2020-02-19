import React from 'react'
import Particles from 'components/particles'

class HeaderHome extends React.Component {
  render() {
    const { location, title } = this.props
    return (
      <div className={'block-header-home'}>
        <Particles />
      </div>
    )
  }
}

export default HeaderHome
