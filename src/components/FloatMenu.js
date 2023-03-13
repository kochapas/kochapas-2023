import { useState } from "react";
import styles from "@/styles/FloatMenu.module.css";

export const FloatMenu = ({ children }) => {
  return (
    <div className="">
      <div id={styles["float-menu"]} className="">
        <div className={`${styles["float-item"]} d-flex bg-lilac text-end overflow-hidden mb-2`}>
          <p>YESSSSSSSSSSSSS NO</p>
        </div>
        <div className={`${styles["float-item"]} d-flex bg-lilac text-end overflow-hidden mb-2`}>
          <p>YESSSSSSSSSSSSS NO</p>
        </div>
      </div>
      {children}
    </div>
  )
}
