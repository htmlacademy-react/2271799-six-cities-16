import { CITIES } from '../../const';

function cityItem(cityName: string) {
  return (
    <li className="locations__item" key={cityName}>
      <a className="locations__item-link tabs__item" href="#">
        <span>{cityName}</span>
      </a>
    </li>
  );
}

function Cities(): JSX.Element {
  return (
    <ul className="locations__list tabs__list">
      {CITIES.map((cityName) => cityItem(cityName))}
    </ul>
  );
}

export default Cities;
