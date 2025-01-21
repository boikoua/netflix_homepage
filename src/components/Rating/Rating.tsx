import yellowStar from './../../assets/images/icons/star-yellow.svg';
import emptyStar from './../../assets/images/icons/star-empty.svg';
import styles from './Rating.module.scss';

type Props = {
  rating: number;
};

const Rating: React.FC<Props> = ({ rating }) => {
  const checkRating = [];

  for (let i = 0; i < rating; i++) {
    checkRating.push(true);
  }

  if (checkRating.length < 5) {
    for (let i = checkRating.length; i < 5; i++) {
      checkRating.push(false);
    }
  }

  const showRating = checkRating.map((item, index) => (
    <li key={index}>
      <img
        className={styles.star}
        src={item ? yellowStar : emptyStar}
        alt="star"
      />
    </li>
  ));

  return <ul className={styles.rating}>{showRating}</ul>;
};

export default Rating;
