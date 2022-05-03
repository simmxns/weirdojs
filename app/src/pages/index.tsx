import GlassLayout from '@/components/GlassLayout';
import Header from '@/components/Header';
import { Helmet } from 'react-helmet';
import * as styles from '@/styles/layouts/index.module.sass';
import KeyButton from '@/components/KeyButton';

export default function IndexPage() {
  return (
    <>
      <Helmet>
        <title>Weirdo.js</title>
        <meta name="description" content="Home/Landing page of the website" />
      </Helmet>
      <Header />
      <main className={styles.indexHero}>
        <GlassLayout>
          <div className={styles.glassHero}>
            <h1 className={styles.title}>Is JS a weirdo?</h1>
            <p className={styles.description}>
              The actual name of javascript is ECMAScript, (javascript btw is
              just a trademark by Sun Mycrosystems), this really doesn't matter
              here but I just wanted to tell you. Js forever been a fairly soft
              typing language and on top of this, the first version of this
              language was created in just 10 days, surprised right? but that's
              not all it is also backward compatible with its previous versions
              for this and surely other things will be makes itself known as a
              peculiarly rare language. <br />
              <br />I will present you with a few short multiple choice
              questions that you must solve under your own logic, which will
              demonstrate you why <b>"javascript is a weirdo"</b>.
            </p>
            <div className={styles.startWrapper}>
              <KeyButton keyType="space" callback={() => alert('hola')} />
              <strong className={styles.startText}>to start the quiz</strong>
            </div>
          </div>
        </GlassLayout>
      </main>
    </>
  );
}
