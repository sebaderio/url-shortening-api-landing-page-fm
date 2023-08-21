import { MouseEventHandler } from "react";
import Image from "next/image";

import { appConfig } from "@/config";

import styles from "./Logo.module.scss";

interface LogoProps {
    onClick: MouseEventHandler<HTMLDivElement>;
    imageUrl: string;
}

const Logo = ({ onClick, imageUrl }: LogoProps) => {
    return (
        <div className={styles.logo} onClick={onClick}>
            <Image
                src={imageUrl}
                alt={appConfig.defaults.altImageText}
                height={20}
                width={100}
            />
        </div>
    );
};

export default Logo;
