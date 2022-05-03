import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import * as styles from '@/styles/layouts/404.module.sass';
import { GoBackIcon } from '@/components/Icons';
import EditorCode from '@/components/CodeEditor';

export default function NotFoundPage() {
  return (
    <main className={styles.notFoundHero}>
      <Helmet>
        <title>404</title>
        <meta name="description" content="404 page (not found)" />
      </Helmet>
      <div className={styles.notFoundContent}>
        <h2 className={styles.notFoundTitle}>404.</h2>
        <EditorCode />
        <Link to="/" className={styles.goHomeWrapper}>
          <GoBackIcon className={styles.goBackIcon} />
          <p className={styles.goHome}>Go home</p>
        </Link>
      </div>
    </main>
  );
}
