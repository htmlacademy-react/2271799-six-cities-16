import { useAppSelector } from '../../hooks';
import { TOffers } from '../../types/offers-cards-type';
import CardItem from '../card/card-item';

type TCardInfo = {
  onCardHover: (offer?: TOffers) => void;
}

function OffersList({ onCardHover }: TCardInfo): JSX.Element {
  const offers = useAppSelector((state) => state.offers);
  const handleCardMouseEnter = (offer: TOffers) => {
    onCardHover(offer);
  };

  const handleCardMouseLeave = () => {
    onCardHover();
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((item) => (
        <CardItem
          key={item.id}
          cardInfo={item}
          page='main'
          onCardMouseEnter={() => handleCardMouseEnter(item)}
          onCardMouseLeave={handleCardMouseLeave}
        />))}
    </div>
  );
}

export default OffersList;
