import React from "react";
import { Heading, Section, Text } from "../../common.styled";
import styles from "./styles.module.css";
import "./style.css";

const UnderstoodOurself = () => {
  const data = [
    {
      title: "Physical Activities",
      text: "Our mental health AI integrates physical activity into its support for comprehensive health improvement. It personalizes recommendations based on interests, goals, and capabilities, promoting positive mental and physical wellbeing.",
      image: "/images/physicalActivities.svg",
    },
    {
      title: "Healthy Nutrition",
      text: "Our mental health AI includes personalized nutrition recommendations as part of its holistic approach to promoting physical and mental wellbeing. It considers individual needs and goals for healthy eating.                          ",
      image: "/images/healthyNutrition.svg",
    },
    {
      title: "Proper Sleep",
      text: "Our mental health AI includes support for improving sleep habits as part of its holistic approach to wellbeing. It provides personalized guidance for better sleep, promoting physical and mental health.",
      image: "/images/properSleep.svg",
    },
  ];
  return (
    <Section>
      <Heading>
        Become your best self
      </Heading>
      <div className={styles.cardContainer}>
        {data.map((el, i) => (
          <div className={`${styles.cardWrapper}  cardContainer${i + 1}`}>
            <div className={`${styles.card} card${i + 1} card`} key={i}>
              <div>
                <h4 className={styles.title}>{el.title}</h4>
                <Text className={styles.text}>{el.text}</Text>
              </div>
              <img
                src={el.image}
                alt="#"
                className={`${styles.image} image${i + 1}`}
              />
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default UnderstoodOurself;
