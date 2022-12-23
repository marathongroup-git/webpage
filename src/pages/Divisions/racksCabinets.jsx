import React from 'react'
import './styles.scss'
import { Swiper, SwiperSlide } from 'swiper/react'

import Title from '../../components/Title'
import Text from '../../components/Text'
import Button from '../../components/Button'

import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'
import 'swiper/components/scrollbar/scrollbar.scss'

import map from '../../assets/static/divisions/marathon-soluciones-racks-es-MX.png'
import banner from '../../assets/static/divisions/banner2.jpg'
import img1 from '../../assets/static/brands/datwyler-marathongroup.png'
import img3 from '../../assets/static/brands/leoni-marathongroup.png'
import img4 from '../../assets/static/brands/nvent-hoffman-marathongroup.png'

const divisions = () => {
  return (
    <div className="divisionsPage">
      <div
        className="divisionsPage__background"
        style={{
          backgroundImage: `linear-gradient(
          rgba(0, 0, 0, 0.5),
          rgba(0, 0, 0, 0.5)
        ), url(${banner})`,
        }}
      >
        <Title className="title --center --white">Racks y gabinetes</Title>
        <Text className="text --center --white">
          El equipamiento en estado activo o pasivo dentro de la operación de
          trabajo es sinónimo de una inversión. Éstos son necesarios que se
          encuentre protegidos en sus recintos. Por tal razon, complementamos
          nuestro portafolio con una variedad de productos donde incluimos estas
          soluciones con más de 12 mil artículos estándar, así como soluciones
          hechas a la medida.
        </Text>
      </div>
      <div className="divisionsPageContainer">
        <Title className="title --center">Aplicaciones</Title>
        <img
          src={map}
          className="divisionsPageContainer__image"
          alt="Cableado eléctrico"
        />
        <Swiper
          className="divisionsPageContainer__slider"
          spaceBetween={20}
          slidesPerView={window.screen.width <= 600 ? 1 : 3}
          slidesPerColumn={1}
          navigation={true}
          loop={true}
        >
          <SwiperSlide className="divisionsPageContainer__item">
            <img src={img1} alt="Logo" />
          </SwiperSlide>

          <SwiperSlide className="divisionsPageContainer__item">
            <img src={img3} alt="Logo" />
          </SwiperSlide>
          <SwiperSlide className="divisionsPageContainer__item">
            <img src={img4} alt="Logo" />
          </SwiperSlide>
        </Swiper>
        <div className="divisionsPageContainer__button">
          <a href="mailto: matriz@marathongroup.mx">
            <Button>Contactanos</Button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default divisions
