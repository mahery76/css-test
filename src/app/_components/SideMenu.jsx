import React from "react";
import styles from "./SideMenu.module.css";
import SideMenuBody from "./SideMenuBody";
import SideMenuFooter from "./SideMenuFooter";
import SideMenuHeader from "./SideMenuHeader";
function SideMenu() {
  return (
    <div className={styles.sideMenu}>
      <div>
      <SideMenuHeader />
      <SideMenuBody />
      </div>
      <SideMenuFooter />
    </div>
  );
}

export default SideMenu;
