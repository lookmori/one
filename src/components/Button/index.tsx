import React from 'react'
import styles from './styles.module.css';
export default ({text}) => {
  return (
    <button className={styles.button}>
     {text}
    </button>
  )
}

// import Button from "@site/src/components/Button";
