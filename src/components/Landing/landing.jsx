"use client";

import styles from "../../styles/landing.module.scss";
import { motion } from "framer-motion";
import { slideUp } from "./animation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <motion.main
      data-scroll-section
      variants={slideUp}
      initial="initial"
      animate="enter"
      transition={{ duration: 0.8 }}
      className={styles.landing}
    >
      <h1 className={styles.heading}>
        Hi, <br />
        My <span className={styles.name}>Name</span> is{" "}
        <span className={styles.firstName}>Saurabh</span>{" "}
        <span className={styles.lastName}>Thapliyal</span>
      </h1>
      
      <h2 className={styles.subheading}>Web Developer/Designer</h2>
      
      <button className={styles.btn}>
        <Link
          href="/contact"
          prefetch={false}
          className="flex items-center gap-2 text-blue-500 hover:underline"
        >
          <ArrowRight size={16} />
          Get in touch
        </Link>
      </button>
    </motion.main>
  );
}