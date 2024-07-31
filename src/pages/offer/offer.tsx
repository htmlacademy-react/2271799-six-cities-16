import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import OffersDetails from '../../components/offer-details/offer-details';
import { TOffer } from '../../types/offer-type';
import { useParams } from 'react-router-dom';
import { TReviews } from '../../types/reviews-type';

type TOfferPage = {
  offers: TOffer[];
  reviews: TReviews[];
}

function Offer({offers, reviews}: TOfferPage): JSX.Element {
  const {id} = useParams<{ id: string }>();
  const currentOffer = offers.find((item) => item.id === id);
  const currentReviews = reviews.filter((item) => item.id === id);
  return (
    <div className="page">
      <Helmet>
        <title>6 городов. Детали выбранного предложения</title>
      </Helmet>
      <Header />
      <main className="page__main page__main--offer">
        {currentOffer ?
          <OffersDetails offer={currentOffer} reviews={currentReviews} key={currentOffer.id}/>
          : ''}

        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighborhood</h2>
            <div className="near-places__list places__list">

            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Offer;
