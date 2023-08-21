import { appConfig } from "@/config";

import DesktopNavbar from "./DesktopNavbar";

import styles from "./Navbar.module.scss";

// TODO break on 630px

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <DesktopNavbar {...appConfig.navbar} />
        </nav>
    );
};

export default Navbar;
