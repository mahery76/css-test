import React from "react";
import styles from "./Body.module.css";

function BodyDeleteAccount() {
  return (
    <div className={styles.BodyDeleteAccount}>
      <div>Delete Account</div>
      <div>If you delete your account you'll be permanently removing it from our systems - you can't undo it.</div>
      <div>Yes, Delete my account</div>
      <div>Delete Account</div>
    </div>
  )
}

export default BodyDeleteAccount