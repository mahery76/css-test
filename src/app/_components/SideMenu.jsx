import React from "react";
import styles from "./SideMenu.module.css";
import SideMenuBody from "./SideMenuBody";
import SideMenuFooter from "./SideMenuFooter";
import SideMenuHeader from "./SideMenuHeader";
function SideMenu() {
  return (
    <div className={styles.sideMenu}>
      <SideMenuHeader />
      <SideMenuBody />
      <SideMenuFooter />
    </div>
  );
}

export default SideMenu;
