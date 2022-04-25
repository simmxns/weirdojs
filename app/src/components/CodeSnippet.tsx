import { FunctionComponent } from 'react';
import { CodeBlock, atomOneDark } from 'react-code-blocks';
import * as styles from '@/styles/components/CodeSnippet.module.sass';

interface PropTypes {
  code: string;
}

const CodeSnippet: FunctionComponent<PropTypes> = function ({ code }) {
  return (
    <div className={styles.codeSnippetBody}>
      <CodeBlock
        text={code}
        language={'javascript'}
        showLineNumbers={false}
        startingLineNumber={0}
        theme={atomOneDark}
      />
    </div>
  );
};

export default CodeSnippet;
