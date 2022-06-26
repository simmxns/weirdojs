import {
  FunctionComponent,
  KeyboardEventHandler,
  MouseEventHandler
} from 'react';
import KeyButton from './KeyButton';
import type { ControlKeys, GameKeys } from '@/types';
import * as styles from '@/styles/components/AnswerButton.module.sass';

const AnswerButton: FunctionComponent<PropTypes> = function ({
  keyType,
  callback,
  answer,
  stop
}) {
  return (
    <div className={styles.answerButton}>
      <KeyButton
        className={styles.absKeyButton}
        stop={stop}
        keyType={keyType}
        callback={callback}
        answer={answer}
      />
      <p>{answer}</p>
    </div>
  );
};

export default AnswerButton;

interface PropTypes {
  answer: string;
  keyType: GameKeys | ControlKeys;
  callback: (
    event?:
      | MouseEventHandler<HTMLButtonElement>
      | KeyboardEventHandler<HTMLButtonElement>
      | unknown
  ) => void;
  stop: boolean;
}
