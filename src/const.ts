const CITIES = [
  {
    name: 'Paris',
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13
    }
  },
  {
    name: 'Cologne',
    location: {
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: 13
    }
  },
  {
    name: 'Brussels',
    location: {
      latitude: 50.846557,
      longitude: 4.351697,
      zoom: 13
    }
  },
  {
    name: 'Amsterdam',
    location: {
      latitude: 52.37454,
      longitude: 4.897976,
      zoom: 13
    }
  },
  {
    name: 'Hamburg',
    location: {
      latitude: 53.550341,
      longitude: 10.000654,
      zoom: 13
    }
  },
  {
    name: 'Dusseldorf',
    location: {
      latitude: 51.225402,
      longitude: 6.776314,
      zoom: 13
    }
  }
] as const;

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id'
}

export enum APIRoute {
  Offers = 'offers',
  Login = '/login',
  Logout= '/logout'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum MapMarkers {
  Default = 'markup/img/pin.svg',
  Active = 'markup/img/pin-active.svg'
}

const SortingMap = {
  Popular: 'Popular',
  LowToHigh: 'Price: low to high',
  HighToLow: 'Price: high to low',
  TopRated: 'Top rated first',
} as const;

const MAX_COUNT_NEAR_PLACES = 3;

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

export const TIMEOUT_SHOW_ERROR = 2000;

export {CITIES, propsByPlace, LimitCharactersEnter, MAX_COUNT_NEAR_PLACES, SortingMap};
