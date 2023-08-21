"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { appConfig } from "@/config";
import Button from "@/shared/components/Button";

import styles from "./Hero.module.scss";

// TODO break on 630px

const Hero = () => {
    const router = useRouter();

    return (
        <div className={styles.hero}>
            <div className={styles.hero__content}>
                <h1 className={styles.hero__content__title}>
                    {appConfig.hero.title}
                </h1>
                <h2 className={styles.hero__content__description}>
                    {appConfig.hero.description}
                </h2>
                <div className={styles.hero__content__button}>
                    <Button
                        primary={true}
                        rounded={true}
                        onClick={() =>
                            router.push(appConfig.hero.button.redirectTo)
                        }
                    >
                        <div className={styles.hero__content__button__text}>
                            {appConfig.hero.button.text}
                        </div>
                    </Button>
                </div>
            </div>
            <div className={styles.hero__image}>
                <Image
                    src={appConfig.hero.imageUrl}
                    alt={appConfig.defaults.altImageText}
                    fill={true}
                />
            </div>
        </div>
    );
};

export default Hero;
