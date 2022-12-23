import React from 'react'
import './styles.scss'

import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import Title from '../../../components/Title'
import Text from '../../../components/Text'

import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'
import 'swiper/components/scrollbar/scrollbar.scss'

import img1 from '../../../assets/static/participacion1.jpg'
import img2 from '../../../assets/static/participacion2.jpg'
import img3 from '../../../assets/static/participacion3.jpg'
import img4 from '../../../assets/static/participacion4.jpg'
import img5 from '../../../assets/static/participacion5.jpg'
import img6 from '../../../assets/static/participacion6.jpg'
import img7 from '../../../assets/static/participacion7.jpg'
import img8 from '../../../assets/static/participacion8.jpg'
import img9 from '../../../assets/static/participacion9.jpg'
import img10 from '../../../assets/static/participacion10.jpg'

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay])

const Participation = () => {
  return (
    <div className="participation" id="participation">
      <Title className="title --center">Participación Industrial</Title>
      <Text className="text --center">
        Marathon ha tenido la oportunidad de colaborar en diferentes proyectos,
        los cuales han ayudado al crecimiento de
        <br />
        la empresa, ampliando su panorama y participación en el mercado
        Industrial.
      </Text>
      <Swiper
        className="participation__slider"
        spaceBetween={50}
        slidesPerView={window.screen.width <= 600 ? 1 : 4}
        slidesPerColumn={1}
        loop={true}
        autoplay={true}
      >
        <SwiperSlide className="participation__item">
          <div className="swiper__hack">
            <div
              className="backgroundImage"
              style={{
                backgroundImage: `url(${img1})`,
              }}
            >
              <p>Alimenticia</p>
            </div>
            <div
              className="backgroundImage"
              style={{
                backgroundImage: `url(${img2})`,
              }}
            >
              <p>Acerera</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="participation__item">
          <div className="swiper__hack">
            <div
              className="backgroundImage"
              style={{
                backgroundImage: `url(${img3})`,
              }}
            >
              <p>Automotriz</p>
            </div>
            <div
              className="backgroundImage"
              style={{
                backgroundImage: `url(${img4})`,
              }}
            >
              <p>Minería</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="participation__item">
          <div className="swiper__hack">
            <div
              className="backgroundImage"
              style={{
                backgroundImage: `url(${img5})`,
              }}
            >
              <p>Gas & oil</p>
            </div>
            <div
              className="backgroundImage"
              style={{
                backgroundImage: `url(${img6})`,
              }}
            >
              <p>Química</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="participation__item">
          <div className="swiper__hack">
            <div
              className="backgroundImage"
              style={{
                backgroundImage: `url(${img7})`,
              }}
            >
              <p>Textil</p>
            </div>
            <div
              className="backgroundImage"
              style={{
                backgroundImage: `url(${img8})`,
              }}
            >
              <p>Retail</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="participation__item">
          <div className="swiper__hack">
            <div
              className="backgroundImage"
              style={{
                backgroundImage: `url(${img9})`,
              }}
            >
              <p>TI</p>
            </div>
            <div
              className="backgroundImage"
              style={{
                backgroundImage: `url(${img10})`,
              }}
            >
              <p>Hospitales</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Participation
