import { TOffers } from './types/offers-cards-type';
import { TSort } from './types/sort-type';

function sortByRating(a: TOffers, b: TOffers) {
  return b.rating - a.rating;
}

function sortLowToHigh(a: TOffers, b: TOffers) {
  return a.price - b.price;
}

function sortHighToLow(a: TOffers, b: TOffers) {
  return b.price - a.price;
}

export const sorting: Record<TSort, (offers: TOffers[]) => TOffers[]> =
  {
    Popular: (offers: TOffers[]) => offers.slice(),
    HighToLow: (offers: TOffers[]) => offers.toSorted(sortHighToLow),
    LowToHigh: (offers: TOffers[]) => offers.toSorted(sortLowToHigh),
    TopRated: (offers: TOffers[]) => offers.toSorted(sortByRating),
  };
