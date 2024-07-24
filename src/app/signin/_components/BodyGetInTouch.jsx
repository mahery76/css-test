import React from "react";
import styles from "./Body.module.css";
import Link from "next/link";

function BodyGetInTouch() {
  return (
    <div className={styles.BodyGetInTouch}>
        <Link
          href="https://www.chatgpt.com"
          target="_blank"
          className={styles.BodyGetInTouchLink}
        >
          Get in touch with our support team 
        </Link>
      if you have any question or want to leave some feedback.
      We'll be happy to hear from you. 
    </div>
  )
}

export default BodyGetInTouch