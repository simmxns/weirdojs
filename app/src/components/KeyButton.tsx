import * as styles from '@/styles/components/KeyButton.module.sass';
import { useEffect, useState, FunctionComponent } from 'react';

const PropsResolver = {
  charKey: {
    space: 'space',
    esc: 'esc',
    right: '>',
    left: '<',
    q: 'Q',
    w: 'W',
    e: 'E',
    r: 'R'
  },
  keyCode: {
    space: 'Space',
    esc: 'Escape',
    right: 'ArrowRight',
    left: 'ArrowLeft',
    q: 'KeyQ',
    w: 'KeyW',
    e: 'KeyE',
    r: 'KeyR'
  }
};

interface PropTypes {
  keyType: 'space' | 'esc' | 'right' | 'left' | 'q' | 'w' | 'e' | 'r';
  callback: () => void;
  className?: string;
}

const KeyButton: FunctionComponent<PropTypes> = function ({
  keyType,
  className,
  callback
}) {
  const [active, setActive] = useState(false);
  const [isSquare, setIsSquare] = useState(false);

  useEffect(() => {
    setIsSquare(keyType.match(/\b(space|esc)\b/) === null);

    document.addEventListener('keydown', (e: KeyboardEvent) => {
      if (e.code === PropsResolver.keyCode[keyType]) setActive(true);
    });
    document.addEventListener('keyup', (e: KeyboardEvent) => {
      if (e.code === PropsResolver.keyCode[keyType]) setActive(false);
    });
  });

  const onMouseDownHandler = () => setActive(true);
  const onMouseUpHandler = () => setActive(false);

  return (
    <div className={`${className ? className : ''}`}>
      <button
        onClick={() => callback()}
        onMouseDown={onMouseDownHandler}
        onMouseUp={onMouseUpHandler}
        className={styles.keyButtonWrapper}
      >
        <div
          className={`${styles.keyButton} ${
            active
              ? isSquare
                ? styles.keyButtonActive
                : styles.keyButtonActiveRec
              : ''
          }
          ${isSquare ? styles.keyButtonSquare : styles.keyButtonRectangle}`}
        >
          <p className={styles.textKeyButton}>
            {PropsResolver.charKey[keyType]}
          </p>
        </div>
        <div
          className={`${styles.keyShadow} ${
            isSquare ? styles.keyButtonSquare : styles.keyButtonRectangle
          }`}
        >
          <p className={styles.textShadow}>{PropsResolver.charKey[keyType]}</p>
        </div>
      </button>
    </div>
  );
};

export default KeyButton;
