import styles from "./Hero.module.css";
import heroImg from "../../public/avatar-ai.png";
import CtaButton from "./CtaButton";

export default function Hero() {
  return (
    <div className={styles.hero} id="hero">
      <h1 className={styles.title}>
        Nós Ajudamos <span>Você</span> a Alcançar Todo Seu Potencial
      </h1>
      <CtaButton text="Conheça nosso trabalho" />
      <div className={styles.avatar}>
        <img src={heroImg} alt="" />
      </div>
    </div>
  );
}
