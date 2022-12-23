import React from 'react'
import { connect } from 'react-redux'
import { useForm } from 'react-hook-form'
import { getAll } from '../../actions'
import { create } from '../../actions'
import { FiMapPin } from 'react-icons/fi'
import {
  AiOutlineClockCircle,
  AiOutlineMail,
  AiOutlineUser,
} from 'react-icons/ai'
import { BsPhone } from 'react-icons/bs'
import Text from '../../components/Text'
import Title from '../../components/Title'
import Button from '../../components/Button'
import bg from '../../assets/static/jobpool.jpg'

const style = {
  backgroundImage: `linear-gradient(
rgba(0, 0, 0, 0.9),
rgba(0, 0, 0, 0.9)
),url(${bg})`,
}

const Contact = props => {
  const { register, handleSubmit } = useForm()

  const onSubmit = data => {
    props.create('contact', 'CREATE_CONTACT', data)
    document.getElementById('formJob').reset()
  }

  return (
    <div className="job" style={style}>
      <div className="jobContainer">
        <div className="jobContainer__left">
          <div className="jobContainer__card">
            <Title className="title --white --mid">
              <span className="jobContainer__icon">
                <FiMapPin />
              </span>
              Dirección Matriz
            </Title>
            <Text className="text --white">
              Av. 4 Poniente 1712 - A Col. Centro Puebla, México C.P. 72000
            </Text>
            <Title className="title --white --mid">
              <span className="jobContainer__icon --white">
                <AiOutlineClockCircle />
              </span>
              Horario de atención
            </Title>
            <Text className="text --white">
              Lun a Vie - 8:30 a 18:00 <br />
              Sabado - 9:00 a 13:00
            </Text>
          </div>
          <div className="jobContainer__card">
            <Title className="title --white --mid">
              <span className="jobContainer__icon">
                <AiOutlineMail />
              </span>
              Correo
            </Title>
            <Text className="text --white">
              contacto@marathongroup.mx <br />
              matriz@marathongroup.mx
            </Text>
          </div>
          <div className="jobContainer__card">
            <Title className="title --white --mid">
              <span className="jobContainer__icon">
                <BsPhone />
              </span>
              Teléfono
            </Title>
            <Text className="text --white">(222) 690 67 00</Text>
          </div>
        </div>
        <div className="jobContainer__right">
          <Title className="title --mid">Formulario de contacto</Title>
          <Text className="text">
            Si te interesa trabajar para alguna de las áreas de Marathon Group,
            por favor llena el siguiente formulario con tus datos.
          </Text>
          <form
            className="jobContainer__form"
            id="formJob"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="jobContainer__formGroup">
              <label htmlFor="">
                <AiOutlineUser />
              </label>
              <input
                type="text"
                name="name"
                placeholder="Nombre Completo"
                ref={register({ required: true })}
              />
            </div>
            <div className="jobContainer__formGroup">
              <label htmlFor="">
                <BsPhone />
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="Teléfono"
                ref={register({ required: true })}
              />
            </div>
            <div className="jobContainer__formGroup">
              <label htmlFor="">
                <AiOutlineMail />
              </label>
              <input
                type="text"
                name="email"
                placeholder="Email"
                ref={register({ required: true })}
              />
            </div>
            <div className="jobContainer__formGroup">
              <textarea
                type="text"
                name="message"
                placeholder="Mensaje"
                ref={register({ required: true })}
              ></textarea>
            </div>
            <div className="jobContainer__formGroup">
              <Button type="submit">Enviar</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

const mapDispatchToProps = {
  getAll,
  create,
}

export default connect(null, mapDispatchToProps)(Contact)
