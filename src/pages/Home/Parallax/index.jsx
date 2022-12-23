import React from 'react'
import Button from '../../../components/Button'
import image from '../../../assets/static/parallax__img.png'
import bg from '../../../assets/static/bg2-2.jpg'
import './styles.scss'
const styles = {
  backgroundImage: `url(${bg})`,
}
const Parallax = () => {
  return (
    <div className="parallaxMaster" style={styles}>
      <div className="parallax">
        <div className="parallax__text">
          <h2 className="parallax__title">
            Brindamos atención especializada a cualquier sector de la Industria.
          </h2>
          <div className="parallax__contact">
            <h4 className="parallax__phone">222 690 6700</h4>
            <a href="https://wa.link/pip1qf" target="blank">
              <Button className="button scale-up-center">¡Contáctanos!</Button>
            </a>
          </div>
        </div>
        <img className="parallax__img" src={image} alt="obrero" />
      </div>
    </div>
  )
}

export default Parallax
