import { FaGithub, FaLinkedin } from "react-icons/fa6";
import styles from "./fixedmenu.module.css";
import { TbFileCv } from "react-icons/tb";
import { GrProjects } from "react-icons/gr";
import { MdEmail } from "react-icons/md";

export default function FixedMenu() {
    return (
        <div className={styles.fixedRolePai}>
            <div className={styles.fixedRole}>
                <a href="#projects" className={styles.aLink}
                    title="My Projects"
                >
                    <GrProjects size={60} />
                </a>

                <a
                    href="#cvAbout"
                    className={styles.aLink}
                    title="My Resume"
                >
                    <TbFileCv size={60} />
                </a>

                <a
                    href="https://github.com/lisbao1303"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="My Github"
                    className={styles.aLink}
                >
                    <FaGithub size={60} />
                </a>

                <a
                    href="https://www.linkedin.com/in/gabrielelisbao"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="My Linkedin"
                    className={styles.aLink}
                >
                    <FaLinkedin size={60} />
                </a>

                <a
                    href="mailto:elisbaogabriel@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Mail to me"
                    className={styles.aLink}
                >
                    <MdEmail size={60} />
                </a>
            </div>
        </div>
    );
}
