"use client";
import { useRouter } from "next/navigation";

import { appConfig } from "@/config";
import Button from "@/shared/components/Button";

import styles from "./Banner.module.scss";

// TODO break on 630px

const Banner = () => {
    const router = useRouter();

    return (
        <div className={styles.banner}>
            <div className={styles.banner__title}>{appConfig.banner.title}</div>
            <div className={styles.banner__button}>
                <Button
                    onClick={() =>
                        router.push(appConfig.banner.button.redirectTo)
                    }
                    primary={true}
                    rounded={true}
                >
                    <div className={styles.banner__button__text}>
                        {appConfig.banner.button.text}
                    </div>
                </Button>
            </div>
        </div>
    );
};

export default Banner;
