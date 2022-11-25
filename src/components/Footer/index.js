import React from "react";
import styles from "./style.module.scss";
import { clsx } from "clsx";

export const Footer = () => {
  return (
    <div className={clsx(styles.footer)}>
      <span>Copyright © Thanh Cong</span>
      <p>thanhcong.business1@gmail.com</p>
    </div>
  );
};
