import { TOffers } from './offers-cards-type';

export type TOffer = TOffers & {
  description: string;
  bedrooms: number;
  goods: string[];
  host: THost;
  images: string[];
  maxAdults: number;
}

export type THost = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
};
