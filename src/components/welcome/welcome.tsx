'use client'

import { useEffect, useState } from "react";
import styles from "./welcome.module.css";

export default function Welcome() {
  const [src, setSrc] = useState("/assets/assetFace.svg");

  useEffect(() => {
    setSrc(`/assets/assetFace.svg?${Date.now()}`);
  }, []);
  return (
  <img   src={src} 
  alt="Icon" className={styles.move_up}/>
  );
}
