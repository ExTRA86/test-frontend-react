import React from 'react';
import MapLeaflet from './components/MapLeaflet';
import TableAntDesign from './components/TableAntDesign';

const RequestsForTransportation = () => {
  return (
    <div style={{ display: 'flex' }}>
      <TableAntDesign />
      <MapLeaflet />
    </div>
  );
};

export default RequestsForTransportation;
