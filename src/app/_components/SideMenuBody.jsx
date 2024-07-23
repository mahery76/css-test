import React from "react";
import styles from "./SideMenu.module.css";
import Image from "next/image";
import myTemplateIcon from "@/public/icons/myTemplateIcon.png";
import SideMenuBodySearch from "./SideMenuBodySearch"
import SideMenuBodyBoards from "./SideMenuBodyBoards"
function SideMenuBody() {
  return (
    <div className={styles.SideMenuBody}>
      <div className={styles.SideMenuBodyMyTemplates}>
        <Image src={myTemplateIcon} alt="" width={18} height={20} />
        <h5>My templates</h5>
      </div>
      <SideMenuBodySearch />
      <SideMenuBodyBoards />

    </div>
  );
}

export default SideMenuBody;
