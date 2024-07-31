import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { placesCount } from './const';
import { offers } from './mocks/offers-cards';
import { offer } from './mocks/offer';
import { reviews } from './mocks/reviews';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App placesCount={placesCount} offers={offers} offer={offer} reviews={reviews}/>
  </React.StrictMode>
);
