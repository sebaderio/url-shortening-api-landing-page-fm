import Image from "next/image";

import { appConfig } from "@/config";

import styles from "./Statistics.module.scss";

// TODO break on 630px

interface StatisticsDetailProps {
    title: string;
    description: string;
    imageUrl: string;
}

const StatisticsDetail = ({
    title,
    description,
    imageUrl,
}: StatisticsDetailProps) => {
    return (
        <div className={styles.statistics__detail}>
            <div className={styles.statistics__detail__icon}>
                <Image
                    src={imageUrl}
                    alt={appConfig.defaults.altImageText}
                    height={32}
                    width={32}
                />
            </div>
            <div className={styles.statistics__detail__title}>{title}</div>
            <div className={styles.statistics__detail__description}>
                {description}
            </div>
        </div>
    );
};

const Statistics = () => {
    return (
        <div className={styles.statistics}>
            <div className={styles.statistics__title}>
                {appConfig.statistics.title}
            </div>
            <div className={styles.statistics__description}>
                {appConfig.statistics.description}
            </div>
            <div className={styles.statistics__details}>
                <div className={styles.statistics__details__item__1}>
                    <StatisticsDetail
                        title={appConfig.statistics.items[0].title}
                        description={appConfig.statistics.items[0].description}
                        imageUrl={appConfig.statistics.items[0].imageUrl}
                    />
                </div>
                <div className={styles.statistics__details__item__2}>
                    <StatisticsDetail
                        title={appConfig.statistics.items[1].title}
                        description={appConfig.statistics.items[1].description}
                        imageUrl={appConfig.statistics.items[1].imageUrl}
                    />
                </div>
                <div className={styles.statistics__details__item__3}>
                    <StatisticsDetail
                        title={appConfig.statistics.items[2].title}
                        description={appConfig.statistics.items[2].description}
                        imageUrl={appConfig.statistics.items[2].imageUrl}
                    />
                </div>
            </div>
        </div>
    );
};

export default Statistics;
