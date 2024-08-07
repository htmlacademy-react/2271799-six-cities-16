import dayjs from 'dayjs';
import { TReviews } from '../../types/reviews-type';
import ReviewForm from './review-form';

type ReviewsProps = {
  reviews: TReviews[];
}

function Reviews({reviews}: ReviewsProps): JSX.Element {
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
      Reviews · <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {reviews.map((item) => (
          <li className="reviews__item" key={item.id}>
            <div className="reviews__user user">
              <div className="reviews__avatar-wrapper user__avatar-wrapper">
                <img
                  className="reviews__avatar user__avatar"
                  src={item.user.avatarUrl}
                  width={54}
                  height={54}
                  alt="Reviews avatar"
                />
              </div>
              <span className="reviews__user-name">{item.user.name}</span>
            </div>
            <div className="reviews__info">
              <div className="reviews__rating rating">
                <div className="reviews__stars rating__stars">
                  <span style={{ width: '80%' }} />
                  <span className="visually-hidden">Rating</span>
                </div>
              </div>
              <p className="reviews__text">
                {item.comment}
              </p>
              <time className="reviews__time" dateTime="2019-04-24">
                {dayjs(item.date).format('MMMM YYYY')}
              </time>
            </div>
          </li>
        ))}
      </ul>
      <ReviewForm />
    </section>
  );
}

export default Reviews;
