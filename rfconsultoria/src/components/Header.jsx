import styles from "./Header.module.css";
import Menu from "./Menu";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logoContainer}>
        <img
          className={styles.logo}
          src="../public/logo-edited.svg"
          alt="logo do site"
        />
        <div className={styles.text}>RF Consultoria</div>
      </div>

      <Menu />
    </div>
  );
}
