import { FunctionComponent, useEffect, useRef } from 'react';
import * as styles from '@/styles/components/StatsPanel.module.sass';

interface PropTypes {
  content: string;
  limit: number;
}

interface CanvasState {
  posX: number;
  posY: number;
  fps: number;
  onePercent: number;
}

function createStroke(canvas: HTMLCanvasElement, limit: number) {
  const canvasCtx = canvas.getContext('2d')!;
  const canvasState: CanvasState = {
    posX: canvas.width / 2,
    posY: canvas.height / 2,
    fps: 1000 / 200,
    onePercent: 360 / 100
  };
  const result = canvasState.onePercent * limit;
  canvasCtx.lineCap = 'round';
  arcMove();

  const { posX, posY, fps } = canvasState;
  function arcMove() {
    let deegres = 0;
    const arcInterval = setInterval(() => {
      deegres += 1;
      canvasCtx.clearRect(0, 0, canvas.width, canvas.height);

      canvasCtx.beginPath();
      canvasCtx.strokeStyle = '#fc9788';
      canvasCtx.lineWidth = 10;
      canvasCtx.arc(
        posX,
        posY,
        70,
        (Math.PI / 180) * 270,
        (Math.PI / 180) * (270 + deegres)
      );
      canvasCtx.stroke();
      if (deegres >= result) clearInterval(arcInterval);
    }, fps);
  }
}

const CirclePercent: FunctionComponent<PropTypes> = function ({
  content,
  limit
}) {
  const canvasCircle = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const { current: canvasEl } = canvasCircle;
    createStroke(canvasEl!, limit);
  });

  return (
    <div className={styles.canvasWrapper}>
      <canvas ref={canvasCircle} className={styles.canvasCircle} />
      <span className={styles.strokePercent}>{content}</span>
    </div>
  );
};

export default CirclePercent;
