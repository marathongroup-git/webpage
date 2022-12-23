import React from 'react'
import './styles.scss'
import { Swiper, SwiperSlide } from 'swiper/react'

import Title from '../../../components/Title'
import Text from '../../../components/Text'

import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'
import 'swiper/components/scrollbar/scrollbar.scss'

const Business = () => {
  const reqImgs = require.context('../../../assets/static/business', true, /\.png$/)

  const arrayImgs = reqImgs.keys()

  const svgs = arrayImgs.map(path => reqImgs(path))

  return (
    <div className="business" id="business">
      <div className="businessContainer">
        <Title className="title --center">Alianzas Comerciales</Title>
        <Text className="text --center">
          En Marathon Group estamos seguros de que la creación de alianzas comerciales permite a nuestros clientes y
          usuarios posicionarse como los más competitivos en el mercado, asegurando su operación día con día y
          soluciones inmediatas que se adapten a sus necesidades.
        </Text>
        <Swiper
          className="businessContainer__slider"
          spaceBetween={20}
          slidesPerView={window.screen.width <= 600 ? 1 : 4}
          slidesPerColumn={1}
          loop={true}
          autoplay={true}
        >
          {svgs.map((url, index) => (
            <SwiperSlide key={index} className="businessContainer__item">
              <img src={url} alt="Logo" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default Business
