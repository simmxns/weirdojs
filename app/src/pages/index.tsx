import GlassLayout from '@/components/GlassLayout';
import Header from '@/components/Header';
import { Helmet } from 'react-helmet';
import * as styles from '@/styles/layouts/index.module.sass';
import KeyButton from '@/components/KeyButton';
import { navigate } from 'gatsby';
import { useQuiz } from '@/hooks/useQuiz';

export default function IndexPage() {
  const { resetGame } = useQuiz();

  const callbackHandler = () => {
    resetGame();
    navigate('/quiz');
  };

  return (
    <>
      <Helmet>
        <title>Weirdo.js</title>
        <meta name="description" content="Home/Landing page of the website" />
      </Helmet>
      <Header view="home" />
      <main className={styles.indexHero}>
        <GlassLayout>
          <section className={styles.glassHero}>
            <h1 className={styles.title}>Is JS a weirdo?</h1>
            <p className={styles.description}>
              The actual name of javascript is ECMAScript, (javascript btw is
              just a trademark by Sun Mycrosystems), this really doesn&apos;t
              matter here but I just wanted to tell you. Js forever been a
              fairly soft typing language and on top of this, the first version
              of this language was created in just 10 days, surprised right? but
              that&apos;s not all it is also backward compatible with its
              previous versions for this and surely other things will be makes
              itself known as a peculiarly rare language. <br />
              <br />I will present you with a few short multiple choice
              questions that you must solve under your own logic, which will
              demonstrate you why <b>&quot;javascript is a weirdo&quot;</b>.
            </p>
            <div className={styles.startWrapper}>
              <KeyButton keyType="space" callback={callbackHandler} />
              <strong className={styles.startText}>to start the quiz</strong>
            </div>
          </section>
        </GlassLayout>
      </main>
    </>
  );
}
