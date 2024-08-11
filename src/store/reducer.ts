import {createReducer} from '@reduxjs/toolkit';
import { changeCity } from './action';

const initialState = {
  city: 'Paris',
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    });
});
