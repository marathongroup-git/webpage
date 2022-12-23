import React, { useRef, useState } from 'react'
import { connect } from 'react-redux'
import { useForm } from 'react-hook-form'
import { getAll } from '../../actions'
import { create } from '../../actions'
import { AiOutlineMail, AiOutlineUser } from 'react-icons/ai'
import { BsCardHeading, BsPhone } from 'react-icons/bs'
import { GiFactoryArm } from 'react-icons/gi'
import { MdAttachMoney } from 'react-icons/md'
import { BiCarousel } from 'react-icons/bi'
import { useReactToPrint } from 'react-to-print'
import Text from '../../components/Text'
import Title from '../../components/Title'
import Button from '../../components/Button'
import bg from '../../assets/static/jobpool.jpg'
import Format from './Format'
import './styles.scss'

const style = {
  backgroundImage: `linear-gradient(
rgba(0, 0, 0, 0.9),
rgba(0, 0, 0, 0.9)
),url(${bg})`,
}

const CreditRequest = props => {
  const { register, handleSubmit } = useForm()
  const [name, setName] = useState('')
  const [rfc, setRfc] = useState('')
  const [address, setAddress] = useState('')
  const [cp, setCp] = useState('')
  const [email, setEmail] = useState('')
  const [f1, setF1] = useState('')
  const [f2, setF2] = useState('')
  const [f3, setF3] = useState('')
  const [f4, setF4] = useState('')
  const [phoneSelected, setPhone] = useState('')

  const onSubmit = data => {
    const info = {
      name,
      rfc,
      address,
      cp,
      email,
      f1,
      f2,
      f3,
      f4,
      phone: phoneSelected,
    }

    console.log(info, 'pre info')

    props
      .create('web-customers', 'CREATE INFO', info)
      .then(() => {
        handlePrint()
      })
      .then(() => {
        document.getElementById('formCustomer').reset()
      })
  }

  const componentRef = useRef()
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  })

  return (
    <div className="credit" style={style}>
      <div className="credit__container">
        <div className="credit__container__right">
          <Title className="title --mid">Estimado cliente</Title>
          <form
            className="credit__container__form"
            id="formCustomer"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Text>Favor de llenar los datos.</Text>
            <div
              className="credit__container__formGroup"
              style={{ gridColumn: '1/3' }}
            >
              <label htmlFor="">
                <AiOutlineUser />
              </label>
              <input
                type="text"
                name="nombre"
                placeholder="Nombre / Razon social"
                ref={register({ required: true })}
                onChange={e => setName(e.target.value)}
              />
            </div>
            <div
              className="credit__container__formGroup"
              style={{ gridColumn: '3/5' }}
            >
              <label htmlFor="">
                <BsCardHeading />
              </label>
              <input
                type="text"
                name="rfc"
                placeholder="RFC"
                ref={register({ required: true })}
                onChange={e => setRfc(e.target.value)}
              />
            </div>
            <div
              className="credit__container__formGroup"
              style={{ gridColumn: '1/3' }}
            >
              <label htmlFor="">
                <GiFactoryArm />
              </label>
              <input
                type="text"
                name="direccion-fiscal"
                placeholder="Domicilio fiscal"
                ref={register({ required: true })}
                onChange={e => setAddress(e.target.value)}
              />
            </div>
            <div
              className="credit__container__formGroup"
              style={{ gridColumn: '3/5' }}
            >
              <label htmlFor="">
                <AiOutlineMail />
              </label>
              <input
                type="number"
                name="zip"
                placeholder="C.P."
                ref={register({ required: true })}
                onChange={e => setCp(e.target.value)}
              />
            </div>
            <div
              className="credit__container__formGroup"
              style={{ gridColumn: '1/3' }}
            >
              <label htmlFor="">
                <AiOutlineMail />
              </label>
              <input
                type="email"
                name="email"
                placeholder="Correo electrónico vigente para recibir CFDI"
                ref={register({ required: true })}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div
              className="credit__container__formGroup"
              style={{ gridColumn: '3/6' }}
            >
              <label htmlFor="">
                <BsPhone />
              </label>
              <input
                type="text"
                name="phone"
                placeholder="Teléfono de contacto"
                ref={register({ required: true })}
                onChange={e => setPhone(e.target.value)}
              />
            </div>
            <div
              className="jobContainer__formGroup"
              style={{ gridColumn: '1/3' }}
            >
              <label htmlFor="">
                <MdAttachMoney />
              </label>
              <select
                name="giro-comercial"
                ref={register({ required: true })}
                onChange={e => setF1(e.target.value)}
              >
                <option value="">Forma de pago</option>
                <option value="0">Efectivo</option>
                <option value="3">Transferencia electrónica de fondos</option>
                <option value="4">Tarjeta de crédito</option>
                <option value="28">Tarjeta de débito</option>
              </select>
            </div>
            <div
              className="jobContainer__formGroup"
              style={{ gridColumn: '3/5' }}
            >
              <label htmlFor="">
                <MdAttachMoney />
              </label>
              <select
                name="giro-comercial"
                ref={register({ required: true })}
                onChange={e => setF2(e.target.value)}
              >
                <option value="">Metodo de pago</option>
                <option value="PUE">PAGO EN UNA SOLA EXHIBICION</option>
                <option value="PPD">PAGO EN PARCIALIDADES O DIFERIDO</option>
              </select>
            </div>
            <div
              className="jobContainer__formGroup"
              style={{ gridColumn: '1/3' }}
            >
              <label htmlFor="">
                <BiCarousel />
              </label>
              <select
                name="giro-comercial"
                ref={register({ required: true })}
                onChange={e => setF3(e.target.value)}
              >
                <option value="">Uso de CFDI</option>
                <option value="G01">Adquisicion de Mercancias</option>
                <option value="G03">Gastos en general</option>
                <option value="0">Otra</option>
              </select>
              {f3 === '0' ? (
                <input
                  type="text"
                  onChange={e => setF4(e.target.value)}
                  placeholder="Descripción"
                />
              ) : null}
            </div>

            {/* BOTTON */}
            <div className="credit__container__formGroup">
              <Button type="submit">Guardar</Button>
            </div>
            <div style={{ display: 'none' }}>
              <Format
                ref={componentRef}
                info={{
                  name,
                  rfc,
                  address,
                  cp,
                  email,
                  f1,
                  f2,
                  f3,
                  f4,
                  phone: phoneSelected,
                }}
              />
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

export default connect(null, mapDispatchToProps)(CreditRequest)
