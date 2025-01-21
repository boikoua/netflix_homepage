import React from 'react';
import styles from './Poster.module.scss';

type Props = {
  link: string;
};

const Poster: React.FC<Props> = ({ link }) => {
  return (
    <article className={styles.poster}>
      <img src={link} alt="Poster" />
    </article>
  );
};

export default Poster;
