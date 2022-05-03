import * as styles from '@/styles/components/GlassLayout.module.sass'
import { FunctionComponent, ReactElement } from 'react';

interface PropTypes {
  children: ReactElement;
}

const GlassLayout: FunctionComponent<PropTypes> = function ({ children }) {
  return (
    <div className={styles.glassBody}>
      {children}
    </div>
  );
};

export default GlassLayout;
