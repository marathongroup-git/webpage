import React from 'react'
import { connect } from 'react-redux'
import { useForm } from 'react-hook-form'
import { getAll, create } from '../../actions'
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
import './styles.scss'

const style = {
  backgroundImage: `linear-gradient(
rgba(0, 0, 0, 0.9),
rgba(0, 0, 0, 0.9)
),url(${bg})`,
}

const Contact = props => {
  const { register, handleSubmit } = useForm()
  console.log(props)

  const onSubmit = data => {
    props.create('suscription/unsubscribe', 'CREATE_UNSUBSCRIBE', data).then(() => {
      props.history.push('/')
    })
  }

  return (
    <div className="unsubscribe" style={style}>
      <div className="unsubscribeContainer">
        <div className="unsubscribeContainer__right">
          <Title className="title --mid">
            Darte de baja de listas de correo directamente
          </Title>
          <Text className="text">Ingrese su correo electronico</Text>
          <form
            className="unsubscribeContainer__form"
            id="formJob"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="unsubscribeContainer__formGroup">
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
            <div className="unsubscribeContainer__formGroup">
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
