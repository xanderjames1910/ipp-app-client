import React, { useState } from 'react';
import { Card } from 'semantic-ui-react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import MAPBOX_TOKEN from '../util/env.vars';
// import * as pozosData from '../doomieData/mapsData.json';
import * as pozosData from '../doomieData/BASE_MAESTRA.json';

const MapIPP = () => {
  const [viewport, setViewport] = useState({
    latitude: 0.02213,
    longitude: -76.27657,
    zoom: 12,
    bearing: 0,
    pitch: 0,
  });

  const [selectedPozo, setSelectedPozo] = useState(null);

  return (
    <Card style={{ width: '100%' }}>
      <Card.Content header='Ubicación de los Pozos' />
      <Card.Content style={{ height: 350 }}>
        {/* {loading ? (
          <Dimmer active>
            <Loader>Cargando Ubicaciones...</Loader>
          </Dimmer>
        ) : ( */}
        <ReactMapGL
          {...viewport}
          width='100%'
          height='100%'
          mapStyle='mapbox://styles/xanderjames1910/ck5z6onqr1f7d1io4xi69otwr'
          onViewportChange={setViewport}
          mapboxApiAccessToken={MAPBOX_TOKEN}>
          {pozosData.pozos &&
            pozosData.pozos.map((pozo, i) => (
              <Marker key={i} latitude={pozo.DP_LATITUD} longitude={pozo.DP_LONGITUD}>
                <div
                  className='marker-btn'
                  onMouseEnter={() => {
                    // e.preventDefault();
                    setSelectedPozo(pozo);
                  }}
                  onMouseLeave={() => {
                    setSelectedPozo(null);
                  }}>
                  <img src='/map-marker-icon.png' alt='Skate Icon' />
                </div>
              </Marker>
            ))}
          {selectedPozo ? (
            <Popup
              latitude={selectedPozo.DP_LATITUD}
              longitude={selectedPozo.DP_LONGITUD}
              onClose={() => {
                setSelectedPozo(null);
              }}>
              <div>
                <h2>{selectedPozo.COMPLETAMIENTO}</h2>
                <p>{selectedPozo.DP_CAMPO}</p>
                <p>{selectedPozo.PD_TIPO_POZO}</p>
              </div>
            </Popup>
          ) : null}
        </ReactMapGL>
        {/* )} */}
      </Card.Content>
      {/* <Card.Content extra>
          <Icon name='user' />4 Friends
        </Card.Content> */}
    </Card>
  );
};

export default MapIPP;
