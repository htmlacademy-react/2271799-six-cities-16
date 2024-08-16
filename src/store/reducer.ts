import {createReducer} from '@reduxjs/toolkit';
import { changeCity, getOffer, getOffers, requireAuthorization, setDataLoadingStatus, setError } from './action';
import { AuthorizationStatus, CITIES } from '../const';
import { TCity } from '../types/cities-type';
import { TOffers } from '../types/offers-cards-type';
import { TOffer } from '../types/offer-type';

type State = {
  city: TCity;
  offers: TOffers[];
  offer: TOffer | null;
  authorizationStatus: (typeof AuthorizationStatus)[keyof typeof AuthorizationStatus];
  error: string | null;
  isDataLoading: boolean;
};

const initialState: State = {
  city: CITIES[0],
  offers: [],
  offer: null,
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
  isDataLoading: false
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      if (action.payload) {
        state.city = action.payload;
      }
    })
    .addCase(getOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(getOffer, (state, action) => {
      state.offer = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setDataLoadingStatus, (state, action) => {
      state.isDataLoading = action.payload;
    });
});
