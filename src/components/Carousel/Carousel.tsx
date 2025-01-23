import Poster from '../Poster';
import styles from './Carousel.module.scss';
import arrowIcon from './../../assets/images/icons/arrow.svg';
import { posters } from '../../api/posters';
import Age from '../Age';
import { useState } from 'react';

const Carousel = () => {
  const [step, setStep] = useState(0);

  const handleRightClick = () => {
    setStep((prev) => prev + 1);
  };

  const handleLeftClick = () => {
    if (step) {
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
                onClick={handleLeftClick}
                className={`${styles.btn} ${styles.disabled}`}
                disabled={step === 0}
              >
                <img
                  src={arrowIcon}
                  style={{ transform: 'rotate(-180deg)' }}
                  alt="Left"
                />
              </button>

              <button
                onClick={handleRightClick}
                className={styles.btn}
                disabled={step === posters.length - 1}
              >
                <img src={arrowIcon} alt="Right" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.postersWrapper}>
          <div className={styles.posters} style={{ right: `${-188 * step}px` }}>
            {showPosters}
          </div>
        </div>

        <Age age={16} />
      </div>
    </section>
  );
};

export default Carousel;
