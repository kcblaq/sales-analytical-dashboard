import React from "react";
import styles from "./center.module.css";

import { FiSearch } from "react-icons/fi";
import { HiShoppingBag, HiShoppingCart } from "react-icons/hi";
import { AiTwotonePieChart } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
import { FcHeadset, FcSmartphoneTablet } from "react-icons/fc";
import MyChart from "./Chart";

function Center() {
  return (
    <div className={styles.leftWidget}>
      <div className={styles.searchBox}>
        <span className={styles.icon}>
          {" "}
          <FiSearch />
        </span>
        <input
          type="text"
          placeholder="Search for product"
          className={styles.input}
        />
      </div>
      <div className={styles.overview}>
        <h3> Overview </h3>
      </div>

      <div className={styles.cardHolder}>
        <div className={styles.cards}>
          <div className={styles.leftCard}>
            <div>
              <HiShoppingBag className={styles.bag} />
            </div>
            <div className={styles.money}>$27,340.00</div>
            <div className={styles.total}>Total Sales</div>
          </div>

          <div className={styles.rightCard}>+24%</div>
        </div>
        <div className={styles.cards}>
          <div className={styles.leftCard}>
            <div>
              <AiTwotonePieChart className={styles.pie} />
            </div>
            <div className={styles.money}>$27,340.00</div>
            <div className={styles.total}>Total Expenses</div>
          </div>
          <div className={styles.rightCard2}>-32%</div>
        </div>
        <div className={styles.cards}>
          <div className={styles.leftCard}>
            <div>
              <IoIosPeople className={styles.people} />
            </div>
            <div className={styles.money}>18,260.00</div>
            <div className={styles.total}>Total Visitors</div>
          </div>
          <div className={styles.rightCard}>+48%</div>
        </div>
        <div className={styles.cards}>
          <div className={styles.leftCard}>
            <div>
              <HiShoppingCart className={styles.cart} />
            </div>
            <div className={styles.money}>11,340.00</div>
            <div className={styles.total}>Total Orders</div>
          </div>
          <div className={styles.rightCard2}>-12%</div>
        </div>
      </div>
      <div className={styles.chartHolder}>
        <h3> Income </h3>
        <MyChart />
      </div>

      {/* last card components  */}
      <div className={styles.popularProducts}>
        <h5> Popular products </h5>
        <div className={styles.first}>
          <div> photos</div>
          <div> Name</div>
          <div> Date</div>
          <div> Category</div>
          <div> Brand </div>
          <div> Price</div>
          <div> Status</div>
        </div>

        <div className={styles.second}>
          <div className={styles.grayBackground}>
            {" "}
            <FcHeadset />{" "}
          </div>
          <div>
            <div className={styles.bold}> Cowboy Hat</div>
            <div className={styles.faint}>
              {" "}
              <small>#2807856940</small>
            </div>
          </div>
          <div className={styles.bold}> Aug 12,2020</div>
          <div className={styles.bold}> Fashion</div>
          <div className={styles.bold}> Swallow </div>
          <div className={styles.green}> $99.89</div>
          <div>
            <div className={styles.bold}> Available</div>
            <div className={styles.faint}>
              {" "}
              <small> 18k viewers</small>
            </div>
          </div>
        </div>

        {/* third  row starts here */}
        <div className={styles.second}>
          <div className={styles.grayBackground}>
            {" "}
            <FcSmartphoneTablet />{" "}
          </div>
          <div>
            <div className={styles.bold}> Smartphone</div>
            <div className={styles.faint}>
              {" "}
              <small>#2807856940</small>
            </div>
          </div>
          <div className={styles.bold}> Aug 12,2020</div>
          <div className={styles.bold}> Gadget</div>
          <div className={styles.bold}> Mito </div>
          <div className={styles.green}> $99.89</div>
          <div>
            <div className={styles.bold}> Available</div>
            <div className={styles.faint}>
              {" "}
              <small> 18k viewers</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Center;
