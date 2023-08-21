import Search from "./Search";
import Statistics from "./Statistics";

import styles from "./MainContent.module.scss";

// TODO break on 630px

const MainContent = () => {
    return (
        <div className={styles.main__content}>
            <div className={styles.main__content__search}>
                <Search />
            </div>
            <div className={styles.main__content__statistics}>
                <Statistics />
            </div>
        </div>
    );
};

export default MainContent;
