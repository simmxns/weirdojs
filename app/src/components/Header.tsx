import { Link } from 'gatsby';
import { FunctionComponent } from 'react';
import { Logo, GithubIcon, TranslateIcon } from './Icons';
import * as styles from '@/styles/components/Header.module.sass';

const Header: FunctionComponent<PropTypes> = function ({ view }) {
  return (
    <header className={styles.headerBody}>
      <ul className={styles.leftSide}>
        <li className={view === 'home' ? styles.boldLink : ''}>
          <Link to="/">HOME</Link>
        </li>
        <li className={view === 'leaderboard' ? styles.boldLink : ''}>
          <Link to="/leaderboard">LEADERBOARD</Link>
        </li>
      </ul>
      <Logo className={styles.logo} />
      <ul className={styles.rightSide}>
        <li>
          <a href="https://github.com/simmxns/weirdojs">
            <GithubIcon className={styles.headerBtn} />
          </a>
        </li>
        <li>
          <button className={styles.headerBtn}>
            <TranslateIcon onClick={() => alert('changing lang...')} />
          </button>
        </li>
      </ul>
    </header>
  );
};

export default Header;

interface PropTypes {
  view?: 'home' | 'leaderboard';
}
