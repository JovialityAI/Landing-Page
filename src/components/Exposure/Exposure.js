import React from "react";
import { Heading, Section, Text } from "../../common.styled";
import styles from "./style.module.css";

export const Exposure = () => {
  return (
    <Section className={styles.wrapper}>
      <div className={styles.exposure} style={{ color: "#fff" }}>
        <img src="/images/exposure.png" alt="#" className={styles.background} />
        <Heading>
          Analyzing All Aspects of <br /> Mental Health
        </Heading>
        <div className={styles.firstDiv}>
          <div className={`${styles.box1} ${styles.box}`}>
            <img src="/images/learning 1.svg" alt="#" className={styles.icon} />
            <Text className={styles.text}>
              Daily tips and <br /> strategies for <br />managing <br /> mental health.
            </Text>
          </div>
          <div className={`${styles.box2} ${styles.box}`}>
            <img src="/images/learning 2.svg" alt="#" className={styles.icon} />{" "}
            <Text className={styles.text}>
              Constantly Learns <br /> from new data.
            </Text>
          </div>
        </div>
        <div className={styles.secondDiv}>
          <div className={styles.subdiv}>
            <div className={`${styles.box3} ${styles.box}`}>
              <img
                src="/images/learning 3.svg"
                alt="#"
                className={styles.icon}
              />{" "}
              <Text className={styles.text}>
                Personalized assessments<br />based on symptoms.
              </Text>
            </div>
            <div className={`${styles.box4} ${styles.box}`}>
              <img
                src="/images/learning 5.svg"
                alt="#"
                className={styles.icon}
              />{" "}
              <Text className={styles.text}>
                Easy connect to <br /> licensed therapists for<br /> one-on-one sessions.
              </Text>
            </div>
          </div>
          <div className={`${styles.box5} ${styles.box}`}>
            <img src="/images/learning 4.svg" alt="#" className={styles.icon} />{" "}
            <Text>
              Empathetic chatbot<br />for non-judgmental<br /> conversation.
            </Text>
          </div>
        </div>
      </div>
    </Section>
  );
};
