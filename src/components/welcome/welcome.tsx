import styles from "./welcome.module.css";

export default function Welcome() {
  return (
  <img   src={`/assets/assetFace.svg?cacheBust=${Date.now()}`} 
  alt="Icon" className={styles.move_up}/>
  );
}
