"use client";

import { useEffect, useState } from 'react';
import styles from "../styles/page.module.scss";
import Preloader from '../components/Preloader/Preloader';
import { AnimatePresence } from "framer-motion";
import Landing from '../components/Landing/landing';
import Description from '../components/Description/index';
import Contact from '../components/Contact/index';

export default function Home() {

    const [isLoading, setIsLoading] = useState(true);

    useEffect( () => {
        (
            async () => {
                
                

                setTimeout( () => {
                    setIsLoading(false);
                    document.body.style.cursor = 'default';
                    window.scrollTo(0, 0);
                }, 2000)
            }
        )()
    }, [])

    return (
        <main className={styles.main}>
            <AnimatePresence mode='wait'>
                {isLoading && <Preloader />}
            </AnimatePresence>
            <Landing />
            <Description />
            <Contact />
        </main>
    )
}
