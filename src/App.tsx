import { useEffect, useState } from 'react';
import cn from 'classnames';
import styles from './App.module.scss';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  const [showHeader, setShowHeader] = useState(false);
  const [showMain, setShowMain] = useState(false);
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowHeader(true);
    }, 300);

    setTimeout(() => {
      setShowMain(true);
    }, 800);

    setTimeout(() => {
      setShowFooter(true);
    }, 1200);
  }, []);

  return (
    <>
      <div
        className={cn(styles.blockHeader, {
          [styles.slideIn]: showHeader,
        })}
      >
        <Header />
      </div>
      <div
        className={cn(styles.blockMain, {
          [styles.slideIn]: showMain,
        })}
      >
        <Main />
      </div>
      <div
        className={cn(styles.blockFooter, {
          [styles.slideIn]: showFooter,
        })}
      >
        <Footer />
      </div>
    </>
  );
}

export default App;
