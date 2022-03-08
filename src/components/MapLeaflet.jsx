import React from 'react';
import { TileLayer, MapContainer, LayersControl } from 'react-leaflet';
import RoutingControl from './RoutingControl';
import { useSelector } from 'react-redux';
import './MapLeaflet.css';

const MapLeaflet = () => {
  const start = useSelector(state => state.start);
  const end = useSelector(state => state.end);

  return (
    <>
      <MapContainer
        center={[55.753165, 37.622422]}
        zoom={13}
        zoomControl={false}
      >
        <RoutingControl start={start} end={end} color={'#757de8'} />

        <LayersControl position='bottomright'>
          <LayersControl.BaseLayer checked name='Map'>
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
          </LayersControl.BaseLayer>
        </LayersControl>
      </MapContainer>
    </>
  );
};

export default MapLeaflet;
