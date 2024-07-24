import React from "react";
import styles from "./Body.module.css";

function BodyPersonalInformationInput({label, type}) {
  return (
    <div className={styles.BodyPersonalInformationInput}>
      <label htmlFor="firstName">{label}</label>
      <input type={type} id="firsName" className={styles.BodyPersonalInformationInput}/>
    </div>
  );
}

export default BodyPersonalInformationInput;
