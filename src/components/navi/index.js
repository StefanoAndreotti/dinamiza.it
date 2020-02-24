import React from 'react'
import { Link } from 'gatsby'

import style from'./style.module.scss'

class Navi extends React.Component {
  render() {
    const { location, title } = this.props
    return (
      <nav className={`navbar navbar-expand navbar-dark flex-column flex-md-row fixed-top ${style.navbar}`}>
        <div className="container-fluid">
          <div className={style.navbar__logoContainer}>
            <Link className="text-center" to="/">
              <img className={style.navbar__logo} src={'/img/logo-navbar.svg'} alt={title} />
              <h1>Dinamiza</h1>
            </Link>
          </div>
          <div className={`navbar-nav-scroll ${style.navbar__menu}`}>
            <ul className="navbar-nav bd-navbar-nav flex-row">
              <li
                className={
                  location.pathname === '/' ? 'nav-item active' : 'nav-item'
                }
              >
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li
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
              <a href={''}>
                <i className="fa fa-user" aria-hidden="true"></i>
                <span>Careers</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navi
