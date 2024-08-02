import { THost } from './offer-type';

export type TReviews = {
  id: string;
  date: string;
  user: THost;
  comment: string;
  rating: number;
}
