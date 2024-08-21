import {useEffect, useRef} from 'react';
import leaflet, { LayerGroup } from 'leaflet';
import {Icon} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { TCity } from '../../types/cities-type';
import { MapMarkers } from '../../const';
import useMap from '../../hooks/use-map';
import { TOffers } from '../../types/offers-cards-type';
import { TOffer } from '../../types/offer-type';
import './map-styles.css';

type MapProps = {
  className: string;
  city: TCity;
  offers?: TOffer[] | null;
  activeOffer?: TOffers | null;
};

const defaultCustomIcon = new Icon({
  iconUrl: MapMarkers.Default,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: MapMarkers.Active,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function Map({className, city, offers, activeOffer}: MapProps): JSX.Element {
  const mapRef = useRef<HTMLDivElement>(null);
  const map = useMap({ mapRef, city });
  const markerLayer = useRef<LayerGroup>(leaflet.layerGroup());

  useEffect(() => {
    if (map) {
      map.setView([city.location.latitude, city.location.longitude], city.location.zoom);
      markerLayer.current.addTo(map);
      markerLayer.current.clearLayers();
    }
  }, [city, map]);

  useEffect(() => {
    if (map && offers) {
      offers.forEach((offer) => {
        if (offer.location) {
          leaflet.
            marker({
              lat: offer.location.latitude,
              lng: offer.location.longitude,
            }, {
              icon: activeOffer && activeOffer.id === offer.id ? currentCustomIcon : defaultCustomIcon,
            }).addTo(markerLayer.current);
        }
      });
    }
  }, [ activeOffer, map, offers ]);

  return (
    <section
      className={`${className}__map map map__style`}
      ref={mapRef}
    />
  );
}

export default Map;
