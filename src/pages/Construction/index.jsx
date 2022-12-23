import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import Title from '../../components/Title'
import iconConstruction from '../../assets/static/construction.svg'
import './styles.scss'

const Construction = () => {
  return (
    <div className="construction">
      <img src={iconConstruction} alt="constructionImage" />
      <Title>En Construcción</Title>
      <h2>Estamos trabajando en esta sección. Disculpe las molestias</h2>
      <Link to="/">
        <Button type="button">Regresar</Button>
      </Link>
    </div>
  )
}

export default Construction
