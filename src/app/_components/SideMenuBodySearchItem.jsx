import React from "react";
import styles from "./SideMenu.module.css";
import Image from "next/image";
import startIcon from "@/public/icons/startIcon.png";

function SideMenuBodySearchItem({job}) {
  return (
    <div className={styles.SideMenuItems}>
      <Image src={startIcon} alt="" width={18} height={24} />
      <p>{job}</p>
    </div>
  );
}

export default SideMenuBodySearchItem;
