import { ChangeEvent, Fragment, useState } from 'react';
import { LimitCharactersEnter } from '../../const';

const ratingValue = {
  1: 'terribly',
  2: 'badly',
  3: 'not bad',
  4: 'good',
  5: 'perfect'
};

function ReviewForm(): JSX.Element {
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState(0);

  const handleCommentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setReviewText(event.target.value);
  };

  const handleRatingChange = (event: ChangeEvent<HTMLInputElement>) => {
    setRating(Number(event.target.value));
  };

  const isFormValid =
  reviewText.length >= LimitCharactersEnter.Min &&
  reviewText.length <= LimitCharactersEnter.Max &&
  rating;

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {Object.entries(ratingValue).map(([key, value]) => (
          <Fragment key={key}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              defaultValue={key}
              id={`${key}-stars`}
              type="radio"
              onChange={handleRatingChange}
              value={key}
            />
            <label
              htmlFor={`${key}-stars`}
              className="reviews__rating-label form__rating-label"
              title={value}
            >
              <svg className="form__star-image" width={37} height={33}>
                <use xlinkHref="#icon-star" />
              </svg>
            </label>
          </Fragment>
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={handleCommentChange}
        value={reviewText}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
                To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe your
                stay with at least{' '}
          <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!isFormValid}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewForm;
