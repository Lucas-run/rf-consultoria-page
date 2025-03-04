import { useState } from "react";
import styles from "./Menu.module.css";

export default function Menu() {
  const [isHidden, setIsHidden] = useState(true);

  function handleClick() {
    setIsHidden(!isHidden);
  }

  return (
    <div className={styles.menuButton}>
      <button
        onClick={handleClick}
        className={`${isHidden ? styles.hamburger : styles.back} ${
          styles.desktopHidden
        }`}
      ></button>
      <ul
        className={`${isHidden ? styles.hidden : ""} ${styles.lista} ${
          styles.desktopLista
        }`}
      >
        <li className={styles.item}>
          <a href="#hero" onClick={handleClick}>
            Início
          </a>
        </li>
        <li className={styles.item}>
          <a href="#description" onClick={handleClick}>
            O que é?
          </a>
        </li>
        <li className={styles.item}>
          <a href="#services" onClick={handleClick}>
            Nossos serviços
          </a>
        </li>
      </ul>
    </div>
  );
}
