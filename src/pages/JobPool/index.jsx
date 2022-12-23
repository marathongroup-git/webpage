import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useForm } from 'react-hook-form'
import { getAll } from '../../actions'
import { create } from './actions'
import { CgToolbox } from 'react-icons/cg'
import { AiOutlineMail, AiOutlineUser, AiOutlineFilePdf } from 'react-icons/ai'
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

const JobPool = props => {
  const { register, handleSubmit } = useForm()
  const { jobs } = props

  const onSubmit = data => {
    props.create(data)
    console.log(data)
  }

  useEffect(() => {
    props.getAll('jobs', 'GET_JOBS')
    // eslint-disable-next-line
  }, [])

  console.log(jobs)
  return (
    <div className="job" style={style}>
      <div className="jobContainer">
        <div className="jobContainer__right --hack">
          <Title className="title --mid">Bolsa de trabajo</Title>
          <Text className="text">
            Conoce las oportunidades laborales que tenemos en Marathon Group.
          </Text>
          <a
            target="blank"
            href="https://www.linkedin.com/jobs/search/?f_C=10814090&geoId=92000000"
          >
            <Button>Vacantes vigentes</Button>
          </a>
          <Text className="text">ó</Text>
          <Text className="text">
            Comparte tus datos y te contactaremos cuando una vacante coincida
            con tu perfil.
          </Text>
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
                <CgToolbox />
              </label>
              <select name="job" ref={register({ required: true })}>
                {jobs && jobs.length > 0 ? (
                  jobs.map(job => (
                    <option key={job._id} value={job.name}>
                      {job.name}
                    </option>
                  ))
                ) : (
                  <option disabled value="0">
                    No contamos con vacantes por el momento
                  </option>
                )}
              </select>
            </div>
            <div className="jobContainer__formGroup">
              <label htmlFor="">
                <AiOutlineFilePdf />
              </label>
              <input
                type="file"
                name="cv"
                placeholder="Nombre Completo"
                ref={register({ required: true })}
              />
            </div>
            <div className="jobContainer__formGroup">
              {jobs && jobs.length > 0 ? (
                <Button type="submit">Enviar</Button>
              ) : (
                <Button type="submit" disabled>
                  Enviar
                </Button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    jobs: state.reducerJobs.jobs,
  }
}

const mapDispatchToProps = {
  getAll,
  create,
}

export default connect(mapStateToProps, mapDispatchToProps)(JobPool)
