import styles from "./Deliverable.module.css";

const outputs = [
  {
    icon: "◈",
    label: "Diagram",
    desc: "ML → NLP/Text Data → Attention/GPT → RAG → Agent → Multi-agent",
    color: "var(--purple)",
  },
  {
    icon: "≡",
    label: "Book roles",
    desc: "Each book's role in 1–2 concise sentences",
    color: "var(--blue)",
  },
  {
    icon: "⌬",
    label: "Hardest phase",
    desc: "Analysis of the hardest phase and why",
    color: "var(--coral)",
  },
];

export default function Deliverable() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.tag}>Deliverable</p>
          <h2 className={styles.title}>Week 1 Output</h2>
        </div>

        <div className={styles.grid}>
          {outputs.map((o, i) => (
            <div key={i} className={styles.item} style={{ "--c": o.color }}>
              <div className={styles.iconWrap}>{o.icon}</div>
              <div>
                <p className={styles.itemLabel}>{o.label}</p>
                <p className={styles.itemDesc}>{o.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.footer}>
          <div className={styles.footerInner}>
            <span className={styles.footerDot} />
            <span>AI Learning Map · Week 1 · Phase 0</span>
            <span className={styles.footerSep} />
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                color: "var(--text-dim)",
              }}
            >
              5 books · 6 layers · 9 focus areas
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
