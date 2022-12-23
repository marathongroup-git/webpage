import React from 'react'
import CarouselMain from './CarouselMain'
import Services from './Services'
import Parallax from './Parallax'
import Participation from './Participation'
import Parallax2 from './Parallax2'
import Divisions from './Divisions'
import Reviews from './Reviews'
import Brands from './Brands'
import Business from './Business'
import './styles.scss'

const Home = () => {
  return (
    <div className="Home">
      <CarouselMain />
      <Services />
      <Parallax />
      <Participation />
      <Parallax2 />
      <Divisions />
      <Reviews />
      <Brands />
      <Business />
    </div>
  )
}

export default Home
