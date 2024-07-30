import { TCity, TLocation } from './cities-type';

export type TOffers = {
  id?: string;
  title?: string;
  type?: string;
  price?: number;
  previewImage?: string;
  city?: TCity;
  location?: TLocation;
  isFavorite?: boolean;
  isPremium?: boolean;
  rating: number;
}
