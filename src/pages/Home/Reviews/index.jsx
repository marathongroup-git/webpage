import React from 'react'
import './styles.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FaUserCircle, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'

import Title from '../../../components/Title'
import Text from '../../../components/Text'

import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'
import 'swiper/components/scrollbar/scrollbar.scss'

import bgImage from '../../../assets/static/map-bg.png'

const Reviews = () => {
  return (
    <div className="reviews" style={{ backgroundImage: `url('${bgImage}')` }}>
      <div className="reviewsContainer">
        <Title className="title --center --white">Opiniones</Title>
        <Text className="text --center --white">
          En Marathon Group estamos seguros de que la creación de alianzas
          comerciales permite a nuestros clientes y usuarios posicionarse como
          los más competitivos en el mercado.
        </Text>
        <Swiper
          className="reviewsContainer__slider"
          spaceBetween={30}
          slidesPerView={window.screen.width <= 600 ? 1 : 3}
          slidesPerColumn={1}
          autoplay={{ delay: 5000 }}
          loop={true}
        >
          <SwiperSlide className="reviewsContainer__item">
            <div className="reviewsContainer__card">
              <p className="reviewsContainer__text">
                <FaQuoteLeft />
                <br />
                Excelente servicio y atención, los recomiendo ampliamente, los
                mejores en el mercado.
                <br />
                <FaQuoteRight />
              </p>
              <div className="reviewsContainer__iconBox">
                <FaUserCircle />
                <div className="reviewsContainer__name">
                  <h5>Antonio Flores</h5>
                  <p>Ingeniero ICT</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="reviewsContainer__item">
            <div className="reviewsContainer__card">
              <p className="reviewsContainer__text">
                <FaQuoteLeft />
                <br />
                Muy buen servicio siempre son muy confiables y los mejores
                precios sin dudarlo.
                <br />
                <FaQuoteRight />
              </p>
              <div className="reviewsContainer__iconBox">
                <FaUserCircle />
                <div className="reviewsContainer__name">
                  <h5>Omar Pérez</h5>
                  <p>Ingeniero Helukabel</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="reviewsContainer__item">
            <div className="reviewsContainer__card">
              <p className="reviewsContainer__text">
                <FaQuoteLeft />
                <br />
                Todo muy rápido y puntual. Muy buen especialista.
                <br />
                <FaQuoteRight />
              </p>
              <div className="reviewsContainer__iconBox">
                <FaUserCircle />
                <div className="reviewsContainer__name">
                  <h5>Juan Escobar</h5>
                  <p>Ingeniero CFE</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default Reviews
