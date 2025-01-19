
'use client'

import styles from "./firstdiv.module.css";
import { useEffect, useState } from "react";
import BackgroundSVG from "./../../../public/assets/backgroundSVG.svg";

export default function FirstDiv() {

    const [scrollY, setScrollY] = useState(0);

    // Atualiza a posição do scroll para criar o efeito parallax
    useEffect(() => {
      const handleScroll = () => {
        setScrollY(window.scrollY);  // Captura a rolagem vertical da página
      };
      
      window.addEventListener("scroll", handleScroll);
      
      // Limpeza do evento quando o componente for desmontado
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
    
    return (
        <div className={styles.fullscreen} >
           <BackgroundSVG className={styles.svgStyle} style={{ transform: `translateY(${-(scrollY * 0.3)}px)` }}/>

            <div className={styles.sideH1}>
                Hi there! <br />
                I'm Gabriel Elisbão, <br />
                <p className={"destak " + styles.wordsize}>FULLSTACK ENGINEER</p>
            </div>

            <img src="/assets/assetFace2.svg" alt="Icon" className={styles.maxImg} />

        </div>

    );
}
