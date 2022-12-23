import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getAll } from '../../../actions'
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade } from 'swiper'
import './styles.scss'
import Button from '../../../components/Button'

import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'
import 'swiper/components/scrollbar/scrollbar.scss'
import 'swiper/components/effect-fade/effect-fade.scss'

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade])

const CarouselMain = props => {
  const { banners } = props

  useEffect(() => {
    props.getAll('banners', 'GET_BANNERS')
    // eslint-disable-next-line
  }, [])

  const animation = event => {
    const textContainer = event[0].childNodes[0].childNodes[0].childNodes[0]
    const newTextContainer = textContainer.cloneNode(true)
    textContainer.parentNode.replaceChild(newTextContainer, textContainer)

    const floatContainer = event[0].childNodes[0].childNodes[0].childNodes[1]
    const newfloatContainer = floatContainer.cloneNode(true)
    floatContainer.parentNode.replaceChild(newfloatContainer, floatContainer)
  }

  return (
    <div className="carouselMain">
      <Swiper
        className="carouselMain__container"
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 8000, disableOnInteraction: true }}
        effect="fade"
        watchSlidesVisibility="true"
        onSlideChange={swiper => {
          animation(swiper.visibleSlides)
        }}
      >
       
          <SwiperSlide >
            <div
              className="banner"
              style={{
                backgroundImage: `linear-gradient(
                  rgba(0, 0, 0, .4),
                  rgba(0, 0, 0, .4)
                ), url(./banners/AdobeStock_90603827-scaled.jpeg)`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
              }}
            >
              <div className="banner__container">
                <div className="banner__left">
                  <div className="banner__title flip-in-hor-bottom">
                    {"ICT Networks"}
                  </div>
                  <div className="banner__subtitle flip-in-hor-top">
                    {"Ofrecemos suministros de cableados completos de voz/datos y comunicaciones, dando soluciones hechas a la medida."}
                  </div>
                  {/* <Link to={banner.buttonUrl1}>
                    <Button className="button slide-in-blurred-left">
                      {banner.button1}
                    </Button>
                  </Link> */}
                  <a target="blank" href="https://wa.link/pip1qf">
                    <Button className="button slide-in-blurred-right">
                      {"Contáctanos"}
                    </Button>
                  </a>
                </div>
                <div className="banner__right">

                   <img
                    className="fade-in"
                    src={`./banners/whats-marathon11.png`}
                    alt=""
                   /> 



                </div>
              </div>
            </div>
          </SwiperSlide>
       
      </Swiper>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    banners: state.reducersHome.banners,
  }
}

const mapDispatchToProps = {
  getAll,
}

export default connect(mapStateToProps, mapDispatchToProps)(CarouselMain)
