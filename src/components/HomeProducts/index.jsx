import React from "react";
import styles from "./products.module.scss";

export default function Products({ reverse, children, gender }) {

  if (gender === 'DIGITAL') return (
    <div
      className={styles.containerTwo}
      style={{ direction: reverse ? "rtl" : "" }}
    >
      {
        children.map((item) =>
          <div className={` ${item.props.position % 2 === 0 ? styles.par : styles.noPar} `}>{item}</div>
        )
      }
    </div>
  )

  return (
    <div
      className={styles.container}
      style={{ direction: reverse ? "rtl" : "" }}
    >
      {
        children.map((item) =>
          <div className={` ${item.props.position % 2 === 0 ? styles.par : styles.noPar} `}>{item}</div>
        )
      }
    </div>
  );
}
