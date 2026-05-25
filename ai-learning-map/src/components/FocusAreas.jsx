import { focusAreas } from "../data";
import styles from "./FocusAreas.module.css";

const groupConfig = {
  concept: { label: "Concepts", color: "var(--purple)" },
  system: { label: "Systems", color: "var(--coral)" },
  mindset: { label: "Mindset", color: "var(--green)" },
};

export default function FocusAreas() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <div className={styles.left}>
            <p className={styles.tag}>Focus areas</p>
            <h2 className={styles.title}>
              9 Topics
              <br />
              This Week
            </h2>
            <p className={styles.sub}>
              Not memorization — but building mental models for each concept.
            </p>

            <div className={styles.legend}>
              {Object.entries(groupConfig).map(([key, cfg]) => (
                <div key={key} className={styles.legendItem}>
                  <span
                    className={styles.legendDot}
                    style={{ background: cfg.color }}
                  />
                  <span>{cfg.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.right}>
            {focusAreas.map((area, i) => {
              const cfg = groupConfig[area.group];
              return (
                <div
                  key={i}
                  className={styles.item}
                  style={{ "--item-color": cfg.color }}
                >
                  <span className={styles.itemDot} />
                  <span className={styles.itemLabel}>{area.label}</span>
                  <span className={styles.itemTag}>{cfg.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
