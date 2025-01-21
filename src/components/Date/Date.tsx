import React from 'react';
import styles from './Date.module.scss';

type Props = {
  text: string;
};

const Date: React.FC<Props> = ({ text }) => (
  <span className={styles.date}>{text}</span>
);

export default Date;
