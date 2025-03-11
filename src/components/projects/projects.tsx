import { useEffect, useState } from "react";
import styles from "./projects.module.css";

export default function Projects() {

  return (
    <div id="projects" className={styles.projectsDiv}>
                <p className={"destak " + styles.wordsize}> Projects</p>
              <img   src="/assets/assetLoading.svg"  alt="Icon" className={styles.sized}/>
              Em breve ...
    </div>

  );
}
