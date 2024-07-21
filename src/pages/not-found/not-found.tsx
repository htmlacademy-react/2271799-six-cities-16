import { Helmet } from 'react-helmet-async';
import {Link} from 'react-router-dom';

function NotFound(): JSX.Element {
  return (
    <>
      <Helmet>
        <title>6 городов. Страница не найдена</title>
      </Helmet>
      <h1>404. Page not found</h1>
      <Link to="/">Вернуться на главную</Link>
    </>
  );
}
export default NotFound;
