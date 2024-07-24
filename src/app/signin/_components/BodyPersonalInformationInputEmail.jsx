import React from "react";
import styles from "./Body.module.css";
import Image from "next/image";
import checkmark from "@/public/icons/checkmark.png";

function BodyPersonalInformationInputEmail() {
  return (
    <div className={styles.BodyPersonalInformationInputEmail}>
      <label htmlFor="firstName">Email</label>
      <div
        className={styles.BodyPersonalInformationInputEmailCheckmark}
      >
        <Image
          src={checkmark}
          alt=""
          width={20}
          height={20}
        />
      </div>
      <input
        type="mail"
        id="firsName"
        className={styles.BodyPersonalInformationInput}
      />
    </div>
  );
}

export default BodyPersonalInformationInputEmail;
