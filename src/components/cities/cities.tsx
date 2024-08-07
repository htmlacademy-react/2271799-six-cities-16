import { Link } from 'react-router-dom';
import { CITIES } from '../../const';
import { TCity } from '../../types/cities-type';

type CityProps = {
  selectedCity: TCity | null;
  onCityClick: (cityName: string) => void;
}

function Cities({selectedCity, onCityClick }: CityProps): JSX.Element {

  const cityItem = (cityName: TCity) => (
    <li className="locations__item" key={cityName.name} onClick={() => onCityClick(cityName.name)}>
      <Link className={`locations__item-link tabs__item ${selectedCity?.name === cityName.name ? 'tabs__item--active' : ''}`} to='#'>
        <span>{cityName.name}</span>
      </Link>
    </li>
  );

  return (
    <ul className="locations__list tabs__list">
      {CITIES.map((cityName) => cityItem(cityName))}
    </ul>
  );
}

export default Cities;
