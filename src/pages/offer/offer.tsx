import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import OffersDetails from '../../components/offer-details/offer-details';
import { useParams } from 'react-router-dom';
import CardItem from '../../components/card/card-item';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchNearPlacesAction, fetchOfferAction, fetchReviewsAction } from '../../store/api-action';
import { useEffect } from 'react';

function Offer(): JSX.Element {
  const {id} = useParams<{ id: string | undefined }>();
  const nearPlacesOffers = useAppSelector((state) => state.nearPlaces);
  const offer = useAppSelector((state) => state.offer);
  const reviews = useAppSelector((state) => state.reviews);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) {
      dispatch(fetchOfferAction(id));
      dispatch(fetchReviewsAction(id));
      dispatch(fetchNearPlacesAction(id));
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
          <OffersDetails reviews={reviews} offer={offer} key={offer.id} offers={nearPlacesOffers} activeOffer={offer}/>
          : ''}

        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighborhood</h2>
            <div className="near-places__list places__list">
              {nearPlacesOffers && nearPlacesOffers.map((item) => (
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
