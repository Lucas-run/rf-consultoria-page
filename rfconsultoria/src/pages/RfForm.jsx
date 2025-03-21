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
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("Enviando formulário:", formData);
      const response = await fetch("https://rfleadsapi.vercel.app/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error("Erro ao enviar formulário");
      setSubmitted(true);
      setError(null);
    } catch (err) {
      setError("Houve um problema. Tente novamente mais tarde.");
      console.error(err);
    }
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
          {error && <p className={styles.error}>{error}</p>}
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
