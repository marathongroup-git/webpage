import React, { useEffect, useState, useRef } from 'react'
import { connect } from 'react-redux'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'
import { getAll } from '../../actions'
import { create } from '../../actions'
import { AiOutlineMail, AiOutlineUser } from 'react-icons/ai'
import { CgWorkAlt } from 'react-icons/cg'
import { FaIndustry } from 'react-icons/fa'
import Title from '../../components/Title'
import Button from '../../components/Button'
import bg from '../../assets/static/jobpool.jpg'
import './styles.scss'
import moment from 'moment'
import LinearProgress from '@mui/material/LinearProgress'
const style = {
  backgroundImage: `linear-gradient(
rgba(0, 0, 0, 0.9),
rgba(0, 0, 0, 0.9)
),url(${bg})`,
}

moment.locale('es-mx')

console.log(moment().format('YYYY-MM-DD HH:mm:ss'))

const Contact = props => {
  const { register, handleSubmit } = useForm()
  const [num, setNum] = useState()

  const { id } = useParams()
  const { test } = props

  useEffect(() => {
    props.getAll(`tests/${id}`, 'GET_TEST')
    intervalRef.current = setInterval(decreaseNum, 1000)
    return () => clearInterval(intervalRef.current)
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    if (test && test.test !== undefined) {
      const start = moment()
      const end = moment(test.test.end)
      const diff = end.diff(start, 'seconds')
      console.log(moment(test.test.end).format('YYYY-MM-DD HH:mm:ss'))

      setNum(diff)
    }
    // eslint-disable-next-line
  }, [test])

  let intervalRef = useRef()

  const decreaseNum = () => {
    setNum(prev => prev - 1)
  }

  const onSubmit = data => {
    props.create(`tests/${id}`, 'CREATE_TEST', data).then(() => {
      props.history.push('/')
    })
  }

  const progress = ((num * 100) / 3600).toFixed(0)

  if (test && num > 0) {
    return (
      <div className="test" style={style}>
        <div className="testContainer">
          <div className="testContainer__right">
            <Title className="title --mid">{test.test?.name}</Title>
            Tiempo Restante
            <LinearProgress
              color="success"
              variant="determinate"
              value={progress}
            />
            <form
              className="testContainer__form"
              id="test"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="testContainer__formGroup">
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
              <div className="testContainer__formGroup">
                <label htmlFor="">
                  <FaIndustry />
                </label>
                <input
                  type="text"
                  name="company"
                  placeholder="Empresa"
                  ref={register({ required: true })}
                />
              </div>
              <div className="testContainer__formGroup">
                <label htmlFor="">
                  <CgWorkAlt />
                </label>
                <input
                  type="text"
                  name="job"
                  placeholder="Puesto"
                  ref={register({ required: true })}
                />
              </div>
              <div className="testContainer__formGroup">
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
              {test.sections?.map((section, index) => (
                <div key={index}>
                  <Title className="title --mid">{section.title}</Title>
                  {section.questions?.map((question, index) => (
                    <div key={index} className="test__question">
                      <label htmlFor="">
                        {question.question}
                        <div className="test__answerBox">
                          {question.answers.map((answer, index) => (
                            <div key={index} className="test__answer">
                              {answer.answer}
                              <input
                                type="radio"
                                name={question.id}
                                value={answer.id}
                                ref={register}
                              />
                            </div>
                          ))}
                        </div>
                      </label>
                    </div>
                  ))}
                </div>
              ))}
              <div className="testContainer__formGroup">
                <Button type="submit">Enviar</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  } else {
    return <h1>El Examen Ha Terminado</h1>
  }
}

const mapDispatchToProps = {
  getAll,
  create,
}

const mapStatetoProps = state => {
  return {
    test: state.reducerTests.test,
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(Contact)
