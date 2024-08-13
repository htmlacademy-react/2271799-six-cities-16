import {createAction} from '@reduxjs/toolkit';
import { TCity } from '../types/cities-type';
import { TOffers } from '../types/offers-cards-type';

export const changeCity = createAction<TCity>('city/changeCity');

export const getOffers = createAction<TOffers[]>('offers/getOffers');
