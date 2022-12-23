import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useForm } from 'react-hook-form'
import { getAll } from '../../actions'
import { create } from '../../actions'
import { FiMapPin } from 'react-icons/fi'
import {
  AiOutlineClockCircle,
  AiOutlineMail,
  AiOutlineUser,
  AiOutlineDelete,
} from 'react-icons/ai'
import { BsPhone } from 'react-icons/bs'
import { GrFormAdd } from 'react-icons/gr'
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

const CreditRequest = props => {
  const { register, handleSubmit } = useForm()
  const [accionistas, setAccionistas] = useState([{}])
  const [sucursales, setSucursales] = useState(1)
  const [clientes, setClientes] = useState(1)
  const [referencias, setReferencias] = useState(1)
  const [personalMaterial, setPersonalMaterial] = useState(1)
  const [entregaMaterial, setEntregaMaterial] = useState(1)

  const onSubmit = data => {
    props.create('contact', 'CREATE_CONTACT', data)
    document.getElementById('formJob').reset()
  }

  return (
    <div className="credit" style={style}>
      <div className="credit__container">
        <div className="credit__container__right">
          <Title className="title --mid">
            Formulario de solicitud de credito
          </Title>
          <form
            className="credit__container__form"
            id="formJob"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Text>Datos Generales de la Empresa</Text>
            <div
              className="credit__container__formGroup"
              style={{ gridColumn: '1/3' }}
            >
              <label htmlFor="">
                <BsPhone />
              </label>
              <input
                type="text"
                name="nombre"
                placeholder="Nombre / Razon social"
                ref={register({ required: true })}
              />
            </div>
            <div
              className="credit__container__formGroup"
              style={{ gridColumn: '3/5' }}
            >
              <label htmlFor="">
                <BsPhone />
              </label>
              <input
                type="text"
                name="rfc"
                placeholder="RFC"
                ref={register({ required: true })}
              />
            </div>
            <div
              className="credit__container__formGroup"
              style={{ gridColumn: '1/3' }}
            >
              <label htmlFor="">
                <BsPhone />
              </label>
              <input
                type="text"
                name="direccion-fiscal"
                placeholder="Dirección fiscal"
                ref={register({ required: true })}
              />
            </div>
            <div
              className="jobContainer__formGroup"
              style={{ gridColumn: '3/5' }}
            >
              <label htmlFor="">
                <AiOutlineMail />
              </label>
              <select name="giro-comercial" ref={register({ required: true })}>
                <option value="">Giro Comercial</option>
                <option value="0">Industrial</option>
                <option value="1">Comercialización</option>
                <option value="2">Integración</option>
                <option value="3">Mantenimiento</option>
                <option value="4">Fabricación de equipo original</option>
              </select>
            </div>

            <div
              className="credit__container__formGroup"
              style={{ gridColumn: '1/3' }}
            >
              <label htmlFor="">
                <BsPhone />
              </label>
              <input
                type="text"
                name="telefono"
                placeholder="Telefono general"
                ref={register({ required: true })}
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
                type="text"
                name="email"
                placeholder="Email"
                ref={register({ required: true })}
              />
            </div>
            <Text style={{ gridColumn: '1/5' }}>
              Datos de la Constitución de la Empresa
            </Text>
            <div
              className="credit__container__formGroup"
              style={{ gridColumn: '1/3' }}
            >
              <label htmlFor="">
                <BsPhone />
              </label>
              <input
                type="text"
                name="objeto-social"
                placeholder="Objecto Social"
                ref={register({ required: true })}
              />
            </div>
            <div className="credit__container__formGroup">
              <label htmlFor="">
                <BsPhone />
              </label>
              <input
                type="text"
                name="ciudad"
                placeholder="Fundada en: (Ciudad)"
                ref={register({ required: true })}
              />
            </div>
            <div className="credit__container__formGroup">
              <label htmlFor="">
                <BsPhone />
              </label>
              <input
                type="text"
                name="estado"
                placeholder="Fundada en: (Estado)"
                ref={register({ required: true })}
              />
            </div>
            <div className="credit__container__formGroup">
              <label htmlFor="">
                <BsPhone />
              </label>
              <input
                type="text"
                name="fecha-fundacion"
                placeholder="Fecha de fundación"
                ref={register({ required: true })}
              />
            </div>
            <div className="credit__container__formGroup">
              <label htmlFor="">
                <BsPhone />
              </label>
              <input
                type="text"
                name="notario"
                placeholder="Notario"
                ref={register({ required: true })}
              />
            </div>
            <div className="credit__container__formGroup">
              <label htmlFor="">
                <BsPhone />
              </label>
              <input
                type="text"
                name="notaria"
                placeholder="Notaría"
                ref={register({ required: true })}
              />
            </div>
            <div className="credit__container__formGroup">
              <label htmlFor="">
                <AiOutlineMail />
              </label>
              <input
                type="text"
                name="numero-escritura"
                placeholder="Numero de escrituta"
                ref={register({ required: true })}
              />
            </div>
            <div className="credit__container__formGroup">
              <label htmlFor="">
                <AiOutlineMail />
              </label>
              <input
                type="text"
                name="folio"
                placeholder="Folio"
                ref={register({ required: true })}
              />
            </div>
            <div className="credit__container__formGroup">
              <label htmlFor="">
                <AiOutlineMail />
              </label>
              <input
                type="text"
                name="libro"
                placeholder="Libro"
                ref={register({ required: true })}
              />
            </div>
            <div className="credit__container__formGroup">
              <label htmlFor="">
                <AiOutlineMail />
              </label>
              <input
                type="text"
                name="volumen"
                placeholder="Volumen"
                ref={register({ required: true })}
              />
            </div>
            <div className="credit__container__formGroup">
              <label htmlFor="">
                <AiOutlineMail />
              </label>
              <input
                type="text"
                name="fojas"
                placeholder="Fojas"
                ref={register({ required: true })}
              />
            </div>
            <div className="credit__container__formGroup">
              <label htmlFor="">
                <AiOutlineMail />
              </label>
              <input
                type="text"
                name="no"
                placeholder="No"
                ref={register({ required: true })}
              />
            </div>
            <div className="credit__container__formGroup">
              <label htmlFor="">
                <AiOutlineMail />
              </label>
              <input
                type="text"
                name="partida"
                placeholder="Partida"
                ref={register({ required: true })}
              />
            </div>
            <Text style={{ gridColumn: '1/5' }}>Accionistas</Text>
            {accionistas.map((x, index) => (
              <>
                <div
                  className="credit__container__formGroup"
                  style={{ gridColumn: '1/2' }}
                >
                  <label htmlFor="">
                    <AiOutlineMail />
                  </label>
                  <input
                    type="text"
                    name="accionista-nombre"
                    placeholder="Nombre Completo"
                    ref={register({ required: true })}
                  />
                </div>
                <div className="credit__container__formGroup">
                  <label htmlFor="">
                    <AiOutlineMail />
                  </label>
                  <input
                    type="text"
                    name="no-acciones"
                    placeholder="No. Acciones"
                    ref={register({ required: true })}
                  />
                </div>
                <div className="credit__container__formGroup">
                  <label htmlFor="">
                    <AiOutlineMail />
                  </label>

                  <input
                    type="text"
                    name="valor-accion"
                    placeholder="Valor por acción"
                    ref={register({ required: true })}
                  />
                </div>
                <div>
                  <Button
                    onClick={() =>
                      setAccionistas(
                        accionistas.filter((i, ind) => ind !== index)
                      )
                    }
                  >
                    <AiOutlineDelete />
                  </Button>
                  <Button onClick={() => setAccionistas([...accionistas, {}])}>
                    <GrFormAdd />
                  </Button>
                </div>
              </>
            ))}
            <Text style={{ gridColumn: '1/5' }}>
              PODER NOTARIAL PARA PODER SUSCRIBIR DOCUMENTOS DE CREDITO
            </Text>
            <div className="credit__container__formGroup">
              <label htmlFor="">
                <AiOutlineMail />
              </label>

              <input
                type="text"
                name="poder-nombre"
                placeholder="Nombre"
                ref={register({ required: true })}
              />
            </div>
            <div className="credit__container__formGroup">
              <label htmlFor="">
                <AiOutlineMail />
              </label>

              <input
                type="text"
                name="poder-puesto"
                placeholder="Puesto"
                ref={register({ required: true })}
              />
            </div>
            <Text style={{ gridColumn: '1/5' }}>
              CONSEJO DE ADMINISTRACION Y/O DIRECTIVOS
            </Text>
            <div className="credit__container__formGroup">
              <label htmlFor="">
                <AiOutlineMail />
              </label>

              <input
                type="text"
                name="consejo-nombre"
                placeholder="Nombre"
                ref={register({ required: true })}
              />
            </div>
            <div className="credit__container__formGroup">
              <label htmlFor="">
                <AiOutlineMail />
              </label>

              <input
                type="text"
                name="consejo-puesto"
                placeholder="Puesto"
                ref={register({ required: true })}
              />
            </div>
            <Text style={{ gridColumn: '1/2' }}>UBICACIÓN</Text>
            <Text style={{ gridColumn: '1/3' }}>
              La direccion operativa actual corresponde a{' '}
            </Text>
            <div
              className="jobContainer__formGroup"
              style={{ gridColumn: '3/5' }}
            >
              <label htmlFor="">
                <AiOutlineMail />
              </label>
              <select
                name="ubicacion-operativa"
                ref={register({ required: true })}
              >
                <option value="">Seleccionar</option>
                <option value="0">Oficina</option>
                <option value="1">Planta</option>
                <option value="2">Oficinas de venta</option>
                <option value="3">Almacen</option>
              </select>
            </div>
            <Text style={{ gridColumn: '1/3' }}>Las intalaciones son</Text>
            <div
              className="jobContainer__formGroup"
              style={{ gridColumn: '3/5' }}
            >
              <label htmlFor="">
                <AiOutlineMail />
              </label>
              <select
                name="ubicacion-instalaciones"
                ref={register({ required: true })}
              >
                <option value="">Seleccionar</option>
                <option value="0">Propias</option>
                <option value="1">Rentadas</option>
              </select>
            </div>
            <div className="credit__container__formGroup">
              <label htmlFor="">
                <AiOutlineMail />
              </label>

              <input
                type="text"
                name="ubicacion-alquiler"
                placeholder="Alquiler mensual"
                ref={register({ required: true })}
              />
            </div>
            <div className="credit__container__formGroup">
              <label htmlFor="">
                <AiOutlineMail />
              </label>

              <input
                type="text"
                name="ubicacion-propiedad"
                placeholder="Propiedad de"
                ref={register({ required: true })}
              />
            </div>
            <div className="credit__container__formGroup">
              <label htmlFor="">
                <AiOutlineMail />
              </label>

              <input
                type="text"
                name="ubicacion-superficie"
                placeholder="Superficie de terreno M2"
                ref={register({ required: true })}
              />
            </div>
            <div className="credit__container__formGroup">
              <label htmlFor="">
                <AiOutlineMail />
              </label>

              <input
                type="text"
                name="ubicacion-local"
                placeholder="Local de (m2 de construcciñon)"
                ref={register({ required: true })}
              />
            </div>
            <div className="credit__container__formGroup">
              <label htmlFor="">
                <AiOutlineMail />
              </label>

              <input
                type="text"
                name="ubicacion-vencimiento"
                placeholder="Vencimiento"
                ref={register({ required: true })}
              />
            </div>
            <Text style={{ gridColumn: '1/5' }}>SUCURSALES</Text>
            {/* // ADD */}
            <div className="credit__container__formGroup">
              <label htmlFor="">
                <AiOutlineMail />
              </label>

              <input
                type="text"
                name="sucursales-domicilio"
                placeholder="Domicilio"
                ref={register({ required: true })}
              />
            </div>
            <div className="credit__container__formGroup">
              <label htmlFor="">
                <AiOutlineMail />
              </label>

              <input
                type="text"
                name="sucursales-telefono"
                placeholder="Teléfono"
                ref={register({ required: true })}
              />
            </div>
            <div className="credit__container__formGroup">
              <label htmlFor="">
                <AiOutlineMail />
              </label>

              <input
                type="text"
                name="sucursales-ciudad"
                placeholder="Ciudad"
                ref={register({ required: true })}
              />
            </div>
            <div className="credit__container__formGroup">
              <label htmlFor="">
                <AiOutlineMail />
              </label>

              <input
                type="text"
                name="sucursales-estado"
                placeholder="Estado"
                ref={register({ required: true })}
              />
            </div>
            <div className="credit__container__formGroup">
              <label htmlFor="">
                <AiOutlineMail />
              </label>

              <input
                type="text"
                name="sucursales-tipo"
                placeholder="Tipo de Sucursal"
                ref={register({ required: true })}
              />
            </div>
            <div className="credit__container__formGroup">
              <label htmlFor="">
                <AiOutlineMail />
              </label>

              <input
                type="text"
                name="sucursales-administrador"
                placeholder="Administrador Responsable"
                ref={register({ required: true })}
              />
            </div>
            <div className="credit__container__formGroup">
              <label htmlFor="">
                <AiOutlineMail />
              </label>

              <input
                type="text"
                name="sucursales-numero"
                placeholder="Número de empleados"
                ref={register({ required: true })}
              />
            </div>
            <Text style={{ gridColumn: '1/5' }}>OPERACIONES</Text>
            <div className="credit__container__formGroup">
              <textarea
                type="text"
                name="operaciones-detalle"
                placeholder="Explique detalladamente las actividades que realiza su empresa, siendo lo más especifico posible"
                ref={register({ required: true })}
              ></textarea>
            </div>
            <div className="credit__container__formGroup">
              <label htmlFor="">
                <AiOutlineMail />
              </label>

              <input
                type="text"
                name="operaciones-horas"
                placeholder="Horas que labora"
                ref={register({ required: true })}
              />
            </div>
            <div className="credit__container__formGroup">
              <label htmlFor="">
                <AiOutlineMail />
              </label>

              <input
                type="text"
                name="operaciones-turnos"
                placeholder="Turnos"
                ref={register({ required: true })}
              />
            </div>

            <Text style={{ gridColumn: '1/5' }}>PRINCIPALES CLIENTES</Text>
            {/* //ADD */}
            <div className="credit__container__formGroup">
              <label htmlFor="">
                <AiOutlineMail />
              </label>

              <input
                type="text"
                name="clientes-razon"
                placeholder="Razon Social Completa"
                ref={register({ required: true })}
              />
            </div>
            <Text style={{ gridColumn: '1/5' }}>REFERENCIAS COMERCIALES</Text>
            {/* //ADD */}
            <div className="credit__container__formGroup">
              <label htmlFor="">
                <AiOutlineMail />
              </label>

              <input
                type="text"
                name="referencias-razon"
                placeholder="Nombre razón social"
                ref={register({ required: true })}
              />
            </div>
            <div className="credit__container__formGroup">
              <label htmlFor="">
                <AiOutlineMail />
              </label>

              <input
                type="text"
                name="referencias-nombre"
                placeholder="Nombre contacto:"
                ref={register({ required: true })}
              />
            </div>
            <div className="credit__container__formGroup">
              <label htmlFor="">
                <AiOutlineMail />
              </label>

              <input
                type="text"
                name="referencias-puesto"
                placeholder="Puesto"
                ref={register({ required: true })}
              />
            </div>
            <div className="credit__container__formGroup">
              <label htmlFor="">
                <AiOutlineMail />
              </label>

              <input
                type="text"
                name="referencias-telefono"
                placeholder="Teléfono:"
                ref={register({ required: true })}
              />
            </div>
            <div className="credit__container__formGroup">
              <label htmlFor="">
                <AiOutlineMail />
              </label>

              <input
                type="text"
                name="referencias-email"
                placeholder="Email:"
                ref={register({ required: true })}
              />
            </div>
            <Text style={{ gridColumn: '1/5' }}>
              PERSONAL A CARGO DE LA COMUNCACION
            </Text>
            <Text>Director / Gerente General</Text>
            <div className="credit__container__formGroup">
              <label htmlFor="">
                <AiOutlineMail />
              </label>

              <input
                type="text"
                name="comunicacion-general-nombre"
                placeholder="Nombre:"
                ref={register({ required: true })}
              />
            </div>
            <div className="credit__container__formGroup">
              <label htmlFor="">
                <AiOutlineMail />
              </label>

              <input
                type="text"
                name="comunicacion-general-telefono"
                placeholder="Teléfono:"
                ref={register({ required: true })}
              />
            </div>
            <div className="credit__container__formGroup">
              <label htmlFor="">
                <AiOutlineMail />
              </label>

              <input
                type="text"
                name="comunicacion-general-email"
                placeholder="Email:"
                ref={register({ required: true })}
              />
            </div>
            <Text>Director / Gerente de ventas</Text>
            <div className="credit__container__formGroup">
              <label htmlFor="">
                <AiOutlineMail />
              </label>

              <input
                type="text"
                name="comunicacion-ventas-nombre"
                placeholder="Nombre:"
                ref={register({ required: true })}
              />
            </div>
            <div className="credit__container__formGroup">
              <label htmlFor="">
                <AiOutlineMail />
              </label>

              <input
                type="text"
                name="comunicacion-ventas-telefono"
                placeholder="Teléfono:"
                ref={register({ required: true })}
              />
            </div>
            <div className="credit__container__formGroup">
              <label htmlFor="">
                <AiOutlineMail />
              </label>

              <input
                type="text"
                name="comunicacion-ventas-email"
                placeholder="Email:"
                ref={register({ required: true })}
              />
            </div>
            <Text>Director / Gerente de compras</Text>
            <div className="credit__container__formGroup">
              <label htmlFor="">
                <AiOutlineMail />
              </label>

              <input
                type="text"
                name="comunicacion-compras-nombre"
                placeholder="Nombre:"
                ref={register({ required: true })}
              />
            </div>
            <div className="credit__container__formGroup">
              <label htmlFor="">
                <AiOutlineMail />
              </label>

              <input
                type="text"
                name="comunicacion-compras-telefono"
                placeholder="Teléfono:"
                ref={register({ required: true })}
              />
            </div>
            <div className="credit__container__formGroup">
              <label htmlFor="">
                <AiOutlineMail />
              </label>

              <input
                type="text"
                name="comunicacion-compras-email"
                placeholder="Email:"
                ref={register({ required: true })}
              />
            </div>
            <Text>Gerente Cuentas por Pagar</Text>
            <div className="credit__container__formGroup">
              <label htmlFor="">
                <AiOutlineMail />
              </label>

              <input
                type="text"
                name="comunicacion-cuentas-nombre"
                placeholder="Nombre:"
                ref={register({ required: true })}
              />
            </div>
            <div className="credit__container__formGroup">
              <label htmlFor="">
                <AiOutlineMail />
              </label>

              <input
                type="text"
                name="comunicacion-cuentas-telefono"
                placeholder="Teléfono:"
                ref={register({ required: true })}
              />
            </div>
            <div className="credit__container__formGroup">
              <label htmlFor="">
                <AiOutlineMail />
              </label>

              <input
                type="text"
                name="comunicacion-cuentas-email"
                placeholder="Email:"
                ref={register({ required: true })}
              />
            </div>
            <Text style={{ gridColumn: '1/5' }}>
              PERSONAL ENCARGADO DE RECIBIR MATERIAL
            </Text>
            {/* //ADD */}
            <div className="credit__container__formGroup">
              <label htmlFor="">
                <AiOutlineMail />
              </label>

              <input
                type="text"
                name="material-nombre"
                placeholder="Nombre completo:"
                ref={register({ required: true })}
              />
            </div>
            <div className="credit__container__formGroup">
              <label htmlFor="">
                <AiOutlineMail />
              </label>

              <input
                type="text"
                name="material-puesto"
                placeholder="Puesto:"
                ref={register({ required: true })}
              />
            </div>
            <div className="credit__container__formGroup">
              <label htmlFor="">
                <AiOutlineMail />
              </label>

              <input
                type="text"
                name="material-telefono"
                placeholder="Teléfono:"
                ref={register({ required: true })}
              />
            </div>
            <Text style={{ gridColumn: '1/5' }}>
              DOMICILIO DE ENTREGA DE MATERIAL
            </Text>
            {/* //ADD */}
            <div className="credit__container__formGroup">
              <label htmlFor="">
                <AiOutlineMail />
              </label>

              <input
                type="text"
                name="ubicaciones-1"
                placeholder="Ubicación 1 (Calle, número int y ext, codigo postal, colonia, estado, ciudad)"
                ref={register({ required: true })}
              />
            </div>
            <div className="credit__container__formGroup">
              <label htmlFor="">
                <AiOutlineMail />
              </label>

              <input
                type="text"
                name="ubicaciones-1"
                placeholder="Ubicación 1 (Calle, número int y ext, codigo postal, colonia, estado, ciudad)"
                ref={register({ required: true })}
              />
            </div>
            <div className="credit__container__formGroup">
              <label htmlFor="">
                <AiOutlineMail />
              </label>

              <input
                type="text"
                name="ubicaciones-1"
                placeholder="Ubicación 1 (Calle, número int y ext, codigo postal, colonia, estado, ciudad)"
                ref={register({ required: true })}
              />
            </div>
            <div className="credit__container__formGroup">
              <label htmlFor="">
                <AiOutlineMail />
              </label>

              <input
                type="text"
                name="ubicaciones-1"
                placeholder="Ubicación 1 (Calle, número int y ext, codigo postal, colonia, estado, ciudad)"
                ref={register({ required: true })}
              />
            </div>
            <div className="credit__container__formGroup">
              <label htmlFor="">
                <AiOutlineMail />
              </label>

              <input
                type="text"
                name="ubicaciones-1"
                placeholder="Ubicación 1 (Calle, número int y ext, codigo postal, colonia, estado, ciudad)"
                ref={register({ required: true })}
              />
            </div>
            <div className="credit__container__formGroup">
              <label htmlFor="">
                <AiOutlineMail />
              </label>

              <input
                type="text"
                name="ubicaciones-1"
                placeholder="Ubicación 1 (Calle, número int y ext, codigo postal, colonia, estado, ciudad)"
                ref={register({ required: true })}
              />
            </div>
            <div className="credit__container__formGroup">
              <label htmlFor="">
                <AiOutlineMail />
              </label>

              <input
                type="text"
                name="ubicaciones-1"
                placeholder="Ubicación 1 (Calle, número int y ext, codigo postal, colonia, estado, ciudad)"
                ref={register({ required: true })}
              />
            </div>
            <Text style={{ gridColumn: '1/5' }}>FORMAS DE PAGO</Text>
            <div className="credit__container__formGroup">
              <label htmlFor="">
                <AiOutlineMail />
              </label>

              <input
                type="text"
                name="pago-nombre"
                placeholder="Nombre del banco"
                ref={register({ required: true })}
              />
            </div>
            <div className="credit__container__formGroup">
              <label htmlFor="">
                <AiOutlineMail />
              </label>

              <input
                type="text"
                name="pago-cuenta"
                placeholder="No. De cuenta (18 digitos)"
                ref={register({ required: true })}
              />
            </div>
            <div className="credit__container__formGroup">
              <label htmlFor="">
                <AiOutlineMail />
              </label>

              <input
                type="text"
                name="pago-moneda"
                placeholder="Moneda"
                ref={register({ required: true })}
              />
              {/* Select MXN USD EUR */}
            </div>
            <div className="credit__container__formGroup">
              <label htmlFor="">
                <AiOutlineMail />
              </label>

              <input
                type="text"
                name="pago-revision"
                placeholder="Dias y horarios de revision"
                ref={register({ required: true })}
              />
            </div>
            <div className="credit__container__formGroup">
              <label htmlFor="">
                <AiOutlineMail />
              </label>

              <input
                type="text"
                name="pago-ubicacion"
                placeholder="Ubicación de revisión"
                ref={register({ required: true })}
              />
            </div>
            <div className="credit__container__formGroup">
              <label htmlFor="">
                <AiOutlineMail />
              </label>

              <input
                type="text"
                name="pago-pago"
                placeholder="Dias y horarios de pago"
                ref={register({ required: true })}
              />
            </div>
            <Text style={{ gridColumn: '1/5' }}>
              FORMAS DE CONFIRMAR PEDIDO
            </Text>
            <Text>Encargado de emitir ordenes de compra</Text>
            <div className="credit__container__formGroup">
              <label htmlFor="">
                <AiOutlineMail />
              </label>

              <input
                type="text"
                name="pedido-nombre"
                placeholder="Nombre"
                ref={register({ required: true })}
              />
            </div>
            <div className="credit__container__formGroup">
              <label htmlFor="">
                <AiOutlineMail />
              </label>

              <input
                type="text"
                name="pedido-telefono"
                placeholder="Telefono a 10 digitos"
                ref={register({ required: true })}
              />
            </div>
            <div className="credit__container__formGroup">
              <label htmlFor="">
                <AiOutlineMail />
              </label>

              <input
                type="text"
                name="pedido-email"
                placeholder="Email"
                ref={register({ required: true })}
              />
            </div>
            <Text>Indique la forma de confirmar pedido</Text>
            <div className="jobContainer__formGroup">
              <label htmlFor="">
                <AiOutlineMail />
              </label>
              <select name="pedido-forma" ref={register({ required: true })}>
                <option value="">Seleccionar</option>
                <option value="0">Orden de compra</option>
                <option value="1">Correo electronico</option>
                <option value="2">Otro</option>
              </select>
              <input
                type="text"
                name="pedido-forma-otro"
                placeholder="Especificar"
                ref={register({ required: true })}
              />
            </div>
            <Text style={{ gridColumn: '1/5' }}>Condiciones de credito solicitado</Text>
            <div className="credit__container__formGroup">
              <label htmlFor="">
                <AiOutlineMail />
              </label>

              <input
                type="text"
                name="pedido-dias"
                placeholder="Dias de credito"
                ref={register({ required: true })}
              />
            </div>
            <div className="credit__container__formGroup">
              <label htmlFor="">
                <AiOutlineMail />
              </label>

              <input
                type="text"
                name="pedido-credito"
                placeholder="Monto de credito"
                ref={register({ required: true })}
              />
            </div>
            <div className="credit__container__formGroup">
              <label htmlFor="">
                <AiOutlineMail />
              </label>

              <input
                type="text"
                name="pedido-moneda"
                placeholder="Moneda"
                ref={register({ required: true })}
              />
            </div>
            {/* BOTTON */}
            <div className="credit__container__formGroup">
              <Button type="submit">Generar PDF</Button>
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
