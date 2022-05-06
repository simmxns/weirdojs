import { FunctionComponent, ReactElement } from 'react';
import * as styles from '@/styles/components/Header.module.sass';
import { Logo, GithubIcon, TranslateIcon } from './Icons';
import { Link } from 'gatsby';

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
