import {createReducer} from '@reduxjs/toolkit';
import { changeCity, clearUser, getNearPlaces, getOffer, getOffers, getReviews, requireAuthorization, setDataLoadingStatus, setError, setUser } from './action';
import { AuthorizationStatus, CITIES } from '../const';
import { TCity } from '../types/cities-type';
import { TOffer } from '../types/offer-type';
import { TReviews } from '../types/reviews-type';
import { TUser } from '../types/user-type';

type State = {
  city: TCity;
  offers: TOffer[];
  offer: TOffer | null;
  reviews: TReviews[] | null;
  nearPlaces: TOffer[] | null;
  authorizationStatus: (typeof AuthorizationStatus)[keyof typeof AuthorizationStatus];
  error: string | null;
  isDataLoading: boolean;
  user: TUser | null;
};

const initialState: State = {
  city: CITIES[0],
  offers: [],
  offer: null,
  reviews: [],
  nearPlaces: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
  isDataLoading: false,
  user: null
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
    .addCase(getReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(getNearPlaces, (state, action) => {
      state.nearPlaces = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setUser, (state, action) => {
      state.user = action.payload;
    })
    .addCase(clearUser, (state) => {
      state.user = null;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setDataLoadingStatus, (state, action) => {
      state.isDataLoading = action.payload;
    });
});
