import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import Title from '../../components/Title'
import iconError from '../../assets/static/404.svg'
import './styles.scss'

const NotFound = () => {
  return (
    <div className="notFound">
      <img src={iconError} alt="404" />
      <Title>Error 404</Title>
      <h2>Opps. The page you are looking for got lost.</h2>
      <Link to="/">
        <Button type="button">Regresar</Button>
      </Link>
    </div>
  )
}

export default NotFound
