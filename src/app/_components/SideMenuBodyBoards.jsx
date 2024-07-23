import React from "react";
import styles from "./SideMenu.module.css";
import Image from "next/image";
import myBoardsIcon from "@/public/icons/myBoardsIcon.png";
import plusIcon from "@/public/icons/plusIcon.png";
import SideMenuBodyBoardsItem from "./SideMenuBodyBoardsItem";
import SideMenuBodyBoardsAgent from "./SideMenuBodyBoardsAgent";

function SideMenuBodyBoards() {
  return (
    <div>
      <div className={styles.SideMenuBodyBoards}>
        <div className={styles.SideMenuItems}>
          <Image src={myBoardsIcon} alt="" width={18} height={18} />
          <h5>My Boards</h5>
        </div>
        <div className={styles.SideMenuBodyBoardsPlus}>
          <Image src={plusIcon} alt="" width={18} height={18} />
        </div>
      </div>
      <SideMenuBodyBoardsItem job="Board 1"/>
      <SideMenuBodyBoardsItem job="Board 2"/>
      <SideMenuBodyBoardsItem job="Board 3"/>
      <SideMenuBodyBoardsAgent job="Board agent 1"/>
      <SideMenuBodyBoardsAgent job="Board agent 1"/>
      <SideMenuBodyBoardsAgent job="Board agent 1"/>
    </div>
  );
}

export default SideMenuBodyBoards;
