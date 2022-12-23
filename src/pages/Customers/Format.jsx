import React from 'react'
import moment from 'moment'
import logo from '../../assets/static/logo.svg'
import './styles.scss'
import { forwardRef } from 'react'

var locale = window.navigator.userLanguage || window.navigator.language

moment.locale('es')

const Format = forwardRef((props, ref) => {
  const { info } = props
  console.log(info, 'info')
  return (
    <div ref={ref} style={{ margin: '50px 70px', fontSize: '12px' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <img src={logo} style={{ height: '50px' }} alt="logo" />
        Puebla, Pue a {moment().format('DD/MM/YYYY')}
      </div>
      <div>
        <p style={{ marginTop: '50px' }}>Estimado cliente:</p>
        <p>
          Primero que nada, Marathon Eléctrica de Puebla, S. A. de C.V. agradece
          su preferencia, y le pide que nos visite nuevamente.
        </p>
        <p>
          Es importante mencionarle que debido a los cambios implementados por
          el Servicio de Administración Tributaria (SAT), en materia de
          comprobantes fiscales digitales por internet (CFDI), en la cual
          pasamos de versión 3.3 a la versión 4.0, solicitamos de su apoyo para
          facilitarnos la siguiente información:
        </p>
        <p>
          Nombre o razón social:{' '}
          <span style={{ textDecoration: 'underline' }}>
            &nbsp;{info.name}&nbsp;
          </span>
        </p>
        <p>
          RFC:{' '}
          <span style={{ textDecoration: 'underline' }}>
            &nbsp;{info.rfc}&nbsp;
          </span>
        </p>
        <p>
          Domicilio Fiscal:{' '}
          <span style={{ textDecoration: 'underline' }}>
            &nbsp;{info.address}&nbsp;
          </span>
        </p>
        <p>
          CP:{' '}
          <span style={{ textDecoration: 'underline' }}>
            &nbsp;{info.cp}&nbsp;
          </span>
        </p>
        <p>
          Correo electrónico vigente para recibir CFDI:{' '}
          <span style={{ textDecoration: 'underline' }}>
            &nbsp;{info.email}&nbsp;
          </span>
        </p>
        <p>
          Teléfono de contacto:{' '}
          <span style={{ textDecoration: 'underline' }}>
            &nbsp;{info.phone}&nbsp;
          </span>
        </p>
        <p>
          Seleccione su <b>FORMA</b> y <b>METODO DE PAGO</b>
        </p>
      </div>
      <div
        style={{
          display: 'flex',
          margin: '50px 0',
        }}
      >
        <table
          style={{
            borderCollapse: 'collapse',
            border: '1px solid #000',
            fontSize: '12px',
          }}
        >
          <thead>
            <tr style={{ border: '1px solid #000' }}>
              <th style={{ padding: '5px 5px', border: '1px solid #000' }}></th>
              <th style={{ padding: '5px 5px', border: '1px solid #000' }}>
                Clave
              </th>
              <th style={{ padding: '5px 5px', border: '1px solid #000' }}>
                Descripción
              </th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ border: '1px solid #000' }}>
              <td style={{ padding: '5px 15px', border: '1px solid #000' }}>
                {info.f1 === '0' ? 'X' : ''}
              </td>
              <td style={{ padding: '5px 15px', border: '1px solid #000' }}>
                01
              </td>
              <td style={{ padding: '5px 15px', border: '1px solid #000' }}>
                Efectivo
              </td>
            </tr>
            <tr style={{ border: '1px solid #000' }}>
              <td style={{ padding: '5px 15px', border: '1px solid #000' }}>
                {' '}
                {info.f1 === '3' ? 'X' : ''}
              </td>
              <td style={{ padding: '5px 15px', border: '1px solid #000' }}>
                03
              </td>
              <td style={{ padding: '5px 15px', border: '1px solid #000' }}>
                Transferencia electrónica <br /> de fondos
              </td>
            </tr>
            <tr style={{ border: '1px solid #000' }}>
              <td style={{ padding: '5px 15px', border: '1px solid #000' }}>
                {' '}
                {info.f1 === '4' ? 'X' : ''}
              </td>
              <td style={{ padding: '5px 15px', border: '1px solid #000' }}>
                04
              </td>
              <td style={{ padding: '5px 15px', border: '1px solid #000' }}>
                Tarjeta de crédito
              </td>
            </tr>
            <tr style={{ border: '1px solid #000' }}>
              <td style={{ padding: '5px 15px', border: '1px solid #000' }}>
                {info.f1 === '28' ? 'X' : ''}
              </td>
              <td style={{ padding: '5px 15px', border: '1px solid #000' }}>
                28
              </td>
              <td style={{ padding: '5px 15px', border: '1px solid #000' }}>
                Tarjeta de débito
              </td>
            </tr>
          </tbody>
        </table>
        <table
          style={{
            borderCollapse: 'collapse',
            border: '1px solid #000',
            fontSize: '12px',
            marginLeft: '50px',
          }}
        >
          <thead>
            <tr style={{ border: '1px solid #000' }}>
              <th style={{ padding: '5px 5px', border: '1px solid #000' }}></th>
              <th style={{ padding: '5px 5px', border: '1px solid #000' }}>
                Clave
              </th>
              <th style={{ padding: '5px 5px', border: '1px solid #000' }}>
                Descripción
              </th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ border: '1px solid #000' }}>
              <td style={{ padding: '5px 15px', border: '1px solid #000' }}>
                {info.f2 === 'PUE' ? 'X' : ''}
              </td>
              <td style={{ padding: '5px', border: '1px solid #000' }}>PUE</td>
              <td style={{ padding: '5px', border: '1px solid #000' }}>
                PAGO EN UNA SOLA EXHIBICION
              </td>
            </tr>
            <tr style={{ border: '1px solid #000' }}>
              <td style={{ padding: '5px', border: '1px solid #000' }}>
                {info.f2 === 'PPD' ? 'X' : ''}
              </td>
              <td style={{ padding: '5px', border: '1px solid #000' }}>PPD</td>
              <td style={{ padding: '5px', border: '1px solid #000' }}>
                PAGO EN PARCIALIDADES O DIFERIDO
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p style={{ marginTop: '50px' }}>
        Seleccione su <b>USO DE CFDI</b>
      </p>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '50px',
        }}
      >
        <table
          style={{
            borderCollapse: 'collapse',
            border: '1px solid #000',
            fontSize: '12px',
          }}
        >
          <thead>
            <tr style={{ border: '1px solid #000' }}>
              <th style={{ padding: '5px 5px', border: '1px solid #000' }}></th>
              <th style={{ padding: '5px 5px', border: '1px solid #000' }}>
                Clave
              </th>
              <th style={{ padding: '5px 5px', border: '1px solid #000' }}>
                Descripción
              </th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ border: '1px solid #000' }}>
              <td style={{ padding: '5px 15px', border: '1px solid #000' }}>
                {info.f3 === 'G01' ? 'X' : ''}
              </td>
              <td style={{ padding: '5px 15px', border: '1px solid #000' }}>
                G01
              </td>
              <td style={{ padding: '5px 15px', border: '1px solid #000' }}>
                Adquisicion de Mercancias
              </td>
            </tr>
            <tr style={{ border: '1px solid #000' }}>
              <td style={{ padding: '5px 15px', border: '1px solid #000' }}>
                {' '}
                {info.f3 === 'G03' ? 'X' : ''}
              </td>
              <td style={{ padding: '5px 15px', border: '1px solid #000' }}>
                G03
              </td>
              <td style={{ padding: '5px 15px', border: '1px solid #000' }}>
                Gastos en general
              </td>
            </tr>
            {info.f3 === '0' ? (
              <>
                <tr>
                  <th
                    colSpan="3"
                    style={{ padding: '5px 5px', border: '1px solid #000' }}
                  >
                    Otra
                  </th>
                </tr>
                <tr>
                  <td
                    colSpan="3"
                    style={{ padding: '5px 15px', border: '1px solid #000' }}
                  >
                    {info.f3 === '0' ? info.f4 : ' '}
                  </td>
                </tr>
              </>
            ) : null}
          </tbody>
        </table>
      </div>
      <p>
        Confirmo que los datos aquí proporcionados son correctos, estoy
        consciente de que{' '}
        <span style={{ textDecoration: 'underline', fontWeight: 'bold' }}>
          no solicitare refacturación
        </span>{' '}
        alguna en caso de error a la emisión del CFDI.
      </p>
      <div>
        <p style={{ textAlign: 'center' }}>Nombre, Fecha y Firma.</p>
        <hr
          style={{
            width: '200px',
            height: '1px',
            backgroundColor: '#000',
            marginTop: '50px',
          }}
        />
      </div>
      <div
        style={{
          display: 'flex',
          width: '100vw',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div>
          <p>
            Av. 4 Poniente 1712, Int. A Col. Centro <br />
            Puebla C.P. 72000, Puebla, México
          </p>
        </div>
        <div style={{ marginLeft: '25px' }}>
          <p>+52 (222) 690 67 00</p>
        </div>
      </div>
      <div style={{ marginTop: '50px' }}>
        <div>www.marathongroup.mx</div>
      </div>
      {/* <div style={{ display: 'grid', gridTemplateColumns: '1fr 10px 3fr' }}>
        <div style={{ height: '25px', backgroundColor: '#313431' }}></div>
        <div style={{ height: '25px', backgroundColor: '#FFF' }}></div>
        <div style={{ height: '25px', backgroundColor: '#DD231B' }}></div>
      </div> */}
    </div>
  )
})

export default Format
