import React from 'react'
import Button from "components/button";

import style from './style.module.scss'

class NaviBottom extends React.Component {

  render() {
    return(
      <div className={style.navbar__bottom}>
          <div className={style.navbar__bottom__content}>

            <div className={style.navbar__bottom__content__social__container}>
              <ul>
                <li data-hover>
                  <a href=""><i className="fa fa-twitter" aria-hidden="true"></i></a>
                </li>
                <li data-hover>
                  <a href=""><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                </li>
                <li data-hover>
                  <a href=""><i className="fa fa-facebook-square" aria-hidden="true"></i></a>
                </li>
              </ul>
            </div>

            <div data-hover className={style.navbar__bottom__content__btn}>
              <Button>Let's talk</Button>
            </div>

          </div>
        </div>
    )
  }

}

export default NaviBottom
