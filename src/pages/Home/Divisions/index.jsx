import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './styles.scss'

import Title from '../../../components/Title'
import Text from '../../../components/Text'
import Button from '../../../components/Button'

import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'
import 'swiper/components/scrollbar/scrollbar.scss'

import img1 from '../../../assets/static/divisions1.png'
import img2 from '../../../assets/static/divisions2.png'
import img3 from '../../../assets/static/divisions3.png'
import img5 from '../../../assets/static/divisions5.png'
import img6 from '../../../assets/static/divisions6.png'
import img7 from '../../../assets/static/divisions7.png'
import img8 from '../../../assets/static/divisions8.png'
import img9 from '../../../assets/static/divisions9.png'
import img10 from '../../../assets/static/divisions10.png'

const Divisions = () => {
  const [trigger, setTrigger] = useState(false)

  const handlerTriger = send => {
    setTrigger(send)
  }

  return (
    <div className="divisions" id="divisions">
      <Title className="title --center">Nuestras Divisiones</Title>
      <Text className="text --center">
        Suministramos soluciones integrales de la más alta calidad en materiales
        eléctrico y
        <br />
        de ITC (Tecnologías de la Información y Comunicación).
      </Text>
      <div className="divisions__buttons">
        <Button
          className="button --primary"
          onClick={() => handlerTriger(false)}
        >
          Eléctrica
        </Button>
        <Button className="button --blue" onClick={() => handlerTriger(true)}>
          ICT Networks
        </Button>
      </div>
      {trigger ? (
        <Swiper
          className="divisions__slider"
          spaceBetween={50}
          slidesPerView={window.screen.width <= 600 ? 1 : 4}
          slidesPerColumn={1}
          navigation={true}
          loop={true}
        >
          <SwiperSlide className="divisions__item">
            <Link to="divisions/structured-cable">
              <img src={img1} alt="" />
              <h5>Cableado estructurado</h5>
            </Link>
          </SwiperSlide>
          <SwiperSlide className="divisions__item">
            <Link to="divisions/data-center">
              <img src={img2} alt="" />
              <h5>Data center</h5>
            </Link>
          </SwiperSlide>
          <SwiperSlide className="divisions__item">
            <Link to="divisions/racks-cabinets">
              <img src={img3} alt="" />
              <h5>Racks y gabinetes</h5>
            </Link>
          </SwiperSlide>

          <SwiperSlide className="divisions__item">
            <Link to="divisions/ethernet-industrial">
              <img src={img5} alt="" />
              <h5>Ethernet industrial</h5>
            </Link>
          </SwiperSlide>
        </Swiper>
      ) : (
        <Swiper
          className="divisions__slider"
          spaceBetween={50}
          slidesPerView={window.screen.width <= 600 ? 1 : 4}
          slidesPerColumn={1}
          navigation={true}
          loop={true}
        >
          <SwiperSlide className="divisions__item">
            <Link to="divisions/electrical-cabling">
              <img src={img6} alt="" />
              <h5>Cableado eléctrico</h5>
            </Link>
          </SwiperSlide>
          <SwiperSlide className="divisions__item">
            <Link to="divisions/automation-control">
              <img src={img7} alt="" />
              <h5>Automatización y control</h5>
            </Link>
          </SwiperSlide>
          <SwiperSlide className="divisions__item">
            <Link to="divisions/channelling">
              <img src={img8} alt="" />
              <h5>Canalización</h5>
            </Link>
          </SwiperSlide>
          <SwiperSlide className="divisions__item">
            <Link to="divisions/illumination">
              <img src={img9} alt="" />
              <h5>Iluminación</h5>
            </Link>
          </SwiperSlide>
          <SwiperSlide className="divisions__item">
            <Link to="divisions/tools">
              <img src={img10} alt="" />
              <h5>Herramientas y accesorios</h5>
            </Link>
          </SwiperSlide>
        </Swiper>
      )}
    </div>
  )
}

export default Divisions
