import styles from './User.module.scss';
import userPhoto from './../../assets/images/header/user.png';

const User = () => {
  return (
    <div className={styles.user}>
      <img src={userPhoto} alt="User Photo" />
    </div>
  );
};

export default User;
