import Line from '../Line';
import Genres from '../Genres';
import Rating from '../Rating';
import { testMovie as movie } from '../../api/movies';
import styles from './AboutMovie.module.scss';
import playIcon from './../../assets/images/icons/play.svg';

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
            <a href="#" className={`${styles.btn} ${styles.btnRed}`}>
              <span>Stream now</span>
              <img src={playIcon} alt="Play movie" />
            </a>
            <a href="#" className={`${styles.btn} ${styles.btnEmpty}`}>
              All episodes
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};

export default AboutMovie;
