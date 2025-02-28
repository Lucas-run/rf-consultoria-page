import styles from "./Description.module.css";

export default function Description() {
  return (
    <div>
      <div className={styles.title}>
        O Que é <span>consultoria</span> Acadêmica?
      </div>
      <div className={styles.content}>
        <p>
          A consultoria acadêmica é um serviço especializado que apoia
          estudantes e profissionais na produção e aprimoramento de textos
          acadêmicos. Nosso trabalho envolve a análise detalhada e revisão de
          conteúdos, sugestões de melhorias metodológicas e a formatação
          adequada de trabalhos, seguindo as normas exigidas por instituições de
          ensino.
        </p>
        <p>
          Pensada para quem enfrenta o desafio de conciliar trabalho, estudos e
          outras responsabilidades, ou para aqueles que buscam superar
          dificuldades na escrita científica, a consultoria acadêmica oferece um
          suporte personalizado. Nosso objetivo é transformar ideias em textos
          claros, bem estruturados e academicamente sólidos, economizando seu
          tempo e garantindo a qualidade que seus projetos merecem.
        </p>
      </div>
      <div className={styles.cta}>Saiba mais</div>
    </div>
  );
}
