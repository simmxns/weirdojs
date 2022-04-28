import { FormEvent, ReactElement } from 'react';
import * as styles from '@/styles/components/PromptModal.module.sass';
import { EditIcon } from './Icons';

export default function PromptModal(): ReactElement {
  const onSubmitHandler = (evt: FormEvent) => {
    evt.preventDefault();
  };

  return (
    <div className={styles.modalBody}>
      <div className={styles.modalCardBody}>
        <form onSubmit={onSubmitHandler}>
          <div className={styles.modalIcon}>
            <EditIcon />
          </div>
          <div>
            <h4 className={styles.modalCardTitle}>Enter your name</h4>
            <p className={styles.modalCardText}>
              Enter your name for join to the ranking, you can skip it to be
              anonymous
            </p>
          </div>
          <input
            type="text"
            placeholder="Anonymous#3"
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
}
