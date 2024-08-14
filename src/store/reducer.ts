import {createReducer} from '@reduxjs/toolkit';
import { changeCity, getOffers, requireAuthorization } from './action';
import { AuthorizationStatus, CITIES } from '../const';
import { TCity } from '../types/cities-type';
import { TOffers } from '../types/offers-cards-type';

type State = {
  city: TCity;
  offers: TOffers[];
  authorizationStatus: (typeof AuthorizationStatus)[keyof typeof AuthorizationStatus];

};

const initialState: State = {
  city: CITIES[0],
  offers: [],
  authorizationStatus: AuthorizationStatus.Unknown,
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
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});
