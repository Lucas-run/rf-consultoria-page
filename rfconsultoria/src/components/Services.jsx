import styles from "./Services.module.css";
export default function Services() {
  return (
    <div id="services">
      <div className={styles.title}>
        Os Nossos <span>Serviços</span>
      </div>
      <div className={styles.services}>
        <div className={styles.service}>
          <div className={styles.number}>01</div>
          <div>
            <div className={styles.serviceTitle}>Correções Ortográficas</div>
            <div className={styles.serviceText}>
              Revisão detalhada para eliminar erros de gramática, ortografia e
              coesão, garantindo um texto claro e profissional.
            </div>
          </div>
        </div>
        <div className={styles.service}>
          <div className={styles.number}>02</div>
          <div>
            <div className={styles.serviceTitle}>Formatação ABNT</div>
            <div className={styles.serviceText}>
              Ajuste completo do seu trabalho às normas da ABNT, incluindo
              citações, referências e layout, com precisão e agilidade.
            </div>
          </div>
        </div>
        <div className={styles.service}>
          <div className={styles.number}>03</div>
          <div>
            <div className={styles.serviceTitle}>
              Orientações para TCC, Projetos e Artigos
            </div>
            <div className={styles.serviceText}>
              Apoio personalizado com sugestões metodológicas e estruturais para
              desenvolver seu trabalho acadêmico com confiança.
            </div>
          </div>
        </div>
        <div className={styles.service}>
          <div className={styles.number}>04</div>
          <div>
            <div className={styles.serviceTitle}>Portais EAD's</div>
            <div className={styles.serviceText}>
              Auxílio na organização e entrega de atividades em plataformas de
              ensino a distância, otimizando seu tempo e desempenho.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
