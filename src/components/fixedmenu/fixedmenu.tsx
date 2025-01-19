import { FaGithub, FaLinkedin } from "react-icons/fa6";
import styles from "./fixedmenu.module.css";
import { TbFileCv } from "react-icons/tb";
import { GrProjects } from "react-icons/gr";


export default function FixedMenu() {
    return (
        <div className={styles.fixedRolePai}>
        <div className={styles.fixedRole}>

            <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.aLink}
            >
                <GrProjects size={60} />
            </a>

            <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.aLink}
            >
                <TbFileCv size={60} />
            </a>

            <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.aLink}
            >
                <FaGithub size={60} />
            </a>
            <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.aLink}
            >
                <FaLinkedin size={60} />
            </a>


        </div>
        </div>
    );
}
