import { FaInstagram, FaRss } from "react-icons/fa";
import styles from "./footer.module.css";


export default function Footer() {
    return (
        <div className={styles.footerSize}>
            <div className={styles.footerRow + " " + styles.destakWhite}>
                <a >elisbaogabriel@gmail.com</a>

                <div className={styles.iconsContainer}>
                    <div className={styles.icon}>
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.aLinkSocial}
                        >
                            <FaInstagram />
                        </a>
                    </div>
                    <div className={styles.icon}>
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.aLinkSocial}
                        >
                            <FaRss />
                        </a>
                    </div>
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
