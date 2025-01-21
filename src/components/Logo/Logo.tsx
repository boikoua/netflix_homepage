import styles from './Logo.module.scss';
import logoImg from './../../assets/images/header/logo.png';

const Logo = () => (
  <a className={styles.logo} href="#">
    <img src={logoImg} alt="Netflix Logo" />
  </a>
);

export default Logo;
