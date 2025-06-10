import React, { useState } from 'react';
import { MapContainer, TileLayer, Polygon, useMapEvents } from 'react-leaflet';

const LocationSelector = ({ setPolygon }) => {
  useMapEvents({
    click(e) {
      setPolygon(prev => [...prev, [e.latlng.lat, e.latlng.lng]]);
    }
  });
  return null;
};

const ZoneMap = ({ polygon, setPolygon }) => {
  return (
    <MapContainer center={[28.6139, 77.2090]} zoom={10} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationSelector setPolygon={setPolygon} />
      {polygon.length > 0 && <Polygon positions={polygon} />}
    </MapContainer>
  );
};

export default ZoneMap;
