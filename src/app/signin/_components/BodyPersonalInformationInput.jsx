import React from "react";
import styles from "./Body.module.css";

function BodyPersonalInformationInput() {
  return (
    <div className={styles.BodyPersonalInformationInput}>
      <label htmlFor="firstName">First Name</label>
      <input type="text" id="firsName" />
    </div>
  );
}

export default BodyPersonalInformationInput;
