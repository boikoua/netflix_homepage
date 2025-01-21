import styles from './Header.module.scss';
import Date from '../Date';
import Logo from '../Logo';
import searchIcon from './../../assets/images/icons/search.svg';
import User from '../User';
import Line from '../Line';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <Logo />

            <Line />

            <Date text="Friday July 8th" />
          </div>

          <div className={styles.right}>
            <img className={styles.search} src={searchIcon} alt="Search" />

            <User />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
