import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet'; 
import 'leaflet/dist/leaflet.css'; 

import markerIcon from 'leaflet/dist/images/marker-icon.png'; 
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

const MapComponent = () => {
  const apiKey = 'nWU24VjsXyJgG1t4slEd';

  const mapCenter = [-32.950195, -60.647590];

  
  const customMarker = new L.Icon({
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
    iconSize: [25, 41], 
    iconAnchor: [12, 41], 
    popupAnchor: [1, -34],
    shadowSize: [41, 41], 
  });

  return (
    <MapContainer center={mapCenter} zoom={15} style={{height:'100%'}}>
      <TileLayer
        url={`https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=${apiKey}`}
        attribution='&copy; <a href="https://www.maptiler.com/copyright/">MapTiler</a> contributors'
      />
      <Marker position={mapCenter} icon={customMarker}>
        <Popup>Solumec</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
