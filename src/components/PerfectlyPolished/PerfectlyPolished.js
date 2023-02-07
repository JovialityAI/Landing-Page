import React from "react";

import { Heading, Section, Text } from "../../common.styled";
import styles from "./styles.module.css";

export const PerfectlyPolished = () => {
  return (
    <Section className={styles.box}>
      <div className={styles.boxWrapper}>
        <div className={styles.perfectlyPolishedContainer}>
          <Heading>Professional, Private, Friendly.</Heading>
          <div className={styles.perfectlyPolished}>
            <div>
              <h3 className={styles.title}>
                Don’t just process words -{" "}
                <span className={styles.blur}>build</span>{" "}
                <span className={styles.blur}>results</span>
              </h3>

              <Text className={styles.text}>
                Our AI uses advanced natural language processing and machine learning algorithms to provide personalized, evidence-based support to individuals experiencing mental health challenges. With our technology, you can receive support anytime, anywhere, without the wait or stigma often associated with traditional mental health care.

              </Text>
              <Text className={styles.text}>
                Whether you're looking to manage anxiety, improve relationships, or simply boost your overall wellbeing, our AI is here to support you every step of the way.
              </Text>
              <Text className={styles.text}>
              </Text>
            </div>
            <img
              src="/images/perfectlyPolished.png"
              alt="#"
              className={styles.image}
            />
          </div>{" "}
        </div>{" "}
      </div>
    </Section>
  );
};
