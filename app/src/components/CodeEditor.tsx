import { ReactElement } from 'react';
import * as styles from '@/styles/components/CodeEditor.module.sass';

export default function EditorCode(): ReactElement {
  const code = `/**
  * 404
  * Woops.
  * The page you are looking for hasn't been found, apologize.
  */`;

  return (
    <div className={styles.editorBody}>
      <ul className={styles.editorNumberLine}>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
      </ul>
      <textarea
        defaultValue={code}
        rows={6}
        cols={80}
        className={`${styles.editorCode}`}
      />
    </div>
  );
}
