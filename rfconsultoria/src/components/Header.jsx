import styles from "./Header.module.css";
import Menu from "./Menu";
import logo from "../../public/logo-img.png";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logoContainer}>
        <img className={styles.logo} src={logo} alt="logo do site" />
        <div className={styles.text}>RF Consultoria</div>
      </div>

      <Menu />
    </div>
  );
}
