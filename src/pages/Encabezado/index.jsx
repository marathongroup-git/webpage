import React from 'react'
import { connect } from 'react-redux'
import { useForm } from 'react-hook-form'
import { getAll } from '../../actions'
import { create } from '../../actions'

import bg from '../../assets/static/jobpool.jpg'

const style = {
  backgroundImage: `linear-gradient(
rgba(0, 0, 0, 0.9),
rgba(0, 0, 0, 0.9)
),url(${bg})`,
}

const Encabezado = props => {
  const { register, handleSubmit } = useForm()

  const onSubmit = data => {
    props.create('encabezado', 'CREATE_ENCABEZADO', data)
    document.getElementById('formJob').reset()
  }

  return (true
  )
}

const mapDispatchToProps = {
  getAll,
  create,
}

export default connect(null, mapDispatchToProps)(Encabezado)
