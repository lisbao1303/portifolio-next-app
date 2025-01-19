import { FaInstagram, FaRss } from "react-icons/fa";
import styles from "./footer.module.css";


export default function Footer() {
    return (
        <div className={styles.footerSize}>
            <div className={styles.footerRow}>
                <a>elisbaogabriel@gmail.com</a>
                <div>
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.aLink}
                    >
                        <FaInstagram />
                    </a>
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.aLink}
                    >
                        <FaRss />
                    </a>
                </div>
            </div>

            <a href="/policy"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.aLink}>Privacy Policy</a>

            <p> © 2020 - {new Date().getFullYear()} | Gabriel Elisbão. All Rights Reserved.</p>
        </div>
    );
}
