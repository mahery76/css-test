import React from 'react'
import styles from "./SideMenu.module.css";
import Image from "next/image";
import carlaProfile from "@/public/images/carlaProfile.png";
import gearIcon from "@/public/icons/gearIcon.png";

function SideMenuFooter() {
  return (
    <div className={styles.SideMenuFooter}>
    <div className={styles.SideMenuItems}>
      <Image src={carlaProfile} alt="" width={35} height={35} />
      <h5>My Boards</h5>
    </div>
    <div className={styles.SideMenuFooterGear}>
      <Image src={gearIcon} alt="" width={18} height={18} />
    </div>
  </div>
  )
}

export default SideMenuFooter