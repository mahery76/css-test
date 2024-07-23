import React from "react";
import styles from "./SideMenu.module.css";
import Image from "next/image";
import logo from "@/public/images/logo.png";

function SideMenuHeader() {
  return (
    <div className={styles.SideMenuHeader}>
      <Image src={logo} alt="" width={140} height={30} />
    </div>
  );
}

export default SideMenuHeader;
