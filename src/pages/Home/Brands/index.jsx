import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getAll } from '../../../actions'
import './styles.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { AiOutlineFilePdf } from 'react-icons/ai'
import Swal from 'sweetalert2'

import Title from '../../../components/Title'
import Text from '../../../components/Text'
import Button from '../../../components/Button'

import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'
import 'swiper/components/scrollbar/scrollbar.scss'

const Brands = props => {
  const { brands } = props

  useEffect(() => {
    props.getAll('brands', 'GET_BRANDS')
    // eslint-disable-next-line
  }, [])

  const handleAlert = () => {
    Swal.fire({
      title: 'Próximamente',
      text: 'Estamos actualizando nuestros catálogos.',
      icon: 'info',
      confirmButtonColor: '#CE0226',
      confirmButtonText: 'Aceptar',
    })
  }

  const handleModalCatalogs = catalogs => {
    console.log(catalogs)
    let html
    if (catalogs.length > 0) {
      html = catalogs.map(catalog => {
        return ` <div class="catalogo__patch">
           <a
           class="catalogo__patch__link"             target="blank"
             href="${process.env.REACT_APP_API}docs/catalogs/${catalog.pdf}"
           >
             ${catalog.pdf}
           </a>
         </div>`
      })
    } else {
      html = '<div>No hay catálogos disponibles</div>'
    }
    Swal.fire({
      title: 'Catálogos',
      html: html,
      confirmButtonColor: '#CE0226',
      confirmButtonText: 'Aceptar',
    })
  }

  return (
    <div className="brands" id="brands">
      <Title className="title --center">Marcas</Title>
      <Text className="text --center">
        Nuestras marcas Premium son reconocidas a nivel Nacional e
        Internacional. Cuentan con las debidas certificaciones y
        especificaciones que tú necesitas.
      </Text>
      <Swiper
        className="brands__slider"
        spaceBetween={30}
        slidesPerView={window.screen.width <= 600 ? 1 : 3}
        slidesPerColumn={1}
        navigation={true}
        loop={true}
      >
        {brands ? (
          brands.map(brand => {
            return (
              <SwiperSlide key={brand._id} className="brands__item">
                <div className="brands__card">
                  <img
                    src={`${process.env.REACT_APP_API}docs/brands/${brand.logo}`}
                    alt="Logo"
                  />
                  <ul>
                    {brand.catalogs && brand.catalogs.length > 0 ? (
                      <Button
                        onClick={() => handleModalCatalogs(brand.catalogs)}
                      >
                        <AiOutlineFilePdf /> Catálogos
                      </Button>
                    ) : (
                      <Button onClick={handleAlert}>
                        <AiOutlineFilePdf /> Catálogos
                      </Button>
                    )}
                  </ul>
                </div>
              </SwiperSlide>
            )
          })
        ) : (
          <h1>Cargando..</h1>
        )}
      </Swiper>
    </div>
  )
}

const mapStatetoProps = state => {
  return {
    brands: state.reducersHome.brands,
  }
}

const mapDispatchToProps = {
  getAll,
}

export default connect(mapStatetoProps, mapDispatchToProps)(Brands)
