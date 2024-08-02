import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import CardItem from '../../components/card/card-item';
import { TOffers } from '../../types/offers-cards-type';

type TFavoriteProps = {
  offers: TOffers[];
}

type TFavoriteCardProps = {
  card: TOffers;
}

type GroupedOffers = {
  [key: string]: TOffers[];
}

function FavoriteCard({card}: TFavoriteCardProps): JSX.Element {
  return (
    <CardItem cardInfo={card} page="favorite" />
  );
}

function Favorites({ offers }: TFavoriteProps): JSX.Element {
  const favoriteOffers = offers.filter((offer) => offer.isFavorite);

  const groupedOffers = favoriteOffers.reduce<GroupedOffers>((acc, offer) => {
    const city = offer.city.name;
    if (!acc[city]) {
      acc[city] = [];
    }
    acc[city].push(offer);
    return acc;
  }, {});

  return (
    <div className="page">
      <Helmet>
        <title>6 городов. Избранное</title>
      </Helmet>
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {Object.keys(groupedOffers).map((city) => (
                <li key={city} className="favorites__locations-items">
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <Link className="locations__item-link" to={AppRoute.Main}>
                        <span>{city}</span>
                      </Link>
                    </div>
                  </div>
                  <div className="favorites__places">
                    {groupedOffers[city].map((offer) => (
                      <FavoriteCard key={offer.id} card={offer} />
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Favorites;
