import Line from '../Line';
import Genres from '../Genres';
import Rating from '../Rating';
import { testMovie as movie } from '../../api/movies';
import styles from './AboutMovie.module.scss';

const AboutMovie = () => {
  const {
    title,
    genres,
    year,
    director,
    description,
    rating,
    episodes,
    seasons,
  } = movie;

  return (
    <article className={styles.movie}>
      <div className="container">
        <div className={styles.wrapper}>
          <Genres genres={genres} />

          <h1 className={styles.title}>{title}</h1>

          <ul className={styles.info}>
            <li>{year}</li>
            <Line />
            <li>
              DIRECTOR: <span>{director}</span>
            </li>
            <Line />
            <li>
              seasons:{' '}
              <span>
                {seasons ? seasons : '-'} ({episodes ? episodes : '-'} Episodes)
              </span>
            </li>
          </ul>

          <p className={styles.description}>{description}</p>

          <Rating rating={rating} />

          <div className={styles.btns}>
            <button className={`${styles.btn} ${styles.btnRed}`}>
              Stream now
            </button>
            <button className={`${styles.btn} ${styles.btnEmpty}`}>
              All episodes
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default AboutMovie;
