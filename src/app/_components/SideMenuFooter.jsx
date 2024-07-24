import React from "react";
import styles from "./SideMenu.module.css";
import Image from "next/image";
import carlaProfile from "@/public/images/carlaProfile.png";
import gearIcon from "@/public/icons/gearIcon.png";
import Link from "next/link";

function SideMenuFooter() {
  return (
    <div className={styles.SideMenuFooter}>
      <div className={styles.SideMenuItems}>
        <Image src={carlaProfile} alt="" width={35} height={35} />
        <h5>Carla</h5>
      </div>
      <div className={styles.SideMenuFooterGear}>
        <Link
          href="https://www.chatgpt.com"
          target="_blank"
        >
          <Image src={gearIcon} alt="" width={18} height={18} />
        </Link>
      </div>
    </div>
  );
}

export default SideMenuFooter;
