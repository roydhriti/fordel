import React, { FC } from 'react';
import styles from './CtaSection.module.scss';

interface CtaSectionProps {}

const CtaSection: FC<CtaSectionProps> = () => (
  <div className={styles.CtaSection}>
    CtaSection Component
  </div>
);

export default CtaSection;
