import React from 'react'
import { connect } from 'react-redux'
import { RiFacebookCircleFill } from 'react-icons/ri'
import { AiOutlineInstagram, AiFillLinkedin } from 'react-icons/ai'
import { logOut } from '../../actions'
import { Link, useLocation } from 'react-router-dom'
import './styles.scss'
import Button from '../Button'

const Header = props => {
  const { loggedIn } = props
  const location = useLocation()
  const handleLogOut = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    localStorage.removeItem('name')
    localStorage.removeItem('id')
    localStorage.removeItem('role')
    localStorage.removeItem('BranchCD')
    localStorage.removeItem('deparment')
    props.logOut({})
    window.location.href = '/'
  }

  return (
    <header>
      <div className="topBar">
        <div className="topBar__left">
          {/* <Link to="/privacy" className="topBar__text">
            Aviso de Privacidad
          </Link> */}
        </div>
        <div className="topBar__right">
          <div className="topBar__text">Síguenos:</div>
          <div className="topBar__icon">
            <a
              target="blank"
              href="https://www.facebook.com/MarathonGroupMexico/"
            >
              <RiFacebookCircleFill />
            </a>
          </div>
          <div className="topBar__icon">
            <a target="blank" href="https://www.instagram.com/marathongroupmx/">
              <AiOutlineInstagram />
            </a>
          </div>
          <div className="topBar__icon">
            <a
              target="blank"
              href="https://www.linkedin.com/company/marathongroup-mexico/"
            >
              <AiFillLinkedin />
            </a>
          </div>
          {loggedIn === true ? (
            <Button onClick={handleLogOut} className="button --white --header">
              Cerrar Sesión
            </Button>
          ) : (
            <Link to="/login">
              <Button className="button --white --header">
                Iniciar Sesión
              </Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  )
}

const mapStatetoProps = state => {
  return {
    loggedIn: state.reducersApp.loggedIn,
  }
}

const mapDispatchToProps = {
  logOut,
}

export default connect(mapStatetoProps, mapDispatchToProps)(Header)
