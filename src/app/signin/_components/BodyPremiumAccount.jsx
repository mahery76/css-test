import React from "react";
import styles from "./Body.module.css";
import Image from "next/image";
import premiumAccount from "@/public/images/premiumAccount.png";

function BodyPremiumAccount() {
  return (
    <div className={styles.BodyPremiumAccount}>
        <Image 
        src={premiumAccount} 
        alt="" 
        width={80} 
        height={80} 
        />
      <div className={styles.premiumAccount}>
        <h1 className={styles.premiumAccountTitle}>Premium Account</h1>
        <div className={styles.premiumAccountDescription}>
          You have a premium account, granting you access to all the remarkable features offered by ResumeDone. With this privilege, you coan indulge in the freedom of downloading an unlimited number of resumes  and cover letters in both PDF and Word formats. 
        </div>
      </div>
    </div>
  );
}

export default BodyPremiumAccount;
