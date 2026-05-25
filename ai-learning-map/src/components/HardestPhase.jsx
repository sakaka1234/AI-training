import { hardestPhase } from "../data";
import styles from "./HardestPhase.module.css";

export default function HardestPhase() {
  const { name, phase, reasons } = hardestPhase;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.card}>
          {/* Left accent bar */}
          <div className={styles.accentBar} />

          <div className={styles.content}>
            <div className={styles.topRow}>
              <span className={styles.phaseBadge}>{phase}</span>
              <span className={styles.warning}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 9v4M12 17h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Hardest Phase
              </span>
            </div>

            <h2 className={styles.title}>{name}</h2>
            <p className={styles.intro}>
              This phase requires synthesizing all prior knowledge — there are
              no shortcuts.
            </p>

            <div className={styles.reasons}>
              {reasons.map((r, i) => (
                <div key={i} className={styles.reason}>
                  <span className={styles.reasonNum}>0{i + 1}</span>
                  <p className={styles.reasonText}>{r}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Decorative big text */}
          <div className={styles.bgText} aria-hidden>
            HARD
          </div>
        </div>
      </div>
    </section>
  );
}
