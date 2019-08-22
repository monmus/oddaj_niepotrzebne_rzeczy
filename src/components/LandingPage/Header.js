import React from 'react';
import '../../scss/header.scss';
import { Link } from 'react-scroll';
import ornament from '../../images/ornament.png';
import header from '../../images/header.jpg'
import { Link as ReactLink } from 'react-router-dom'

const Buttons= () => {
  return (
    <div className="buttons">
      <button className="signIn">Zaloguj</button>
      <button className="signUp">Załóż konto</button>
    </div>
  )
}

const options = {
  spy: true,
  smooth:true,
      hashSpy:true,
      offset:100,
      duration:500,
      isDynamic:true,
      ignoreCancelEvents:false
}

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="list">
        <li><Link
          to="main"
          {...options}
        >
          Start
        </Link></li>
        <li><Link
          to="four_steps"
          {...options}
        >
          O co chodzi?
       </Link></li>
        <li><Link
          to="about"
          {...options}
        >
          O nas
        </Link></li>
        <li><Link
          to="foundations"
          {...options}
        >
          Fundacje i organizaje
        </Link></li>
        <li><Link
          to="contact"
          {...options}
        >
          Kontakt
        </Link></li>
      </ul>
    </nav>
  )
}

const Header = () => {
  return (
    <header id="main">
      <img className="photo_main" src={header} alt="" />
      <Buttons />
      <Navigation />
      <div className="info">
        <p>Zacznij pomagać!</p>
        <p>Oddaj niechciane rzeczy w zaufane ręce</p>
        <img src={ornament} alt="" />
        <div>
          <button className="give_away">
                    <ReactLink to="/LoggedView">
                        Oddaj rzeczy
                    </ReactLink>
          </button>
          <button className="collection">Zorganizuj zbiórkę</button>
        </div>
      </div>
    </header>
  )
}

export default Header;

