import React, { useState } from 'react'
import { connect } from 'react-redux'
import { create } from '../../actions'
import { FiSend } from 'react-icons/fi'
import { RiFacebookCircleFill } from 'react-icons/ri'
import { AiOutlineInstagram, AiFillLinkedin } from 'react-icons/ai'
import './styles.scss'
import logoWhite from '../../assets/static/logo-white.svg'
import Map from './Map'

const Footer = props => {
  const { branch } = props

  const [branchDisplay, setBranch] = useState({
    id: 1,
    name: 'Puebla (Matriz)',
    direcction: 'Puebla (Matriz): Av. 4 Poniente 1712 - A Col. Centro.',
    city: 'Puebla, México C.P. 72000',
    phone: '(222) 690 67 00',
    email: 'matriz@marathongroup.mx',
    lat: '19.052681',
    lng: '-98.21008',
    zoom: 11,
    center: {
      lat: '19.05',
      lng: '-98.21',
    },
  })

  const [suscription, setSuscription] = useState(null)

  const handlerInput = event => {
    setSuscription({
      [event.target.name]: event.target.value,
    })
  }
  const hanlderSubmit = () => {
    props.create('suscription', 'CREATE_SUSCRIPTION', suscription)
    document.getElementById('suscription').value = ''
  }

  const handlerSetBranch = event => {
    const newBranch = branch.find(
      item => item.id === parseInt(event.target.value)
    )
    setBranch(newBranch)
  }

  return (
    <footer>
      <div className="footer">
        <div className="footerContainer2">
          <div className="footerContainer__subscription">
            <div>
              <h5>Suscríbete</h5>
              <p>
                Recibe promociones, entérate de eventos, nuevos productos y más.
              </p>
            </div>
            <label htmlFor="suscription">
              <input
                name="suscription"
                type="text"
                id="suscription"
                onChange={handlerInput}
              />
              <FiSend onClick={hanlderSubmit} />
            </label>
          </div>
        </div>
        <div className="footerContainer">
          <div className="footerContainer__suc">
            <h5>Sucursales</h5>
            <select name="sucursales" onChange={handlerSetBranch}>
              {branch.map(item => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
            <p>{branchDisplay.direcction}</p>
            <p>{branchDisplay.city}</p>
            <p>{branchDisplay.phone}</p>
            <p>{branchDisplay.email}</p>
          </div>
          <div className="footerContainer__map">
            <Map
              center={branchDisplay.center}
              lat={branchDisplay.lat}
              lng={branchDisplay.lng}
              zoom={branchDisplay.zoom}
            />
          </div>
          {/* <div className="footerContainer__subscription">
            <h5>Suscríbete</h5>
            <p>
              Déjanos tu correo electrónico y entérate de eventos jornadas,
              productos y mucho más.
            </p>
            <label htmlFor="suscription">
              <input name="suscription" type="text" id="suscription" onChange={handlerInput} />
              <FiSend onClick={hanlderSubmit} />
            </label>
          </div> */}
        </div>
      </div>
      <div className="footerBot">
        <img src={logoWhite} alt="Logo Marathon Group" />
        <div className="footerBot__icons">
          <a
            target="blank"
            href="https://www.facebook.com/MarathonGroupMexico/"
          >
            <RiFacebookCircleFill />
          </a>
          <a target="blank" href="https://www.instagram.com/marathongroupmx/">
            <AiOutlineInstagram />
          </a>
          <a
            target="blank"
            href="https://www.linkedin.com/company/marathongroup-mexico/"
          >
            <AiFillLinkedin />
          </a>
        </div>
      </div>
    </footer>
  )
}

const mapStateToProps = state => {
  return {
    branch: state.reducersApp.branch,
  }
}

const mapDispatchToProps = {
  create,
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer)
