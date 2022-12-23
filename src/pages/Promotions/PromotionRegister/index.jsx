import React from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { useForm } from 'react-hook-form'
import { create } from '../../../actions'
import { AiOutlineMail, AiOutlineUser, AiOutlineFile } from 'react-icons/ai'
import { FaIndustry } from 'react-icons/fa'
import { BsPhone } from 'react-icons/bs'
import Title from '../../../components/Title'
import Button from '../../../components/Button'
import bg from '../../../assets/static/jobpool.jpg'
import '../styles.scss'

const style = {
  backgroundImage: `linear-gradient(
rgba(0, 0, 0, 0.9),
rgba(0, 0, 0, 0.9)
),url(${bg})`,
}

const JobPool = props => {
  const { register, handleSubmit } = useForm()
  const { id } = useParams()
  const onSubmit = data => {
    props.create('promotions/register', 'none', data)
    props.history.go(-1)
  }

  return (
    <div className="job" style={style}>
      <div className="jobContainer">
        <div className="jobContainer__right --hack">
          <Title className="title --mid">Registro</Title>
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
              <label htmlFor="">
                <FaIndustry />
              </label>
              <input
                type="text"
                name="industry"
                placeholder="Empresa"
                ref={register({ required: true })}
              />
            </div>
            <div className="jobContainer__formGroup">
              <label htmlFor="">
                <AiOutlineFile />
              </label>
              <input
                type="text"
                name="ticket"
                placeholder="# de folio"
                ref={register({ required: true })}
              />
            </div>
            <input type="hidden" name="promotionId" value={id} ref={register} />
            <div className="jobContainer__formGroup">
              <Button type="submit">
                Enviar
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

const mapDispatchToProps = {
  create,
}

export default connect(null, mapDispatchToProps)(JobPool)
