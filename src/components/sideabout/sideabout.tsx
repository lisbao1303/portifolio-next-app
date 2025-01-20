import { UserPublicData } from "@/models/userPublicData";
import styles from "./sideabout.module.css";
import React from "react";

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

    </div>
  );
}
