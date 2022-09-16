import { MapContainer } from './Map.styles'
import {
  Map as ReactMapGl,
  Marker,
  NavigationControl,
  GeolocateControl,
} from 'react-map-gl'
import { useState } from 'react'
const token =
  'pk.eyJ1IjoieXNyYm9sbGVzIiwiYSI6ImNsNW03dm9qcjBienAzY3F2M2Q0cTFnbWMifQ.gFNmLudp0JkoMZj7dRQPKw'

const Map = ({ long, lat }) => {
  const [viewState, setViewState] = useState({
    latitude: lat,
    longitude: long,
    zoom: 15,
  })
  return (
    <MapContainer>
      <ReactMapGl
        onMove={(evt) => setViewState(evt.viewState)}
        mapboxAccessToken={token}
        {...viewState}
        style={{ width: '100%', height: '100%' }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
      >
        <NavigationControl position="bottom-right" />
        <GeolocateControl position="bottom-right" />
        <Marker latitude={lat} longitude={long} />
      </ReactMapGl>
    </MapContainer>
  )
}
export default Map
