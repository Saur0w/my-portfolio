import styles from './style.module.scss';
import { useRef } from 'react';
import { useScroll, motion, useTransform } from 'framer-motion';
import Magnetic from '../../common/Magnetic';
import Rounded from '../../common/Rounded';
import Link from 'next/link';
export default function index() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end end"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [-100, 0]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

    return (
        <motion.div
            ref={container}
            className={styles.contact}
            style={{ opacity }}
        >
            <div className={styles.container}>
                <motion.div
                    className={styles.header}
                    style={{ y }}
                >
                    <h1>Let's work <br />together</h1>
                    <div className={styles.buttonWrapper}>
                        <Link href="/contact">
                            <Rounded backgroundColor="#455ce9">
                                <p>Get in touch</p>
                            </Rounded>
                        </Link>
                    </div>
                </motion.div>

                <div className={styles.content}>
                    <div className={styles.contactInfo}>
                        <h3>Contact Information</h3>
                        <div className={styles.infoItem}>
                            <span>Email:</span>
                            <Link href="mailto:sthapliyal085@gmail.com" className={styles.email}>
                            <Magnetic>
                                <p>sthapliyal085@gmail.com</p>
                            </Magnetic>
                            </Link>
                        </div>

                    </div>

                    <div className={styles.socials}>
                        <h3>Social Media</h3>
                        <div className={styles.socialLinks}>
                            <Magnetic>
                                <a href="https://www.linkedin.com/in/saurabh-thapliyal-76a0a6306/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                            </Magnetic>
                            <Magnetic>
                                <a href="https://github.com/Saur0w" target="_blank" rel="noopener noreferrer">GitHub</a>
                            </Magnetic>
                            <Magnetic>
                                <a href="https://x.com/sauroww" target="_blank" rel="noopener noreferrer">X</a>
                            </Magnetic>
                            <Magnetic>
                                <a href="https://www.instagram.com/saur0w/" target="_blank" rel="noopener noreferrer">Instagram</a>
                            </Magnetic>
                        </div>
                    </div>
                </div>

                <div className={styles.footer}>
                    <p>&copy; {new Date().getFullYear()} Saurabh Thapliyal. All rights reserved.</p>
                </div>
            </div>
        </motion.div>
    );
}