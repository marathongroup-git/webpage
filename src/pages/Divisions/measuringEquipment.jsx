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

import map from '../../assets/static/divisions/marathon-soluciones-medicion-es-MX.png'
import banner from '../../assets/static/divisions/banner2.jpg'
import img1 from '../../assets/static/brands/datwyler-marathongroup.png'
import img2 from '../../assets/static/brands/hirschmann-marathongroup.png'
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
        <Title className="title --center --white">Equipos de medición</Title>
        <Text className="text --center --white">
          Como en cualquier industria el tener un entorno en correcto
          funcionamiento no solo depende de una buena infraestructura, si no
          también el que esta sea inspeccionada por algún equipo, por ello el
          tener una amplia gama de equipos de medición es muy importante para
          poder testear, verificar y/o certificar estas instalaciones.
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
            <img src={img2} alt="Logo" />
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
