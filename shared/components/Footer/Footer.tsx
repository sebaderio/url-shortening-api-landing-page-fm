"use client";
import { useRouter } from "next/navigation";

import { appConfig } from "@/config";

import { Facebook, Instagram, Pinterest, Shortly, Twitter } from "./Icons";

import styles from "./Footer.module.scss";

// TODO break on 630px

const Footer = () => {
    const router = useRouter();

    return (
        <div className={styles.footer}>
            <div className={styles.footer__content}>
                <div
                    className={styles.footer__logo}
                    onClick={() =>
                        router.push(appConfig.footer.logo.redirectTo)
                    }
                >
                    <Shortly />
                </div>
                <div className={styles.footer__sections}>
                    {appConfig.footer.sections.map((section, index) => {
                        return (
                            <div
                                key={index}
                                className={styles.footer__sections__item}
                            >
                                <div
                                    className={
                                        styles.footer__sections__item__title
                                    }
                                >
                                    {section.text}
                                </div>
                                {section.items.map((item, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className={
                                                styles.footer__sections__item__feature
                                            }
                                            onClick={() =>
                                                router.push(item.redirectTo)
                                            }
                                        >
                                            {item.text}
                                        </div>
                                    );
                                })}
                            </div>
                        );
                    })}
                </div>
                <div className={styles.footer__media}>
                    <div
                        className={styles.footer__media__item}
                        onClick={() =>
                            router.push(
                                appConfig.footer.media.facebook.redirectTo
                            )
                        }
                    >
                        <Facebook />
                    </div>
                    <div
                        className={styles.footer__media__item}
                        onClick={() =>
                            router.push(
                                appConfig.footer.media.twitter.redirectTo
                            )
                        }
                    >
                        <Twitter />
                    </div>
                    <div
                        className={styles.footer__media__item}
                        onClick={() =>
                            router.push(
                                appConfig.footer.media.pinterest.redirectTo
                            )
                        }
                    >
                        <Pinterest />
                    </div>
                    <div
                        className={styles.footer__media__item}
                        onClick={() =>
                            router.push(
                                appConfig.footer.media.instagram.redirectTo
                            )
                        }
                    >
                        <Instagram />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
