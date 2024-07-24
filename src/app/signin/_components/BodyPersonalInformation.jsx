import React from "react";
import styles from "./Body.module.css";
import Image from "next/image";
import profile from "@/public/images/profile.png";
import BodyPersonalInformationInput from "./BodyPersonalInformationInput";
import BodyPersonalInformationInputAddress from "./BodyPersonalInformationInputAddress";
import BodyPersonalInformationInputEmail from "./BodyPersonalInformationInputEmail";
import Link from "next/link";

function BodyPersonalInformation() {
  return (
    <div className={styles.BodyPersonalInformation}>
      <h1>Personal information</h1>
      <form action="" className={styles.BodyPersonalInformationForm}>
        <div className={styles.BodyPersonalInformationInputs}>
          <BodyPersonalInformationInput type="text" label="First name" />
          <BodyPersonalInformationInput type="text" label="Last name" />
          <BodyPersonalInformationInput type="text" label="City name" />
          <BodyPersonalInformationInput type="number" label="Postal code" />
          <BodyPersonalInformationInputAddress />
          <BodyPersonalInformationInputEmail />
          <BodyPersonalInformationInput type="text" label="Phone" />
          <BodyPersonalInformationInput type="password" label="Password" />
          <div className={styles.BodyPersonalInformationInputLink}>
            Use this email to log in to your
            <Link
              href="https://www.resumedone.io"
              target="_blank"
              className={styles.BodyPersonalInformationInputLinkResumeDone}
            >
              resumedone.io
            </Link>
            account and receive notifications.
          </div>
          <input
            className={styles.BodyPersonalInformationInputSubmit}
            type="submit"
            value="Save"
          />
        </div>
        <div className={styles.BodyPersonalInformationProfile}>
          <Image src={profile} alt="" width={150} height={150} />
        </div>
      </form>
    </div>
  );
}

export default BodyPersonalInformation;
