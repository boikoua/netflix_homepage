import React from 'react';
import styles from './Age.module.scss';

type Props = {
  age: number;
};

const Age: React.FC<Props> = ({ age }) => {
  return (
    <div className={styles.age}>
      <div className={styles.left}></div>

      <div className={styles.right}>
        <span>{`${age}+`}</span>
      </div>
    </div>
  );
};

export default Age;
