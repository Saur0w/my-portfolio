"use client";

import React, { useState } from "react";
import styles from "../../../styles/Navbar.module.scss";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { menuSlide } from "../animation"; 
import Curve from "../nav/Curve"; 

const navItem = [
    { title: "Home", href: "/" },
    { title: "Services", href: "/services" },
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" }
];

export default function Navbar() {
    const pathname = usePathname();
    const [selectedIndicator, setSelectedIndicator] = useState(pathname);

    return (
        <motion.div 
            variants={menuSlide} 
            initial="initial" 
            animate="enter" 
            exit="exit" 
            className={styles.menu}
        >
            <div className={styles.body}>
                <div 
                    className={styles.nav} 
                    onMouseLeave={() => setSelectedIndicator(pathname)}
                >


                    {navItem.map((item, index) => (
                        <Link 
                            key={index} 
                            href={item.href} 
                            className={selectedIndicator === item.href ? styles.active : ""}
                            onMouseEnter={() => setSelectedIndicator(item.href)}
                        >
                            {item.title}
                        </Link>
                    ))}
                </div>
                
            </div>
            <Curve />
        </motion.div>
    );
}
