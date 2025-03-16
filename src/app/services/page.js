'use client';
import { motion } from "framer-motion";
import styles from './style.module.scss';
import { containerVariants, itemVariants, fadeInUp } from './animation';

export default function Page() {
  return (
    <motion.div
      className={styles.container}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1 className={styles.title} variants={fadeInUp}>
        Services I Offer
      </motion.h1>
      <motion.p className={styles.subtitle} variants={fadeInUp}>
        I craft high-quality, modern web experiences that are responsive, fast, and SEO-friendly.
      </motion.p>

      <motion.div className={styles.services} variants={containerVariants}>
        {[
          { text: "Custom Website Development - Responsive, fast, and SEO-friendly websites tailored to your needs." },
          { text: "UI/UX Design Implementation - Bringing beautiful designs to life with clean code." },
          { text: "Next.js & React Development - Building modern web applications with the latest frameworks." },
          { text: "Performance Optimization - Speeding up your website for better user experience and SEO." },
        ].map((service, index) => (
          <motion.div key={index} className={styles.serviceItem} variants={itemVariants}>
            <p>{service.text}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}