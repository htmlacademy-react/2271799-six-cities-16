import cn from 'classnames';
import { SortingMap } from '../../const';
import { TSort } from '../../types/sort-type';
import { useState } from 'react';

type SortProps = {
  activeSort: TSort;
  onChange: (newSort: TSort) => void;
};

function Sort({activeSort, onChange}: SortProps) : JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function handleTypeClick() {
    setIsOpen((prevIsOpened) => !prevIsOpened);
  }

  const handleSortingItemClick = (type: TSort) => {
    onChange(type);
    setIsOpen(false);
  };

  const iconStyle = {
    transform: `translateY(-50%) ${isOpen ? 'rotate(180deg)' : ''}`,
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={handleTypeClick}>
        {SortingMap[activeSort]}
        <svg className="places__sorting-arrow" width={7} height={4} style={iconStyle}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className={cn('places__options', 'places__options--custom', {
        'places__options--opened': isOpen,
      })}
      >

        {(
          Object.entries(SortingMap) as [
            TSort,
            (typeof SortingMap)[TSort]
          ][]
        ).map(([type, label]) => (
          <li
            key={type}
            className={cn('places__option', {
              'places__option--active'  : activeSort === type,
            })}
            tabIndex={0}
            onClick={() => handleSortingItemClick(type)}
          >
            {label}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default Sort;
