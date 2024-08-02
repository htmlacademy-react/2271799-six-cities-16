import { TOffers } from '../../types/offers-cards-type';
import CardItem from '../card/card-item';

type TCardInfo = {
  offers: TOffers[];
}

function OffersList({offers}: TCardInfo): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((item) => (<CardItem key={item.id} cardInfo={item} page='main'/>))}
    </div>
  );
}

export default OffersList;
