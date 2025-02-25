import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <h1 className={styles.title}>
        Nós Ajudamos <span>Você</span> a Alcançar Todo Seu Potencial
      </h1>
      <div className={styles.cta}>Conheça nosso trabalho</div>
      <div className={styles.avatar}>
        <img src="../public/avatar-ai.png" alt="" />
      </div>
    </div>
  );
}
