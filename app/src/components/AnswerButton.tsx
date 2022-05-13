import { forwardRef } from 'react';
import * as styles from '@/styles/components/AnswerButton.module.sass';
import KeyButton from './KeyButton';

const AnswerButton = forwardRef<HTMLParagraphElement, PropTypes>(
  ({ keyType, callback, answer }, ref) => (
    <div className={styles.answerButton}>
      <KeyButton
        className={styles.absKeyButton}
        keyType={keyType}
        callback={callback}
      />
      <p ref={ref}>{answer}</p>
    </div>
  )
)

export default AnswerButton;

interface PropTypes {
  answer: string;
  keyType: 'space' | 'esc' | 'right' | 'left' | 'q' | 'w' | 'e' | 'r';
  callback: (e?: Event) => void;
}
