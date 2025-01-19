'use client'

import { UserPublicData } from "@/models/userPublicData";
import styles from "./sideabout.module.css";
import React, { useEffect, useRef, useState } from "react";

interface SideAboutProps {
  publicData: UserPublicData;
}

export default function SideAbout({ publicData }: SideAboutProps) {
  const [isSticky, setIsSticky] = useState(false); // Começa como não fixado
  const [lastStickyPosition, setLastStickyPosition] = useState('auto'); // Armazena a última posição fixa,
  const [screenWidth, setScreenWidth] = useState(0);
  const divRef = useRef<HTMLDivElement>(null); // Referência para a div
  const MAX_LIMIT_WIDTH = 1000;
  let divTop = 9999;

  const handleScroll = () => {
    const scrollY = window.scrollY; // Posição atual de rolagem
    const viewportHeight = window.innerHeight; // Altura da viewport

    const documentHeight = document.body.offsetHeight; // Altura total do documento
    const stopPosition = documentHeight - viewportHeight * 1.32; // Posição para desafixar

    if (window.innerWidth < MAX_LIMIT_WIDTH) {
      setLastStickyPosition('0');
      return
    }

    if (divRef.current) {

      if (scrollY > divTop && scrollY < stopPosition) {

        setIsSticky(true);

      } else if (scrollY < divTop) {
        setIsSticky(false);
        setLastStickyPosition('auto');
      } else {
        setIsSticky(false);
        setLastStickyPosition(`${stopPosition}px`);
      }
    }
  };

  useEffect(() => {
    if (divRef.current) {
      divTop = divRef.current.offsetTop;
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={divRef} // Atribuímos a referência à div
      className={styles.styleSidebar}
      style={
        !isSticky
          ? { top: `${lastStickyPosition}`, position: 'absolute' } // Define a posição absoluta com base na última posição fixa
          : {  top: 0, position: 'fixed' }
      }
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
