import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import Main from '../../pages/main/main';
import { AppRoute, AuthorizationStatus } from '../../const';
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import Offer from '../../pages/offer/offer';
import NotFound from '../../pages/not-found/not-found';
import PrivateRoute from '../private-route/private-route';
import { TOffer } from '../../types/offer-type';
import { TReviews } from '../../types/reviews-type';
import { useAppSelector } from '../../hooks';

type AppProps = {
  offer: TOffer[];
  reviews: TReviews[];
}

function App({ offer, reviews}: AppProps): JSX.Element {
  const offers = useAppSelector((state) => state.offers);

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
