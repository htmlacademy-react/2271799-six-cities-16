import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import OffersDetails from '../../components/offer-details/offer-details';
import { TOffer } from '../../types/offer-type';
import { useParams } from 'react-router-dom';
// import { TReviews } from '../../types/reviews-type';
import CardItem from '../../components/card/card-item';
import { MAX_COUNT_NEAR_PLACES } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchOfferAction } from '../../store/api-action';
import { useEffect } from 'react';

type TOfferPage = {
  offers: TOffer[];
  // reviews: TReviews[];
}

function Offer({offers}: TOfferPage): JSX.Element {
  const {id} = useParams<{ id: string | undefined }>();
  const nearPlacesOffers = offers.slice(0, MAX_COUNT_NEAR_PLACES);
  const offer = useAppSelector((state) => state.offer);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) {
      dispatch(fetchOfferAction(id));
    }
  }, [dispatch, id]);

  return (
    <div className="page">
      <Helmet>
        <title>6 городов. Детали выбранного предложения</title>
      </Helmet>
      <Header />
      <main className="page__main page__main--offer">
        {offer ?
          <OffersDetails offer={offer} key={offer.id} offers={nearPlacesOffers} activeOffer={offer}/>
          : ''}

        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighborhood</h2>
            <div className="near-places__list places__list">
              {nearPlacesOffers.map((item) => (
                <CardItem key={item.id} cardInfo={item} page="offer" />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Offer;
