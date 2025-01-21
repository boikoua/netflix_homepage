import Poster from '../Poster';
import styles from './Carousel.module.scss';
import arrowIcon from './../../assets/images/icons/arrow.svg';
import { posters } from '../../api/posters';
import Age from '../Age';
import { useState } from 'react';

const Carousel = () => {
  const [step, setStep] = useState(1);

  const handlePlusStep = () => {
    setStep((prev) => prev + 1);
  };

  const handleMinusStep = () => {
    if (step > 1) {
      setStep((prev) => prev - 1);
    }
  };

  const showPosters = posters.map((item, index) => (
    <Poster key={index} link={item} />
  ));

  return (
    <section className={styles.carousel}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.top}>
            <h2 className={styles.title}>Popular this week</h2>

            <div className={styles.btns}>
              <button
                onClick={handleMinusStep}
                className={`${styles.btn} ${styles.disabled}`}
              >
                <img
                  src={arrowIcon}
                  style={{ transform: 'rotate(-180deg)' }}
                  alt="Left"
                />
              </button>

              <button onClick={handlePlusStep} className={styles.btn}>
                <img src={arrowIcon} alt="Right" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.posters} style={{ left: '-110px' }}>
          {showPosters}
        </div>

        <Age age={16} />
      </div>
    </section>
  );
};

export default Carousel;
