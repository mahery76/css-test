import React from "react";
import styles from "./_components/Body.module.css";
import BodyPersonalInformation from './_components/BodyPersonalInformation'
import BodyShowProfile from "./_components/BodyShowProfile";
import BodyGetInTouch from "./_components/BodyGetInTouch";
import BodyFooter from "./_components/BodyFooter";
import BodyDeleteAccount from "./_components/BodyDeleteAccount";
import BodyPremiumAccount from "./_components/BodyPremiumAccount";
function page() {
  return (
    <div className={styles.body}>
      <BodyPremiumAccount />
      <BodyPersonalInformation />
      <BodyShowProfile />
      <BodyDeleteAccount />
      <BodyGetInTouch />
      <BodyFooter />
    </div>
  );
}

export default page;
