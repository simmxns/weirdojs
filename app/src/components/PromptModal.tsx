import { useRef } from 'react';
import { EditIcon } from './Icons';
import { useQuiz } from '@/hooks/useQuiz';
import type { FormEvent, FunctionComponent } from 'react';
import * as styles from '@/styles/components/PromptModal.module.sass';
import { navigate } from 'gatsby';

const PromptModal: FunctionComponent<PropTypes> = function ({
  placeholder,
  show
}) {
  const promptModal = useRef<HTMLInputElement>(null);
  const { collectName } = useQuiz();

  const onSubmitHandler = (evt: FormEvent) => {
    evt.preventDefault();
    collectName(promptModal?.current?.value || `Anonymous#${1}`);
    navigate('/leaderboard');
  };

  return (
    <div className={`${styles.modalBody} ${show ? styles.modalShow : ''}`}>
      <div className={styles.modalCardBody}>
        <div className={styles.modalIcon}>
          <EditIcon />
        </div>
        <div>
          <h4 className={styles.modalCardTitle}>Enter your name</h4>
          <p className={styles.modalCardText}>
            Enter your name, for join to the ranking. You can skip it to be
            anonymous.
          </p>
        </div>
        <form onSubmit={onSubmitHandler}>
          <input
            ref={promptModal}
            type="text"
            placeholder={placeholder}
            className={styles.modalInputText}
          />
          <input
            type="submit"
            value="Done"
            className={styles.modalInputSubmit}
          />
        </form>
      </div>
    </div>
  );
};

export default PromptModal;

interface PropTypes {
  placeholder: string;
  show: boolean;
}
