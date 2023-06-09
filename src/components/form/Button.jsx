import React from 'react';
import styles from './Button.module.css';
function Button({ children, ...rest }) {
  return (
    <button {...rest} className={styles.button}>
      {children}
    </button>
  );
}

export default Button;
