import React from "react";
import { FaBeer } from "react-icons/fa";
import { AiFillAppstore, AiFillCodepenCircle } from "react-icons/ai";
import styles from "./show.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Show() {
  return (
    <div>
      <div className={styles.main}>
        <div className={styles.left}>
          <h3 className={styles.blue}>
            {" "}
            <AiFillCodepenCircle /> Tumbas{" "}
          </h3>
        </div>
        <div className={styles.center}>
          <h3> Center widget </h3>
        </div>
        <div className={styles.right}>
          <h2>
            Hello world <FontAwesomeIcon icon="check-square" />
          </h2>
        </div>
      </div>
    </div>
  );
}
