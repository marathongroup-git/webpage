import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { FaChevronDown } from 'react-icons/fa'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import logo from '../../assets/static/logo.svg'
import './styles.scss'

const Navbar = props => {
  const { loggedIn } = props
  let user= localStorage.getItem('user')
  let password = localStorage.getItem('password')
  let acceso = "https://wiki-marathon.azurewebsites.net/menu2.php?id=inicio&p="+password+"&u="+user+"&r=1"+"&_redireccionar=1"

  console.log(loggedIn)

  const [togleBar, setTogle] = useState('')

  const toggleAction = () => {
    setTogle(togleBar === '' ? 'active' : '')
  }

  const toggle = e => {
    if (e.target.classList.contains('active')) {
      e.target.classList.remove('active')
    } else {
      e.target.classList.add('active')
    }
  }

  return (
    <nav>
      <div className="nav">
        <Link to="/" className="nav__brand">
          <img src={logo} className="nav__logo" alt="" />
        </Link>
        <div className="nav__menuMovil" onClick={toggleAction}>
          <AiOutlineMenu />
        </div>
        <ul className={`nav__menu ${togleBar}`}>
          <li className="nav__item" onClick={toggleAction}>
            <AiOutlineClose />
          </li>
          <li className={`nav__item`} onClick={toggle}>
            <div className="nav__link">
              Inicio
              <FaChevronDown />
            </div>
            <ul className="nav__submenu">
              <li className="nav__subitem">
                <HashLink smooth to="/#participation" className="nav__sublink">
                  Participación Industrial
                </HashLink>
              </li>
              <li className="nav__subitem">
                <HashLink smooth to="/#divisions" className="nav__sublink">
                  Divisiones
                </HashLink>
              </li>
              <li className="nav__subitem">
                <HashLink smooth to="/#brands" className="nav__sublink">
                  Marcas y catalogos
                </HashLink>
              </li>
              <li className="nav__subitem">
                <HashLink smooth to="/#business" className="nav__sublink">
                  Alianzas comerciales
                </HashLink>
              </li>
            </ul>
          </li>
          {/* <li className={`nav__item`} onClick={toggle}>
            <div className="nav__link">
              Productos
              <FaChevronDown />
            </div>
            <ul className="nav__submenu">
              <li className="nav__subitem">
                <Link to="/construction" className="nav__sublink">
                  Liquidaciones
                </Link>
              </li>
              <li className="nav__subitem">
                <Link to="/promotions" className="nav__sublink">
                  Promociones
                </Link>
              </li>
            </ul>
          </li>
          <li className={`nav__item`} onClick={toggle}>
            <div className="nav__link">
              Socio Marathon
              <FaChevronDown />
            </div>
            <ul className="nav__submenu">
              <li className="nav__subitem">
                <Link to="/construction" className="nav__sublink">
                  Eventos
                </Link>
              </li>
              <li className="nav__subitem">
                <Link to="/construction" className="nav__sublink">
                  Webinars
                </Link>
              </li>
            </ul>
          </li> */}
          <li className={`nav__item`} onClick={toggle}>
            <div className="nav__link">
              Electrica
              <FaChevronDown />
            </div>
            <ul className="nav__submenu">
              <li className="nav__subitem">
                <Link
                  to="/divisions/electrical-cabling"
                  className="nav__sublink"
                >
                  Cableado eléctrico
                </Link>
              </li>
              <li className="nav__subitem">
                <Link
                  to="/divisions/automation-control"
                  className="nav__sublink"
                >
                  Automatización y control
                </Link>
              </li>
              <li className="nav__subitem">
                <Link to="/divisions/channelling" className="nav__sublink">
                  Canalización
                </Link>
              </li>
              <li className="nav__subitem">
                <Link to="/divisions/illumination" className="nav__sublink">
                  Iluminación
                </Link>
              </li>
              <li className="nav__subitem">
                <Link to="/divisions/tools" className="nav__sublink">
                  Herramientas y accesorios
                </Link>
              </li>
            </ul>
          </li>
          <li className={`nav__item`} onClick={toggle}>
            <div className="nav__link">
              ICT Networks
              <FaChevronDown />
            </div>
            <ul className="nav__submenu">
              <li className="nav__subitem">
                <Link to="/divisions/structured-cable" className="nav__sublink">
                  Cableado estructurado
                </Link>
              </li>
              <li className="nav__subitem">
                <Link to="/divisions/data-center" className="nav__sublink">
                  Data center
                </Link>
              </li>
              <li className="nav__subitem">
                <Link to="/divisions/racks-cabinets" className="nav__sublink">
                  Racks y gabinetes
                </Link>
              </li>
              <li className="nav__subitem">
                <Link
                  to="/divisions/ethernet-industrial"
                  className="nav__sublink"
                >
                  Ethernet industrial
                </Link>
              </li>
            </ul>
          </li>
          {/* <li className="nav__item">
            <Link to="/brands" className="nav__link">
              Nuestras Marcas
            </Link>
          </li> */}
       {/*    <li className="nav__item">
            <Link to="/construction" className="nav__link">
              Sucursales
            </Link>
          </li> */}
          {loggedIn === true ? (
            
            <li className="nav__link">
              
              <a href={acceso}>Wiki</a>
              
            </li>
          ) : null}
          {/*  <li className="nav__item">
            <Link to="/wiki" className="nav__link">
              Wiki
            </Link>
          </li> */}
          {/* <li className="nav__item">
            <Link to="/job-pool" className="nav__link">
              Bolsa de Trabajo
            </Link>
          </li> */}
          <li className="nav__item">
            <Link to="/contact" className="nav__link">
              Contacto
            </Link>
          </li>

         


          <li className="nav__button">
            <a href={process.env.REACT_APP_DASHBOARD}>Iniciar Sesión</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

const mapStatetoProps = state => {
  return {
    loggedIn: state.reducersApp.loggedIn,
  }
}

export default connect(mapStatetoProps, null)(Navbar)
