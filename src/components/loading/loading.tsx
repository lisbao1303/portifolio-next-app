import styles from "./loading.module.css";


export default function Loading() {
    return (
        <div className={styles.loading}>
              <img   src="/assets/assetLoading.svg"  alt="Icon" className={styles.sized}/>
        </div>
    );
}
