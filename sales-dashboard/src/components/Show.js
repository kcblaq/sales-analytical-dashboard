import React from "react";
import Center from "./center-widget/center";
import Left from "./left-widget/left-widget";
import Right from "./right-widget/right";
import styles from "./show.module.css";

export default function Show() {
  return (
    <div>
      <div className={styles.main}>
        <div className={styles.left}>
          <Left />
       
        </div>
        <div className={styles.center}>
          <Center />
         
        </div>
        <div className={styles.right}>
          <Right />
        </div>
      </div>
    </div>
  );
}
