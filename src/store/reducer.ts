import {createReducer} from '@reduxjs/toolkit';
import { changeCity, getOffers, requireAuthorization } from './action';
import { AuthorizationStatus, CITIES } from '../const';
import { offers } from '../mocks/offers-cards';
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
        state.offers = offers.filter((offer) => offer.city.name === state.city.name);
      }
    })
    .addCase(getOffers, (state) => {
      state.offers = offers.filter((offer) => offer.city.name === state.city.name);
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});
