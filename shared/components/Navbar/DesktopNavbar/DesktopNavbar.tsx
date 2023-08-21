"use client";
import { MouseEventHandler } from "react";
import { useRouter } from "next/navigation";

import Button from "@/shared/components/Button";
import Logo from "@/shared/components/Logo";
import { NavbarProps } from "@/shared/components/Navbar";

import styles from "./DesktopNavbar.module.scss";

interface NavbarItemProps {
    onClick: MouseEventHandler<HTMLDivElement>;
    text: string;
}

const NavbarItem = ({ onClick, text }: NavbarItemProps) => {
    return (
        <div
            onClick={onClick}
            className={styles.navbar__content__sections__item}
        >
            {text}
        </div>
    );
};

const DesktopNavbar = ({ logo, sections, login, signUp }: NavbarProps) => {
    const router = useRouter();

    return (
        <div className={styles.navbar}>
            <div className={styles.navbar__content}>
                <div className={styles.navbar__content__sections}>
                    <div className={styles.navbar__content__sections__logo}>
                        <Logo
                            imageUrl={logo.imageUrl}
                            onClick={() => router.push(logo.redirectTo)}
                        />
                    </div>
                    {sections.map((section, index) => {
                        return (
                            <NavbarItem
                                key={index}
                                onClick={() => router.push(section.redirectTo)}
                                text={section.text}
                            />
                        );
                    })}
                </div>
                <div className={styles.navbar__content__auth}>
                    <div
                        onClick={() => router.push(login.redirectTo)}
                        className={styles.navbar__content__auth__item}
                    >
                        {login.text}
                    </div>
                    <Button
                        primary={true}
                        rounded={true}
                        onClick={() => router.push(signUp.redirectTo)}
                    >
                        <div
                            className={
                                styles.navbar__content__auth__button__text
                            }
                        >
                            {signUp.text}
                        </div>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default DesktopNavbar;
