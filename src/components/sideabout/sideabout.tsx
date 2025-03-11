import { UserPublicData } from "@/models/userPublicData";
import styles from "./sideabout.module.css";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

interface SideAboutProps {
  publicData: UserPublicData;
}

export default function SideAbout({ publicData }: SideAboutProps) {

  return (
    <div
      className={styles.styleSidebar}
    >
      <div className={styles.image_container}>
        <img src="/assets/assetFace2.svg" alt="Circular Image" className={styles.circular_img} />
      </div>
      <h2>{publicData.name}</h2>
      <p>Birth date: {publicData.birth}</p>
      <p>Birthplace: {publicData.birthPlace}</p>
      {/* <p>Tech: {publicData.principalTech}</p> */}

      <div className={styles.contactOpitions}>
        <a
          href="mailto:elisbaogabriel@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          title="Mail to me"
          className={styles.aLink}
        >
          <MdEmail size={60} />
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
      </div>

    </div>
  );
}
