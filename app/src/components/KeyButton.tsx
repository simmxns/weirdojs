import * as styles from '@/styles/components/KeyButton.module.sass';
import { useEffect, useState, FunctionComponent } from 'react';

enum KeyTypeResolver {
  space = 'space',
  esc = 'esc',
  right = '>',
  left = '<',
  q = 'Q',
  w = 'W',
  e = 'E',
  r = 'R'
}

interface PropTypes {
  keyType: 'space' | 'esc' | 'right' | 'left' | 'q' | 'w' | 'e' | 'r';
  className?: string
}

const KeyButton: FunctionComponent<PropTypes> = function ({ keyType, className }) {
  const [active, setActive] = useState(false);
  const [isSquare, setisSquare] = useState(false);

  useEffect(() => {
    setisSquare(keyType.match(/\b(space|esc)\b/) === null);
  });

  const onMouseUpHandler = () => setActive(false);
  const onMouseDownHandler = () => setActive(true);

  return (
    <button
      onMouseDown={onMouseDownHandler}
      onMouseUp={onMouseUpHandler}
      className={`${styles.globalKeyButton} ${className ? className : ''}`}
    >
      <div
        className={`${styles.keyButton} ${
          active ? styles.keyButtonActive : ''
        } ${isSquare ? styles.keyButtonSquare : styles.keyButtonRectangle}`}
      >
        <p className={styles.textKeyButton}>{KeyTypeResolver[keyType]}</p>
      </div>
      <div
        className={`${styles.keyShadow} ${
          isSquare ? styles.keyButtonSquare : styles.keyButtonRectangle
        }`}
      >
        <p className={styles.textShadow}>{KeyTypeResolver[keyType]}</p>
      </div>
    </button>
  );
};

export default KeyButton;
