import React, { useState } from 'react'
import { connect } from 'react-redux'
import { setUser } from '../../actions'
import logoFull from '../../assets/static/logo.svg'
import './Login.scss'
import Title from '../../components/Title'
import Button from '../../components/Button'

const Login = props => {
  const [user, setUser] = useState({})


  
  // se llama cuando se realiza un cambio en el campo de texto que contiene el nombre de usuario

  const handlerInput = event => {
    console.log("evento ..");
    console.log(event.target.value);

    setUser({
      ...user,
      [event.target.name]: event.target.value,
    })
  }

  const hanlderSubmit = event => {
    event.preventDefault()
    props.setUser(user, '/')
  }

  
  return (
    <div className="login">
      <div className="login__container">
        <div className="login__container__left">
          <img
            src={logoFull}
            alt=""
            onClick={() => {
              window.location.href = 'https://marathongroup.mx'
            }}
          />
        </div>
        <div className="login__container__right">
          <form onSubmit={hanlderSubmit}>
            <Title className="-small">Bienvenido</Title>
            <label htmlFor="user">
              <span>Usuario</span>
              <input type="text" name="user" onChange={handlerInput} />
            </label>
            <label htmlFor="password">
              <span>Password</span>
              <input type="password" name="password" onChange={handlerInput} />
            </label>
            <Button type="submit">
              Iniciar Sesión
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

const mapDispatchToProps = {
  setUser,
}

export default connect(null, mapDispatchToProps)(Login)
