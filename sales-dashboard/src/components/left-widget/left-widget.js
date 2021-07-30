import React from "react";
import styles from "./left.module.css";
import { AiFillCodepenCircle, AiFillSetting } from "react-icons/ai";
import { HiShoppingBag } from "react-icons/hi";
import { BsFillGridFill, BsFileEarmarkText } from "react-icons/bs";
import { FiSend } from "react-icons/fi";
import { FaUsers } from "react-icons/fa";

function Left() {
  return (
    <div className={styles.left}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.blue}>
            {" "}
            <AiFillCodepenCircle style={{ fontSize: "70px" }} />
          </div>{" "}
          <h3> Tumbas </h3>
        </div>

        <h4> Menu</h4>

        <div className={styles.items}>
          <span className={styles.blue}>
            <a href="#" className={styles.blueLink}>
              <BsFillGridFill /> Overview{" "}
            </a>
          </span>
          <div className={styles.blue}>
            <a href="#">
              <BsFileEarmarkText /> Orders
            </a>
          </div>
          <div className={styles.blue}>
            <a href="#">
              <HiShoppingBag /> Products
            </a>
          </div>
          <div className={styles.blue}>
            <a href="#">
              <AiFillSetting /> Settings
            </a>
          </div>
        </div>

        <h4 className="mt-4"> Business</h4>
        <div className={styles.items2}>
          <div className={styles.blue}>
            <a href="#">
              <FiSend /> Shipment
            </a>
          </div>
          <div className={styles.blue}>
            <a href="#">
              <FaUsers /> Employee
            </a>
          </div>
        </div>
        <div className={styles.footer}>
          &copy; Tumbas.2020
          <p>
            {" "}
            <i className={styles.tiny}>
              {" "}
              Platform for solution of all types of business to be more advanced
            </i>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Left;
