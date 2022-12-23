import React from 'react'
import GoogleMap from 'google-map-react'
import pin from '../../../assets/static/pin.svg'
import './styles.scss'

const Map = props => {
  const { lat, lng } = props

  const center = [parseFloat(lat), parseFloat(lng)]
  const zoom = 18

  const Pin = () => <img src={pin} alt="" className="pin" />

  return (
    // Important! Always set the container height explicitly
    <div className="map">
      <GoogleMap bootstrapURLKeys={{ key: 'AIzaSyAeOLaJsbTpcoK-OLc7ORwk0x7-ooZwN8A' }} center={center} zoom={zoom}>
        <Pin lat={lat} lng={lng} text="My Marker" />
      </GoogleMap>
    </div>
  )
}

export default Map
