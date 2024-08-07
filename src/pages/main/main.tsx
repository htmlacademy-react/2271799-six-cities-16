import { Helmet } from 'react-helmet-async';
import Cities from '../../components/cities/cities';
import Header from '../../components/header/header';
import Map from '../../components/map/map';
import Sort from '../../components/sort/sort';
import OffersList from '../../components/offers-list/offers-list';
import { TOffers } from '../../types/offers-cards-type';
import { useState } from 'react';
import { TCity } from '../../types/cities-type';
import { CITIES } from '../../const';

type TMain = {
  placesCount: number;
  offers: TOffers[];
}

function Main({ placesCount, offers }: TMain): JSX.Element {
  const [activeOffer, setActiveOffer] = useState<TOffers | null>(null);

  const handleOfferHover = (offer?: TOffers) => {
    setActiveOffer(offer || null);
  };

  const [selectedCity, setSelectedCity] = useState<TCity>(CITIES[0]);

  const handleCityClick = (cityName: string) => {
    const selected = CITIES.find((city) => city.name === cityName);
    if (selected) {
      setSelectedCity(selected);
    }
  };

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 городов. Главная страница</title>
      </Helmet>
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <Cities selectedCity={selectedCity} onCityClick={handleCityClick} />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{placesCount} places to stay in Amsterdam</b>
              <Sort />
              <OffersList offers={offers} onCardHover={handleOfferHover} />
            </section>
            <div className="cities__right-section">
              <Map className='cities' activeOffer={activeOffer} offers={offers} city={selectedCity} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
