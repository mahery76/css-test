import React from "react";
import styles from "./Body.module.css";

function BodyPersonalInformationInputAddress() {
  return (
    <div className={styles.BodyPersonalInformationInputAddress}>
      <label htmlFor="firstName">Address</label>
      <input
        type="text"
        id="firsName"
        className={styles.BodyPersonalInformationInput}
      />
    </div>
  );
}

export default BodyPersonalInformationInputAddress;
