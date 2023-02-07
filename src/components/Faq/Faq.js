import React from "react";
import { Section, Heading } from "../../common.styled";
import SingleFaq from "./SingleFaq/SingleFaq";
import styles from "./styles.module.css";

const Faq = () => {
  const data = [
    {
      question: "What is AI Mental Health Assistant ?",
      answer:
        "An AI mental health assistant is an AI tool that provides support, advice, and resources for improving mental health and well-being. It may include features like stress management, mood tracking, coping strategies, and professional resources.",
    },
    {
      question: "Is AI Mental Health Free ?",
      answer:
        "Your mental health AI is offering three free consultations to new users. This provides an opportunity for individuals to experience the benefits of the AI-powered technology and receive personalized support and guidance for their mental well-being. The three free sessions are an excellent starting point for those looking to improve their mental health and overall well-being, and they provide a risk-free way to explore the technology and its capabilities.",
    },
    {
      question: "Is AI Mental Health Safe & Trusted ?",
      answer:
        "It is an AI-based chat solution, that takes insights from Cognitive Behavioral Therapy (CBT) to offer mental health consultation. It is designed in such a way that you may feel talking to a real human being.. It is always responsive and makes effective interactions that make end users relieved and happier.",
    },
    {
      question: "How AI can be used in Mental Health ?",
      answer:
        "It is an AI-based chat solution, that takes insights from Cognitive Behavioral Therapy (CBT) to offer mental health consultation. It is designed in such a way that you may feel talking to a real human being.. It is always responsive and makes effective interactions that make end users relieved and happier.",
    },
  ];
  return (
    <div className={styles.faq}>
      <Section>
        <div className={styles.faqContainer}>
          <Heading>
            FREQUENTLY ASKED <br /> QUESTIONS
          </Heading>
          <div className={styles.faqs}>
            {data.map((el, i) => (
              <SingleFaq {...el} i={i} key={i} />
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Faq;
