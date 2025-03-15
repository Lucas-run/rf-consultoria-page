import { useState } from "react";
import styles from "./RfForm.module.css";
import CtaButton from "../components/CtaButton";

export default function RfForm() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    whatsapp: "",
    email: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode enviar os dados (ex.: para um backend ou e-mail)
    console.log("Dados do formulário:", formData);
    setSubmitted(true);
    // Resetar formulário (opcional)
    setFormData({ name: "", description: "", whatsapp: "", email: "" });
  };

  return (
    <div className={styles.formContainer}>
      {submitted ? (
        <div className={styles.successMessage}>
          <h2>Obrigado!</h2>
          <p>Enviaremos o guia gratuito para o seu e-mail em breve.</p>
          <CtaButton text="Fale pelo WhatsApp" />
        </div>
      ) : (
        <form onSubmit={handleSubmit} className={styles.form}>
          <h1 className={styles.title}>
            Peça Ajuda e Receba Nosso Guia Grátis!
          </h1>

          <label className={styles.label}>
            Nome*:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Digite seu nome"
            />
          </label>

          <label className={styles.label}>
            Descrição da necessidade (opcional):
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              maxLength="500"
              placeholder="Conte-nos sobre seu TCC ou projeto (até 500 caracteres)"
            />
          </label>

          <label className={styles.label}>
            WhatsApp (opcional):
            <input
              type="tel"
              name="whatsapp"
              value={formData.whatsapp}
              onChange={handleChange}
              placeholder="Ex.: (11) 99999-9999"
            />
          </label>

          <label className={styles.label}>
            E-mail*:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Digite seu e-mail para receber o guia"
            />
          </label>

          <button type="submit">Enviar e Receber Guia</button>
        </form>
      )}
    </div>
  );
}
