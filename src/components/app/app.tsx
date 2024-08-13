import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import Main from '../../pages/main/main';
import { AppRoute, AuthorizationStatus } from '../../const';
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import Offer from '../../pages/offer/offer';
import NotFound from '../../pages/not-found/not-found';
import PrivateRoute from '../private-route/private-route';
import { TOffers } from '../../types/offers-cards-type';
import { TOffer } from '../../types/offer-type';
import { TReviews } from '../../types/reviews-type';

type AppProps = {
  offers: TOffers[];
  offer: TOffer[];
  reviews: TReviews[];
}

function App({offers, offer, reviews}: AppProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<Main />}
          />
          <Route
            path={AppRoute.Login}
            element={<Login />}
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.Auth} >
                <Favorites offers={offers}/>
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Offer}
            element={<Offer offers={offer} reviews={reviews}/>}
          />
          <Route
            path="*"
            element={<NotFound />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
