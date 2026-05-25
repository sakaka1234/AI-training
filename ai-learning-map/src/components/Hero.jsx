import { useState, useEffect } from "react";
import styles from "./Hero.module.css";

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className={styles.hero}>
      {/* Grid background */}
      <div className={styles.grid} aria-hidden />
      {/* Glow orbs */}
      <div className={styles.orb1} aria-hidden />
      <div className={styles.orb2} aria-hidden />

      <div className={`${styles.content} ${visible ? styles.visible : ""}`}>
        <div className={styles.weekBadge}>
          <span className={styles.dot} />
          Week 1 · Phase 0 — Orientation
        </div>

        <h1 className={styles.title}>
          AI Learning
          <br />
          <span className={styles.accent}>Map</span>
        </h1>

        <p className={styles.subtitle}>
          From Machine Learning to Multi-agent Systems —<br />a 1-week roadmap
          to master the AI ecosystem.
        </p>

        <div className={styles.meta}>
          <div className={styles.metaItem}>
            <span className={styles.metaNum}>5</span>
            <span className={styles.metaLabel}>books</span>
          </div>
          <div className={styles.metaDivider} />
          <div className={styles.metaItem}>
            <span className={styles.metaNum}>6</span>
            <span className={styles.metaLabel}>layers</span>
          </div>
          <div className={styles.metaDivider} />
          <div className={styles.metaItem}>
            <span className={styles.metaNum}>9</span>
            <span className={styles.metaLabel}>focus areas</span>
          </div>
        </div>

        <a href="#pipeline" className={styles.cta}>
          Explore the roadmap
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M8 3L8 13M8 13L4 9M8 13L12 9"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>

      {/* Decorative label */}
      <div className={styles.sideLabel} aria-hidden>
        AI / ML / LLM / AGENT
      </div>
    </section>
  );
}
