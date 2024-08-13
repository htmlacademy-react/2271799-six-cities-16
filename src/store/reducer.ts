import {createReducer} from '@reduxjs/toolkit';
import { changeCity, getOffers } from './action';
import { CITIES } from '../const';
import { offers } from '../mocks/offers-cards';
import { TCity } from '../types/cities-type';
import { TOffers } from '../types/offers-cards-type';

type State = {
  city: TCity;
  offers: TOffers[];
};

const initialState: State = {
  city: CITIES[0],
  offers: []
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
    });
});
