import { FunctionComponent } from 'react';
import * as styles from '@/styles/components/AnswerButton.module.sass';
import KeyButton from './KeyButton';

interface PropTypes {
  answer: string;
  keyType: 'space' | 'esc' | 'right' | 'left' | 'q' | 'w' | 'e' | 'r';
  callback: () => void;
}

const AnswerButton: FunctionComponent<PropTypes> = function ({
  answer,
  keyType,
  callback
}) {
  return (
    <div className={styles.answerButton}>
      <KeyButton
        className={styles.absKeyButton}
        keyType={keyType}
        callback={callback}
      />
      <p>{answer}</p>
    </div>
  );
};

export default AnswerButton;
