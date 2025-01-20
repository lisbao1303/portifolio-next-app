
import styles from "./firstdiv.module.css";
import BackgroundSVG from "./../../../public/assets/backgroundSVG.svg";

export default function FirstDiv() {
    
    return (
        <div className={styles.fullscreen} >
          <div className={styles.svgStyle}>
          <BackgroundSVG  />
          <BackgroundSVG  />
          </div>
            <div className={styles.sideH1}>
                Hi there! <br />
                I'm Gabriel Elisbão, <br />
                <p className={"destak " + styles.wordsize}>FULLSTACK ENGINEER</p>
            </div>

            <img src="/assets/assetFace2.svg" alt="Icon" className={styles.maxImg} />

        </div>

    );
}
