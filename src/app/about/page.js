"use client";
import React from "react";
import styles from "./style.module.scss";
import { motion } from "framer-motion";
import { slideUp, staggerChildren, cardVariants } from "./animation";

export default function About() {
  return (
    <motion.section
      className={styles.aboutSection}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerChildren}
    >
      <div className={styles.container}>
        <motion.h2 className={styles.title} variants={slideUp}>
          About Me
        </motion.h2>
        <motion.p className={styles.text} variants={slideUp}>
          Hey, I&apos;m <span className={styles.highlight}>Saurabh Thapliyal</span>, a passionate{" "}
          <span className={styles.blue}>Developer & Designer</span> who loves crafting{" "}
          <span className={styles.italic}>beautiful, functional, and immersive digital experiences.</span> Whether it&apos;s
          designing sleek interfaces, writing clean code, or bringing ideas to life with smooth animations—I do it all.
        </motion.p>
        <motion.p className={styles.text} variants={slideUp}>
          I believe in creating{" "}
          <span className={styles.bold}>user-friendly, aesthetically pleasing, and performance-driven</span> websites &amp;
          applications. My approach blends <span className={styles.blue}>creativity &amp; problem-solving</span> to ensure
          every project I work on stands out and delivers real value.
        </motion.p>
        <motion.h3 className={styles.subtitle} variants={slideUp}>
          How I Can Help You
        </motion.h3>
        <motion.div className={styles.services} variants={staggerChildren}>
          <motion.div className={styles.card} variants={cardVariants}>
            <h4>Design</h4>
            <p>Crafting elegant UI/UX experiences.</p>
          </motion.div>
          <motion.div className={styles.card} variants={cardVariants}>
            <h4>Development</h4>
            <p>Writing clean, efficient, and scalable code.</p>
          </motion.div>
          <motion.div className={styles.card} variants={cardVariants}>
            <h4>The Full Package</h4>
            <p>End-to-end solutions, from ideation to deployment.</p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
