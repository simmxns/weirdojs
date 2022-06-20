import { useEffect, useState } from 'react';
import { useQuiz } from '@/hooks/useQuiz';
import type {
  FunctionComponent,
  KeyboardEventHandler,
  MouseEventHandler
} from 'react';
import type { ControlKeys, GameKeys } from '@/types';
import * as styles from '@/styles/components/KeyButton.module.sass';

const KeyButton: FunctionComponent<PropTypes> = function ({
  keyType,
  callback,
  answer,
  className
}) {
  const { collectAnswers } = useQuiz();
  const [active, setActive] = useState(false);
  const [isSquare, setIsSquare] = useState(false);
  const rgxGameKeys = /\b(q|w|e|r)\b/;
  const rgxEscSpaceKeys = /\b(space|esc)\b/;

  const keyUp = (evt: any) => {
    if (evt.code === allKeys[keyType]) {
      setActive(false);
      callback(evt);
    }

    if (evt.code === PropsResolver.gameKeys[keyType as GameKeys]) {
      collectAnswers(answer as string);
    }
  };

  const keyDown = (evt: any) => {
    if (evt.code === allKeys[keyType]) {
      setActive(true);
    }
  };

  const onMouseDownHandler = () => setActive(true);
  const onMouseUpHandler = (evt: any) => {
    if (keyType.match(rgxGameKeys) !== null) {
      collectAnswers(answer as string);
    }

    setActive(false);
    callback(evt);
  };

  useEffect(() => {
    setIsSquare(keyType.match(rgxEscSpaceKeys) === null);

    document.addEventListener('keydown', keyDown);
    document.addEventListener('keyup', keyUp);

    return () => {
      document.removeEventListener('keydown', keyDown);
      document.removeEventListener('keyup', keyUp);
    };
  }, [keyDown, keyUp]);

  return (
    <div className={`${className ? className : ''}`}>
      <button
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

interface PropTypes {
  keyType: GameKeys | ControlKeys;
  callback: (
    event?:
      | MouseEventHandler<HTMLButtonElement>
      | KeyboardEventHandler<HTMLButtonElement>
      | unknown
  ) => void;
  answer?: string;
  className?: string;
}

const PropsResolver = {
  charKey: {
    space: 'space',
    esc: 'esc',
    right: '›',
    left: '‹',
    q: 'Q',
    w: 'W',
    e: 'E',
    r: 'R'
  },
  contorlKeys: {
    space: 'Space',
    esc: 'Escape',
    right: 'ArrowRight',
    left: 'ArrowLeft'
  },
  gameKeys: {
    q: 'KeyQ',
    w: 'KeyW',
    e: 'KeyE',
    r: 'KeyR'
  }
};

const allKeys = {
  ...PropsResolver.contorlKeys,
  ...PropsResolver.gameKeys
};
