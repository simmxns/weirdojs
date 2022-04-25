import { FunctionComponent } from 'react';
import * as styles from '@/styles/components/AnswerButton.module.sass';
import KeyButton from './KeyButton';

interface PropTypes {
  answer: string;
  keyType: 'space' | 'esc' | 'right' | 'left' | 'q' | 'w' | 'e' | 'r';
}

const AnswerButton: FunctionComponent<PropTypes> = function ({
  answer,
  keyType
}) {
  return (
    <div className={styles.answerButton}>
      <KeyButton className={styles.absKeyButton} keyType={keyType} />
      <p>{answer}</p>
    </div>
  );
};

export default AnswerButton;
