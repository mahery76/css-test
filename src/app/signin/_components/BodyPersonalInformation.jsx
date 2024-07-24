import React from "react";
import styles from "./Body.module.css";
import BodyPersonalInformationInput from "./BodyPersonalInformationInput";
import BodyPersonalInformationInputAddress from "./BodyPersonalInformationInputAddress";
import BodyPersonalInformationInputEmail from "./BodyPersonalInformationInputEmail";

function BodyPersonalInformation() {
  return (
    <div className={styles.BodyPersonalInformation}>
      <h1>Personal information</h1>
      <form action="" className={styles.BodyPersonalInformationForm}>
        <div className={styles.BodyPersonalInformationInputs}>
          <BodyPersonalInformationInput  label="First name"/>
          <BodyPersonalInformationInput  label="Last name"/>
          <BodyPersonalInformationInput  label="City name"/>
          <BodyPersonalInformationInput  label="Postal code"/>
          <BodyPersonalInformationInputAddress />
          <BodyPersonalInformationInputEmail />
          <BodyPersonalInformationInput label="Phone"/>
          <BodyPersonalInformationInput label="Password"/>
        </div>
        <div className={styles.BodyPersonalInformationProfile}>
          Profile picture
        </div>
      </form>
    </div>
  );
}

export default BodyPersonalInformation;
