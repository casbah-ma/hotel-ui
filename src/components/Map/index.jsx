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
    width: '100%',
    height: '100%',
    latitude: '35.775781158640214',
    longitude: '-5.796029414390299',
    zoom: 15,
  })
  const [markers, setMarkers] = useState([
    {
      latitude: lat ? lat : '35.775781158640214',
      longitude: long ? long : '-5.796029414390299',
      offsetLeft: '-20px',
      offsetTop: '-20px',
    },
  ])
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
