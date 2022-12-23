import React from 'react'
import CountUp from 'react-countup'
import { FaUserAlt, FaTools, FaStar } from 'react-icons/fa'
import m from '../../../assets/static/M.svg'
import bg from '../../../assets/static/bg4.jpg'
import './styles.scss'

const style = {
  backgroundImage: `linear-gradient(
rgba(0, 0, 0, 0.3),
rgba(0, 0, 0, 0.3)
),url(${bg})`,
}

const Parallax2 = () => {
  return (
    <div className="parallax2" style={style}>
      <div className="parallax2__container">
        <div className="parallax2__left">
          <div className="parallax2__title">
            <img src={m} alt="" />
            <h3>¡Conócenos!</h3>
          </div>
          <h2>Servicio, calidad y compromiso nos respaldan.</h2>
        </div>
        <div className="parallax2__right">
          <div className="parallax2__card">
            <FaUserAlt />
            <div className="parallax2__divider" />
            <CountUp end={1226} duration={12.75} />
            <p>Clientes Satisfechos</p>
          </div>
          <div className="parallax2__card">
            <FaTools />
            <div className="parallax2__divider" />
            <CountUp end={732} duration={12.75} />
            <p>Proyectos</p>
          </div>
          <div className="parallax2__card">
            <FaStar />
            <div className="parallax2__divider" />
            <CountUp end={65} duration={12.75} />
            <p>Expertos Calificados</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Parallax2
