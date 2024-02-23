

// eslint-disable-next-line no-unused-vars
import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero =() =>{
    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}> hi Im Gopi</h1>
            <p className={styles.description}>
                i am a full stack developer with 5 years of experience
                 nodejs.Reach out if you d like to learn more!
            </p>
            <a href="mailto:gopinadhborra530@gmail.com" className={styles.contactBtn}>Contact me</a>

        </div>
        <img src={getImageUrl("hero/heroImage.png")} alt="Hero image of me" className={styles.heroImg}/>
<div className={styles.topBlur}/>
<div className={styles.bottomBlur}/>
    </section>
}