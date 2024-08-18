import {createAction} from '@reduxjs/toolkit';
import { TCity } from '../types/cities-type';
import { TOffers } from '../types/offers-cards-type';
import { AuthorizationStatus } from '../const';
import { TOffer } from '../types/offer-type';
import { TReviews } from '../types/reviews-type';

export const changeCity = createAction<TCity>('city/changeCity');

export const getOffers = createAction<TOffers[]>('offers/getOffers');

export const getOffer = createAction<TOffer | null>('offer/getOffer');

export const getReviews = createAction<TReviews[] | null>('reviews/getComments');

export const getNearPlaces = createAction<TOffer[] | null>('offer/getNearPlaces');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setError = createAction<string | null>('offer/setError');

export const setDataLoadingStatus = createAction<boolean>('data/setDataLoadingStatus');
