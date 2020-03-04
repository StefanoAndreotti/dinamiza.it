import React from 'react'
import { Link } from 'gatsby'

import style from'./style.module.scss'

class Navi extends React.Component {
  render() {
    const { location, title } = this.props
    return (
      <div>
        <nav className={`navbar navbar-expand navbar-dark flex-column flex-md-row fixed-top ${style.navbar}`}>
          <div className="container-fluid">
            <div className={style.navbar__logoContainer}>
              <Link className="text-center" to="/">
                <img className={style.navbar__logo} src={'/img/logo-navbar.svg'} alt={title} />
                <h1>Dinamiza</h1>
              </Link>
            </div>
          </div>
        </nav>
        <nav className={`navbar navbar-expand navbar-dark flex-column flex-md-row fixed-top ${style.navbar} ${style.navbar__navbar_link}`}>
          <div className="container-fluid">
            <div className={style.navbar__logoContainer}>
              <Link className="text-center" style={{ display: 'block', height: '71px' }} to="/">
                <img style={{ visibility: 'hidden' }} src={'/img/logo-navbar.svg'} alt={title} />
              </Link>
            </div>
            <div className={`navbar-nav-scroll ${style.navbar__menu}`}>
              <ul className="navbar-nav bd-navbar-nav flex-row">
                <li
                  data-hover
                  className={
                    location.pathname === '/' ? 'nav-item active' : 'nav-item'
                  }
                >
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </li>
                <li
                  data-hover
                  className={
                    location.pathname === '/chi-siamo/'
                      ? 'nav-item active'
                      : 'nav-item'
                  }
                >
                  <Link to="/chi-siamo/" className="nav-link">
                    Chi Siamo
                  </Link>
                </li>
                <li
                  data-hover
                  className={
                    location.pathname === '/contact/'
                      ? 'nav-item active'
                      : 'nav-item'
                  }
                >
                  <Link to="/contact/" className="nav-link">
                    Contattaci
                  </Link>
                </li>

              </ul>
            </div>
            <div className="navbar-nav flex-row d-none d-md-flex">
              <div className={style.navbar__careersContainer}>
                <a href={''} data-hover>
                  <i className="fa fa-user" aria-hidden="true"></i>
                  <span>Careers</span>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navi
