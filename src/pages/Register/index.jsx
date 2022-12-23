import React from 'react'
import { connect } from 'react-redux'
import { useForm } from 'react-hook-form'
import { getAll } from '../../actions'
import { create } from '../../actions'
import { AiOutlineMail, AiOutlineUser } from 'react-icons/ai'
import { BsPhone } from 'react-icons/bs'
import { GiFactory } from 'react-icons/gi'
import { FiUsers } from 'react-icons/fi'
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

const Register = props => {
  const { register, handleSubmit } = useForm()

  const onSubmit = data => {
    props.create('contact/register', 'CREATE_REGISTER', data)
    document.getElementById('formJob').reset()
  }

  return (
    <div className="job" style={style}>
      <div className="jobContainer">
        <div className="jobContainer__right --hack">
          <Title className="title --mid">Curso de certificación Datwyler</Title>
          <Text className="text">Registro</Text>
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
                <GiFactory />
              </label>
              <input
                type="text"
                name="name"
                placeholder="Razón Social"
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
              <label htmlFor="">
                <FiUsers />
              </label>
              <input
                type="number"
                name="number"
                placeholder="# Personas Interesadas"
                ref={register({ required: true })}
              />
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

export default connect(null, mapDispatchToProps)(Register)
