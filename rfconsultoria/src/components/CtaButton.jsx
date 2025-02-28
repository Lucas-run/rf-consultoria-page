import styles from "./CtaButton.module.css";

export default function CtaButton({ text }) {
  function handleCtaClick() {
    const phoneNumber = "5598989101871"; // Exemplo: Brasil (+55)
    const message =
      "Olá, gostaria de mais informações sobre consultoria acadêmica!";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  }
  return (
    <div className={styles.cta} onClick={handleCtaClick}>
      {text}
    </div>
  );
}
