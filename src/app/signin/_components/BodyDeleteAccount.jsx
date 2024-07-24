import React from "react";
import styles from "./Body.module.css";

function BodyDeleteAccount() {
  return (
    <div className={styles.BodyDeleteAccount}>
      <h3 className={styles.BodyDeleteAccountTitle}>Delete Account</h3>
      <div className={styles.BodyDeleteAccountDescription}>If you delete your account you'll be permanently removing it from our systems - you can't undo it.</div>
      <div className={styles.BodyDeleteAccountConfirm}>Yes, Delete my account</div>
    </div>
  )
}

export default BodyDeleteAccount