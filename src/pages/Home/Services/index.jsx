import React from 'react'
import icon1 from '../../../assets/static/ico1.png'
import icon2 from '../../../assets/static/ico2.png'
import icon3 from '../../../assets/static/ico3.png'
import icon4 from '../../../assets/static/ico4.png'
import './styles.scss'

const Services = () => {
  return (
    <div className="services">
      <div className="cardServices">
        <div className="cardServices__icon">
          <img src={icon1} alt="" />
        </div>
        <h3 className="cardServices__title">Asesoría de proyectos</h3>
        <p className="cardServices__text">
          Ofrecemos asesoría en la especificación técnica de proyectos, contamos con amplia experiencia en los
          diferentes ámbitos industriales.
        </p>
      </div>
      <div className="cardServices">
        <div className="cardServices__icon">
          <img src={icon2} alt="" />
        </div>
        <h3 className="cardServices__title">Entregas Express</h3>
        <p className="cardServices__text">
          Contamos con alianzas estratégicas terrestres y aéreas para cumplir con las demandas de tiempo de nuestros
          clientes.
        </p>
      </div>
      <div className="cardServices">
        <div className="cardServices__icon">
          <img src={icon3} alt="" />
        </div>
        <h3 className="cardServices__title">Logística</h3>
        <p className="cardServices__text">
          Comprendemos que la manipulación de nuestros materiales y la entrega de los productos en tiempo son esenciales
          para nuestros clientes.
        </p>
      </div>
      <div className="cardServices">
        <div className="cardServices__icon">
          <img src={icon4} alt="" />
        </div>
        <h3 className="cardServices__title">Suministro</h3>
        <p className="cardServices__text">
          Con el equipo de empresas que representamos, cubrimos la cadena de abastecimiento de productos de mayor
          rotación.
        </p>
      </div>
    </div>
  )
}

export default Services
