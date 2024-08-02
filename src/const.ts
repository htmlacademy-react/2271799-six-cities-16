const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];
const placesCount = 20;

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

const LimitCharactersEnter = {
  Max: 300,
  Min: 50,
} as const;

const propsByPlace = {
  main: {
    className: 'cities',
    width: 260,
    height: 200
  },
  offer: {
    className: 'near-places',
    width: 260,
    height: 200
  },
  favorite: {
    className: 'favorites',
    width: 150,
    height: 110
  }
};

export {CITIES, placesCount, propsByPlace, LimitCharactersEnter};
