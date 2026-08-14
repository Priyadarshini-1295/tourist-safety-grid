import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'

const touristLocations = [
  {
    name: 'Delhi',
    position: [28.6139, 77.2090],
    info: 'India Gate and Red Fort',
    safety: 'Safe',
  },
  {
    name: 'Mumbai',
    position: [19.0760, 72.8777],
    info: 'Gateway of India',
    safety: 'Safe',
  },
  {
    name: 'Jaipur',
    position: [26.9124, 75.7873],
    info: 'Hawa Mahal and Amber Fort',
    safety: 'Safe',
  },
  {
    name: 'Goa',
    position: [15.2993, 74.1240],
    info: 'Beaches and heritage sites',
    safety: 'Safe',
  },
  {
    name: 'Kerala',
    position: [10.8505, 76.2711],
    info: 'Backwaters and hill stations',
    safety: 'Safe',
  },
]

const markerIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl:
    'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl:
    'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
})

function IndiaMap({ onLocationSelect }) {
  return (
    <div
      style={{
        width: '100%',
        height: '500px',
        borderRadius: '16px',
        overflow: 'hidden',
      }}
    >
      <MapContainer
        center={[22.5937, 78.9629]}
        zoom={5}
        scrollWheelZoom={true}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {touristLocations.map((location) => (
          <Marker
            key={location.name}
            position={location.position}
            icon={markerIcon}
            eventHandlers={{
              click: () => onLocationSelect(location.name),
            }}
          >
            <Popup>
              <strong>{location.name}</strong>
              <br />
              {location.info}
              <br />
              🛡️ Safety: {location.safety}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}

export default IndiaMap