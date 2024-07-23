import React from "react";
import styles from "./SideMenu.module.css";
import Image from "next/image";
import searchIcon from "@/public/icons/searchIcon.png";
import SideMenuBodySearchItem from "./SideMenuBodySearchItem";
import SideMenuBodySearchRecent from "./SideMenuBodySearchRecent";

function SideMenuBodySearch() {
  return (
      <div>
        <div className={styles.SideMenuItems}>
          <Image src={searchIcon} alt="" width={18} height={18} />
          <h5>Search</h5>
        </div>
        <SideMenuBodySearchItem job="Software Engineer"/>
        <SideMenuBodySearchItem job="Computer hardware engineer"/>
        <SideMenuBodySearchItem job="Network Engineer"/>
        <SideMenuBodySearchItem job="Technical Support"/>
        <SideMenuBodySearchItem job="Network Administrator"/>
        <SideMenuBodySearchItem job="Management"/>
        <SideMenuBodySearchItem job="Data analysis"/>
        <SideMenuBodySearchItem job="Computer technician"/>

        <SideMenuBodySearchRecent job="Past search 1"/>
        <SideMenuBodySearchRecent job="Past search 2"/>
        <SideMenuBodySearchRecent job="Computer and information information"/>
        <SideMenuBodySearchRecent job="Database administrator"/>
        <SideMenuBodySearchRecent job="Computer security"/>
        <SideMenuBodySearchRecent job="Computer System Analyst"/>

      </div>
  );
}

export default SideMenuBodySearch;