import Line from '../Line';
import styles from './Genres.module.scss';

type Props = {
  genres: string[];
};

const Genres: React.FC<Props> = ({ genres }) => {
  const showGenres = genres
    .map((item) => item[0].toUpperCase() + item.slice(1))
    .reduce((acc: React.ReactNode[], genre, index) => {
      acc.push(<li key={genre}>{genre}</li>);
      if (index < genres.length - 1) {
        acc.push(<Line key={`line-${index}`} />);
      }
      return acc;
    }, []);

  return <ul className={styles.genres}>{showGenres}</ul>;
};

export default Genres;
