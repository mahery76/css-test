import React from "react";
import styles from "./Body.module.css";
import Link from "next/link";
function BodyShowProfile() {
  return (
    <div className={styles.BodyShowProfile}>
      <input type="checkbox" />
      <div>
        Show my profile to serious employers on
        <Link
          href="https://www.hirethebest.io"
          target="_blank"
          className={styles.BodyPersonalInformationInputLinkResumeDone}
        >
          hirethebest.io
        </Link>
        for free 
      </div>
    </div>
  );
}

export default BodyShowProfile;
