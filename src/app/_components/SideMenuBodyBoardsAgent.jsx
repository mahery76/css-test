import React from 'react'
import styles from "./SideMenu.module.css";
import Image from "next/image";
import lockIcon from "@/public/icons/lockIcon.png";

function SideMenuBodyBoardsAgent({job}) {
  return (
    <div className={styles.SideMenuItems}>
    <Image src={lockIcon} alt="" width={18} height={24} />
    <p>{job}</p>
  </div>
  )
}

export default SideMenuBodyBoardsAgent