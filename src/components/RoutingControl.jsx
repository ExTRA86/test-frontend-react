import { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import 'leaflet-routing-machine';
import { useMap } from 'react-leaflet';

const RoutingControl = ({ start, end, color }) => {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    const routingControl = L.Routing.control({
      waypoints: [start, end],
      routeWhileDragging: true,
      lineOptions: {
        styles: [{ color }],
      },
      show: true,
      addWaypoints: true,
      fitSelectedRoutes: true,
    }).addTo(map);

    return () => map.removeControl(routingControl);
  }, [map, start, end, color]);

  return null;
};

export default RoutingControl;
