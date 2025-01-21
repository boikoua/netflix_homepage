import { IMovie } from '../../interfaces/IMovie';
import AboutMovie from '../AboutMovie';
import styles from './Main.module.scss';

const testMovie: IMovie = {
  title: 'Stranger Things',
  genres: ['drama', 'thriller', 'supernatural'],
  year: 2019,
  director: 'Shawn Levy',
  rating: 3,
  description:
    'In 1980s Indiana, a group of young friends witness supernatural forces and secret government exploits. As they search for answers, the children unravel a series of extraordinary mysteries.',
  seasons: 3,
  episodes: 5,
};

const Main = () => {
  return (
    <main className={styles.main}>
      <AboutMovie movie={testMovie} />
    </main>
  );
};

export default Main;
