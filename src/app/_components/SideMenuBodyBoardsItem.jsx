import React from "react";
import styles from "./SideMenu.module.css";
import Image from "next/image";
import filesIcon from "@/public/icons/filesIcon.png";

function SideMenuBodyBoardsItem({job}) {
  return (
    <div className={styles.SideMenuItems}>
    <Image src={filesIcon} alt="" width={18} height={24} />
    <p>{job}</p>
  </div>
  )
}

export default SideMenuBodyBoardsItem