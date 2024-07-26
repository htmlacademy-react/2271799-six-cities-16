import { Helmet } from 'react-helmet-async';
import {Link} from 'react-router-dom';
import { AppRoute } from '../../const';

function NotFound(): JSX.Element {
  return (
    <div className="page page--gray page--login">
      <Helmet>
        <title>6 городов. Страница не найдена</title>
      </Helmet>
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">404. Страница не найдена</h1>
            <form className="login__form form" action="#" method="post">
              <Link className="login__submit form__submit button" to={AppRoute.Main}>
                Вернуться на главную
              </Link>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
export default NotFound;
