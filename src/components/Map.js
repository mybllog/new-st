import React,{useState} from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// Google Map container style
const containerStyle = {
  width: '100%',
  height: '400px',
};

// Default location (e.g., New York City)
const center = {
  lat: 6.54839,
  lng: 3.34598,
};


const Map = () => {
    const [markers, setMarkers] = useState([
        { lat:6.557726, lng: 3.345531 }, // Marker 1
        { lat: 6.50157, lng: 3.3529  }, // Marker 2
      ]);
    
      // Add a marker on map click
      const handleMapClick = (e) => {
        setMarkers([...markers, { lat: e.latLng.lat(), lng: e.latLng.lng() }]);
      };
    
  return (
    <LoadScript googleMapsApiKey={process.env.API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onClick={handleMapClick}
      >
        {markers.map((marker, index) => (
          <Marker key={index} position={marker} />
        ))}
      </GoogleMap>
    </LoadScript>
  )
}

export default Map