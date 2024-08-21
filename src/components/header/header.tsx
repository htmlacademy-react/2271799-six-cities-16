import { Link } from 'react-router-dom';
import Logo from '../logo/logo';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logoutAction } from '../../store/api-action';

type HeaderProps = {
  showNav?: boolean;
};

function Header({ showNav = true }: HeaderProps): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const handleLogoutClick = (evt: React.MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    dispatch(logoutAction());
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo />
          </div>
          {showNav && (
            <nav className="header__nav">
              <ul className="header__nav-list">
                {authorizationStatus === AuthorizationStatus.Auth && (
                  <li className="header__nav-item user">
                    <Link
                      className="header__nav-link header__nav-link--profile"
                      to={AppRoute.Favorites}
                    >
                      <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                      <span className="header__user-name user__name">
                        {user?.email}
                      </span>
                      <span className="header__favorite-count">3</span>
                    </Link>
                  </li>
                )}


                <li className="header__nav-item">
                  {authorizationStatus === AuthorizationStatus.Auth ?
                    <Link className="header__nav-link" to={AppRoute.Login} onClick={handleLogoutClick}>
                      <span className="header__signout">
                       Sign out
                      </span>
                    </Link> :
                    <Link className="header__nav-link" to={AppRoute.Login}>
                      <span className="header__signout">
                      Sign in
                      </span>
                    </Link>}

                </li>
              </ul>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
