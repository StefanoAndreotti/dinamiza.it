import React from 'react'
import { Link } from 'gatsby'

import style from'./style.module.scss'

class Navi extends React.Component {
  render() {
    const { location, title } = this.props
    return (
      <nav className={`navbar navbar-expand navbar-dark flex-column flex-md-row fixed-top ${style.navbar}`}>
        <div className="container-fluid">
          <Link className="text-center" to="/">
            <img className={style.navbar__logo} src={'/img/logo-navbar.svg'} alt={title} />
          </Link>
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
                  location.pathname === '/profile/'
                    ? 'nav-item active'
                    : 'nav-item'
                }
              >
                <Link to="/profile/" className="nav-link">
                  Profile
                </Link>
              </li>
              <li
                className={
                  location.pathname === '/about/'
                    ? 'nav-item active'
                    : 'nav-item'
                }
              >
                <Link to="/about/" className="nav-link">
                  About
                </Link>
              </li>
              <li
                className={
                  location.pathname === '/blog/'
                    ? 'nav-item active'
                    : 'nav-item'
                }
              >
                <Link to="/blog/" className="nav-link">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className="navbar-nav flex-row d-none d-md-flex">
            <span>Work with us</span>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navi
