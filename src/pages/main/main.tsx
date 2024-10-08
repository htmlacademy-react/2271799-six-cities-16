import { Helmet } from 'react-helmet-async';
import Cities from '../../components/cities/cities';
import Header from '../../components/header/header';
import Map from '../../components/map/map';
import Sort from '../../components/sort/sort';
import OffersList from '../../components/offers-list/offers-list';
import { TOffers } from '../../types/offers-cards-type';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeCity } from '../../store/action';
import { CITIES, SortingMap } from '../../const';
import { TSort } from '../../types/sort-type';
import { sorting } from '../../utils';

function Main(): JSX.Element {
  const [activeOffer, setActiveOffer] = useState<TOffers | null>(null);

  const [activeSort, setActiveSort] = useState<TSort>(SortingMap.Popular);

  function handleSortChange(type: TSort) {
    setActiveSort(type);
  }

  const handleOfferHover = (offer?: TOffers) => {
    setActiveOffer(offer || null);
  };

  const city = useAppSelector((state) => state.city);
  const dispatch = useAppDispatch();

  const handleCityClick = (cityName: string): void => {
    const selectedCity = CITIES.find((item) => item.name === cityName);
    if (selectedCity) {
      dispatch(changeCity(selectedCity));
    }
  };

  const offers = useAppSelector((state) => state.offers);
  const offersByCity = offers.filter((offer) => offer.city?.name === city.name);

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
            <Cities selectedCity={city} onCityClick={handleCityClick} />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offers.length} places to stay in {city.name}</b>
              <Sort activeSort={activeSort} onChange={handleSortChange}/>
              <OffersList onCardHover={handleOfferHover} offers={sorting[activeSort](offersByCity)} />
            </section>
            <div className="cities__right-section">
              <Map className='cities' activeOffer={activeOffer} offers={offersByCity} city={city} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
