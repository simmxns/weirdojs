import AnswerButton from '@/components/AnswerButton';
import CodeSnippet from '@/components/CodeSnippet';
import GlassWrapper from '@/components/GlassWrapper';
import Header from '@/components/Header';
import KeyButton from '@/components/KeyButton';
import Pill from '@/components/Pills';
import PromptModal from '@/components/PromptModal';
import { Helmet } from 'react-helmet';
import '@/styles/layouts/index.sass';
import LongCard from '@/components/Leaderboard/LongCard';
import StatsPanel from '@/components/StatsPanel';

export default function IndexPage() {
  return (
    <>
      <Helmet>
        <title>Weirdo.js</title>
        <meta name="description" content="Home page of the Weirdo.js website" />
      </Helmet>
      <Header />
      <KeyButton keyType="space" />
      <KeyButton keyType="esc" />
      <GlassWrapper>
        <h1 style={{ color: 'white' }}>Is JS a weirdo?</h1>
      </GlassWrapper>
      <Pill type="timer" />
      <Pill type="tasks" />
      <CodeSnippet snippet="NaN + 20 - (2 * !true)" />
      <AnswerButton keyType="q" answer="SyntaxError" />
      <AnswerButton keyType="w" answer="0" />
      <AnswerButton keyType="e" answer="NaN" />
      <AnswerButton keyType="r" answer="20" />
      <LongCard
        country="usa"
        playerName="John Doe"
        time={[0, 1, 2]}
        correct={12}
        score={3000}
      />
      <PromptModal />
      <StatsPanel
        playerName="John Doe"
        position={1}
        correct={17}
        time={[0, 1, 2]}
        score={3000}
      />
    </>
  );
}
