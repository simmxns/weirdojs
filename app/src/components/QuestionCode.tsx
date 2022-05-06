import { FunctionComponent } from 'react';
import * as styles from '@/styles/components/QuestionCode.module.sass';

interface PropTypes {
  snippet: string;
}

const QuestionCode: FunctionComponent<PropTypes> = function ({ snippet }) {
  return (
    <div className={styles.codeSnippetBody}>
      <p className={styles.codeSnippetChevron}>{'>'}</p>
      <code lang="javascript" className={styles.codeSnippetCode}>
        {snippet}
      </code>
    </div>
  );
};

export default QuestionCode;
