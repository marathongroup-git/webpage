import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getAll } from '../../actions'
import { connect } from 'react-redux'
import { AiOutlineZoomIn } from 'react-icons/ai'
import Button from '../../components/Button'
import './styles.scss'

const Promotions = props => {
  const { promotions } = props
  useEffect(() => {
    props.getAll('promotions', 'GET_PROMOTIONS')
    // eslint-disable-next-line
  }, [])

  return (
    <div className="promotions">
      <div className="promotionsContainer">
        {promotions && promotions.length > 0 ? (
          promotions.map(promotion => {
            return (
              <div className="promotionsContainer__card" key={promotion._id}>
                <img
                  className="promotionsContainer__image"
                  src={`${process.env.REACT_APP_API}docs/promotions/${promotion.promotion}`}
                  alt=""
                />
                <div className="promotionsContainer__box">
                  {promotion.register === 'true' ? (
                    <Link to={`promotions/${promotion._id}`}>Registro</Link>
                  ) : (
                    <a
                      href={`${process.env.REACT_APP_API}docs/promotions/${promotion.promotion}`}
                      target="blank"
                    >
                      <AiOutlineZoomIn />
                    </a>
                  )}
                </div>
              </div>
            )
          })
        ) : (
          <div className="non__promotion">
            <h2>Regresa pronto, estamos actualizando nuestras promociones.</h2>
            <Link to="/">
              <Button>Regresar</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    promotions: state.reducerPromotions.promotions,
  }
}

const mapDispatchToProps = {
  getAll,
}

export default connect(mapStateToProps, mapDispatchToProps)(Promotions)
