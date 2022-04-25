import * as styles from '@/styles/components/GlassWrapper.module.sass'
import { FunctionComponent, ReactElement } from 'react';

interface PropTypes {
  children: ReactElement;
}

const GlassWrapper: FunctionComponent<PropTypes> = function ({ children }) {
  return (
    <div className={styles.glassBody}>
      {children}
    </div>
  );
};

export default GlassWrapper;
