import { TOffer } from '../../types/offer-type';
import { TReviews } from '../../types/reviews-type';
import ReviewForm from '../review-form/review-form';

type TOfferPage = {
  offer: TOffer;
  reviews: TReviews[];
}

function OffersDetails({offer, reviews}: TOfferPage): JSX.Element {
  const {title, images, type, goods, price, bedrooms, rating, isPremium, maxAdults, host, description} = offer;
  return (
    <section className="offer">
      <div className="offer__gallery-container container">
        <div className="offer__gallery">
          {images.map((img) => (
            <div className="offer__image-wrapper" key={img}>
              <img className="offer__image" src={img} alt="Photo studio" />
            </div>
          ))}
        </div>
      </div>
      <div className="offer__container container">
        <div className="offer__wrapper">
          {isPremium ?
            <div className="offer__mark">
              <span>Premium</span>
            </div> : ''}

          <div className="offer__name-wrapper">
            <h1 className="offer__name">
              {title}
            </h1>
            <button className="offer__bookmark-button button" type="button">
              <svg className="offer__bookmark-icon" width={31} height={33}>
                <use xlinkHref="#icon-bookmark" />
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div className="offer__rating rating">
            <div className="offer__stars rating__stars">
              <span style={{ width: '80%' }} />
              <span className="visually-hidden">Rating</span>
            </div>
            <span className="offer__rating-value rating__value">{rating}</span>
          </div>
          <ul className="offer__features">
            <li className="offer__feature offer__feature--entire">{type}</li>
            <li className="offer__feature offer__feature--bedrooms">
              {bedrooms} Bedrooms
            </li>
            <li className="offer__feature offer__feature--adults">
            Max {maxAdults} adults
            </li>
          </ul>
          <div className="offer__price">
            <b className="offer__price-value">{price}</b>
            <span className="offer__price-text">&nbsp;night</span>
          </div>
          <div className="offer__inside">
            <h2 className="offer__inside-title">What&apos;s inside</h2>
            <ul className="offer__inside-list">
              {goods.map((item) => (
                <li key={item} className="offer__inside-item">{item}</li>
              ))}
            </ul>
          </div>
          <div className="offer__host">
            <h2 className="offer__host-title">Meet the host</h2>
            <div className="offer__host-user user">
              <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                <img
                  className="offer__avatar user__avatar"
                  src="img/avatar-angelina.jpg"
                  width={74}
                  height={74}
                  alt="Host avatar"
                />
              </div>
              <span className="offer__user-name">{host.name}</span>
              {host.isPro ? <span className="offer__user-status">Pro</span> : ''}
            </div>
            <div className="offer__description">
              <p className="offer__text">
                {description}
              </p>
            </div>
          </div>
          {reviews.map((item) => (
            <section className="offer__reviews reviews" key={item.id}>
              <h2 className="reviews__title">
            Reviews · <span className="reviews__amount">{reviews.length}</span>
              </h2>
              <ul className="reviews__list">
                <li className="reviews__item">
                  <div className="reviews__user user">
                    <div className="reviews__avatar-wrapper user__avatar-wrapper">
                      <img
                        className="reviews__avatar user__avatar"
                        src={item.user.avatarUrl}
                        width={54}
                        height={54}
                        alt="Reviews avatar"
                      />
                    </div>
                    <span className="reviews__user-name">{item.user.name}</span>
                  </div>
                  <div className="reviews__info">
                    <div className="reviews__rating rating">
                      <div className="reviews__stars rating__stars">
                        <span style={{ width: '80%' }} />
                        <span className="visually-hidden">Rating</span>
                      </div>
                    </div>
                    <p className="reviews__text">
                      {item.comment}
                    </p>
                    <time className="reviews__time" dateTime="2019-04-24">
                      {item.date}
                    </time>
                  </div>
                </li>
              </ul>
              <ReviewForm />
            </section>
          ))}

        </div>
      </div>
      <section className="offer__map map" />
    </section>
  );
}

export default OffersDetails;
