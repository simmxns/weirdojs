import AnswerButton from '@/components/AnswerButton';
import CodeSnippet from '@/components/CodeSnippet';
import GlassWrapper from '@/components/GlassWrapper';
import Header from '@/components/Header';
import KeyButton from '@/components/KeyButton';
import Pill from '@/components/Pills';
import '@/styles/layouts/index.sass';

export default function IndexPage() {
  return (
    <>
      <Header />
      <KeyButton keyType="space" />
      <KeyButton keyType="esc" />
      <GlassWrapper>
        <h1 style={{ color: 'white' }}>Is JS a weirdo?</h1>
      </GlassWrapper>
      <Pill type="timer" />
      <Pill type="tasks" />
      <CodeSnippet code="NaN + 20 - (2 * !true)" />
      <AnswerButton keyType="q" answer="SyntaxError" />
      <AnswerButton keyType="w" answer="0" />
      <AnswerButton keyType="e" answer="NaN" />
      <AnswerButton keyType="r" answer="20" />
    </>
  );
}
