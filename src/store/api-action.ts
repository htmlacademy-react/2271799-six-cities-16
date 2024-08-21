import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { AxiosInstance } from 'axios';
import { clearUser, getNearPlaces, getOffer, getOffers, getReviews, requireAuthorization, setDataLoadingStatus, setError, setUser } from './action';
import { dropToken, saveToken } from '../services/token';
import { APIRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR } from '../const';
import { TAuth } from '../types/auth-type';
import { TUser } from '../types/user-type';
import { store } from '.';
import { TOffer } from '../types/offer-type';
import { TReviews } from '../types/reviews-type';

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offers/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setDataLoadingStatus(true));
    const {data} = await api.get<TOffer[]>(APIRoute.Offers);
    dispatch(setDataLoadingStatus(false));
    dispatch(getOffers(data));
  },
);

export const fetchOfferAction = createAsyncThunk<TOffer, string | undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offer/fetchOffer',
  async (offerId, { dispatch, extra: api }) => {
    const { data } = await api.get<TOffer>(`${APIRoute.Offers}/${offerId}`);
    dispatch(getOffer(data));
    return data;
  },
);

export const fetchReviewsAction = createAsyncThunk<TReviews[], string | undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offer/fetchReviews',
  async (offerId, { dispatch, extra: api }) => {
    const { data } = await api.get<TReviews[]>(`${APIRoute.Comments}/${offerId}`);
    dispatch(getReviews(data));
    return data;
  },
);

export const fetchNearPlacesAction = createAsyncThunk<TOffer[], string | undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offer/fetchNearPlaces',
  async (offerId, { dispatch, extra: api }) => {
    const { data } = await api.get<TOffer[]>(`${APIRoute.Offers}/${offerId}/${APIRoute.Nearby}`);
    dispatch(getNearPlaces(data));
    return data;
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, TAuth, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({ login: email, password }, { dispatch, extra: api }) => {

    const response = await api.post<TUser & { token: string }>(APIRoute.Login, { email, password });

    const { token, ...userData } = response.data;
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(setUser({ ...userData, email }));

  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    dispatch(clearUser());
  },
);

export const clearErrorAction = createAsyncThunk(
  'offer/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);
