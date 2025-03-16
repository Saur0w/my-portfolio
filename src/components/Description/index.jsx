import styles from './style.module.scss';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { slideUp } from './animation';

export default function Description() {
    const descriptionRef = useRef(null);
    const isInView = useInView(descriptionRef, { triggerOnce: true, margin: "-100px 0px" });

    const phrase = "Hello, I'm Saurabh! As a motivated beginner in web development, I'm exploring the world of design and coding. I love bringing ideas to life with smooth animations and refined user interfaces. My goal is to build engaging, interactive websites and grow as a programmer—one project at a time.";

    return (
        <div ref={descriptionRef} className={styles.description}>
            <h2>Let's create something <br /><span>together</span></h2>
            <p>
                {phrase.split(" ").map((word, index) => (
                    <span key={index} className={styles.mask}>
                        <motion.span
                            variants={slideUp}
                            custom={index}
                            initial="closed"
                            animate={isInView ? "open" : "closed"}
                        >
                            {word}
                        </motion.span>
                    </span>
                ))}
            </p>
        </div>
    );
}
