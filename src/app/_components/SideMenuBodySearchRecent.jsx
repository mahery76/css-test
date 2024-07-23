import React from "react";
import styles from "./SideMenu.module.css";
import Image from "next/image";
import timeIcon from "@/public/icons/timeIcon.png";

function SideMenuBodySearchRecent({job}) {
  return (
    <div className={styles.SideMenuItems}>
      <Image src={timeIcon} alt="" width={16} height={16} />
      <p>{job}</p>
    </div>
  );
}

export default SideMenuBodySearchRecent;