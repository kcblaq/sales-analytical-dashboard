import React, { useState } from "react";
import styles from "./right.module.css";
import { AiTwotoneBell, AiTwotoneEdit } from "react-icons/ai";
import { FcSmartphoneTablet, FcHeadset } from "react-icons/fc";
import { HiShoppingBag } from "react-icons/hi";
import { FaUsers } from "react-icons/fa";
import { BsSpeaker } from "react-icons/bs";

import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";
import { Row, Col } from "react-bootstrap";

function Right() {
  const [color, setColor] = useState("red");
  const [percent, setPercent] = useState(70);
  return (
    <div className={styles.right}>
      <div className={styles.topIcons}>
        <span className={styles.circleIcon}>
          <AiTwotoneBell />{" "}
        </span>
        <span className={styles.circleIcon}>
          {" "}
          <AiTwotoneEdit />
        </span>
      </div>
      <div className={styles.secondLayer}>
        <div className={styles.imageHolder}>
          <img src="building.jpeg" alt="house-top" className={styles.img} />
        </div>{" "}
        <br />
      </div>
      <h5> Konter Pulsa </h5>
      {/* firstBox  */}

      <div className={styles.box}>
        <div classname={styles.one}>
          <div className={styles.bag}>
            <HiShoppingBag className={styles.bag} />
          </div>
          <div className={styles.detail}>
            <div className={styles.number}>218</div>
            <div className={styles.products}>Products</div>
          </div>
        </div>

        <div className={styles.line}></div>

        {/* <span className={styles.two}>
          <FaUsers className={styles.bag} />
        </span> */}
        <div classname={styles.one}>
          <div className={styles.bag}>
            <FaUsers className={styles.bag} />
          </div>
          <div className={styles.detail}>
            <div className={styles.number}>2.580</div>
            <div className={styles.products}>Followers</div>
          </div>
        </div>
      </div>
      <span className={styles.left}> Reputation </span>
      <div className={styles.box2}>
        <div className={styles.bag}>
          <FaUsers className={styles.bag} />
        </div>
        <div className={styles.progressbar}>
          {" "}
          <Progress percent={85} status="error" />
        </div>
        {/* <div className={styles.bg}>
          <div
            style={{ width: `${percent}%`, backgroundColor: `${color}` }}
            className={styles.contain}
          ></div>
        </div> */}
      </div>

      {/* Recent orders */}

      <span className={styles.left}> Recent Orders </span>
      <div className={styles.box3}>
        <div className={styles.flexy}>
          <div>
            <FcSmartphoneTablet />{" "}
          </div>
          <div>
            {" "}
            <div className={styles.inn}>
              <span> Redme 4X</span>
              <span className={styles.faint}> 2 mins ago</span>
            </div>
          </div>

          <div>
            {" "}
            <span className={styles.green}> +$80.00</span>
          </div>
        </div>

        <div className={styles.flexy}>
          <div>
            <FcHeadset />{" "}
          </div>
          <div>
            {" "}
            <div className={styles.inn}>
              <span> Acer E1-421</span>
              <span className={styles.faint}> 2 mins ago</span>
            </div>
          </div>

          <div>
            {" "}
            <span className={styles.green}> +$80.00</span>
          </div>
        </div>

        <div className={styles.flexy}>
          <div>
            <BsSpeaker />{" "}
          </div>
          <div>
            {" "}
            <div className={styles.inn}>
              <span> Nikon D-3500</span>
              <span className={styles.faint}> 2 mins ago</span>
            </div>
          </div>

          <div>
            {" "}
            <span className={styles.green}> +$80.00</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Right;
