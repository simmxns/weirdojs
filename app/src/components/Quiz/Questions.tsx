import { FunctionComponent } from 'react';
import QuestionCode from '../QuestionCode';
import * as styles from '@/styles/components/Quiz.module.sass';

const Questions: FunctionComponent<PropTypes> = function ({ obj, index }) {

  return (
        <div className={styles.questionsWrapper}>
          <QuestionCode snippet={obj[index].question} />
        </div>
  );
}

export default Questions

interface PropTypes {
  obj: any[]
  index: number
}