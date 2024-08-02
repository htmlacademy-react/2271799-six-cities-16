import { Link } from 'react-router-dom';
import { AppRoute, propsByPlace } from '../../const';
import { TOffers } from '../../types/offers-cards-type';
import { useState } from 'react';

type Data = {
  cardInfo: TOffers;
  page: keyof typeof propsByPlace;
}

function CardItem({cardInfo, page}: Data): JSX.Element {
  const {isPremium, price, title, type, previewImage, rating, id} = cardInfo;

  const [idCard, setIdCard] = useState<string | null>(null);

  const handleMouseEnter = (): void => {
    setIdCard(id);
  };

  const handleMouseLeave = (): void => {
    setIdCard(null);
  };

  const ratingInPercentage = (rating * 100) / 5;
  const { className, width, height } = propsByPlace[page];

  return (
    <article
      className={`${className}__card place-card ${idCard === id ? 'place-card--active' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isPremium ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div> : ''}
      <div className={`${className}__image-wrapper place-card__image-wrapper`}>
        <Link to={AppRoute.Offer.replace(':id', id)}>
          <img
            className="place-card__image"
            src={previewImage}
            width={width}
            height={height}
            alt="Place image"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button
            className="place-card__bookmark-button button"
            type="button"
          >
            <svg
              className="place-card__bookmark-icon"
              width={18}
              height={19}
            >
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${ratingInPercentage}%` }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={AppRoute.Main}>
            {title}
          </Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default CardItem;
