import { Helmet } from 'react-helmet-async';
import CitiesList from '../../components/cities-list/cities-list';
import Cities from '../../components/cities/cities';
import Header from '../../components/header/header';
import Map from '../../components/map/map';
import Sort from '../../components/sort/sort';

type MainProps = {
  placesCount: number;
}

function Main({placesCount}: MainProps) : JSX.Element {
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
            <Cities />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{placesCount} places to stay in Amsterdam</b>
              <Sort />
              <CitiesList />
            </section>
            <div className="cities__right-section">
              <Map />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
