import {createAction} from '@reduxjs/toolkit';
import { TCity } from '../types/cities-type';
import { TOffers } from '../types/offers-cards-type';
import { AuthorizationStatus } from '../const';

export const changeCity = createAction<TCity>('city/changeCity');

export const getOffers = createAction<TOffers[]>('offers/getOffers');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setError = createAction<string | null>('offer/setError');

export const setDataLoadingStatus = createAction<boolean>('data/setDataLoadingStatus');
