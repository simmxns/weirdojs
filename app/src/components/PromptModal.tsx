import { FormEvent, FunctionComponent } from 'react';
import { EditIcon } from './Icons';
import * as styles from '@/styles/components/PromptModal.module.sass';

const PromptModal: FunctionComponent<PropTypes> = function ({
  placeholder,
  show
}) {
  const onSubmitHandler = (evt: FormEvent) => {
    evt.preventDefault();
  };

  return (
    <div className={`${styles.modalBody} ${show ? styles.modalShow : ''}`}>
      <div className={styles.modalCardBody}>
        <form onSubmit={onSubmitHandler}>
          <div className={styles.modalIcon}>
            <EditIcon />
          </div>
          <div>
            <h4 className={styles.modalCardTitle}>Enter your name</h4>
            <p className={styles.modalCardText}>
              For join to the ranking. You can skip it to be anonymous
            </p>
          </div>
          <input
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
