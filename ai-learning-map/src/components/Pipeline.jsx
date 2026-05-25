import { useState } from "react";
import { pipeline } from "../data";
import styles from "./Pipeline.module.css";

export default function Pipeline() {
  const [active, setActive] = useState(null);

  return (
    <section id="pipeline" className={styles.section}>
      <div className={styles.container}>
        <SectionHeader
          tag="Knowledge Roadmap"
          title="From ML to Multi-agent"
          sub="6 layers of knowledge stacking on each other — each layer is the foundation for the next."
        />

        <div className={styles.pipeline}>
          {pipeline.map((node, i) => (
            <PipelineNode
              key={node.id}
              node={node}
              index={i}
              isLast={i === pipeline.length - 1}
              isActive={active === node.id}
              onToggle={() => setActive(active === node.id ? null : node.id)}
            />
          ))}
        </div>

        {/* Active detail panel */}
        {active && <DetailPanel node={pipeline.find((n) => n.id === active)} />}
      </div>
    </section>
  );
}

function PipelineNode({ node, index, isLast, isActive, onToggle }) {
  return (
    <div className={styles.nodeWrap}>
      <button
        className={`${styles.node} ${isActive ? styles.nodeActive : ""}`}
        onClick={onToggle}
        style={{ "--node-color": node.color, "--node-dim": node.dim }}
        aria-expanded={isActive}
      >
        <span className={styles.nodeIndex}>0{index + 1}</span>
        <span className={styles.nodeIcon}>{node.icon}</span>
        <span className={styles.nodeLabel}>{node.label}</span>
        <span className={styles.nodeFull}>{node.full}</span>
      </button>

      {!isLast && (
        <div className={styles.arrow} aria-hidden>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M5 12H19M19 12L13 6M19 12L13 18"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      )}
    </div>
  );
}

function DetailPanel({ node }) {
  return (
    <div
      className={styles.detail}
      style={{ "--node-color": node.color, "--node-dim": node.dim }}
    >
      <div className={styles.detailIcon}>{node.icon}</div>
      <div>
        <h3 className={styles.detailTitle}>{node.full}</h3>
        <p className={styles.detailDesc}>{node.desc}</p>
      </div>
    </div>
  );
}

function SectionHeader({ tag, title, sub }) {
  return (
    <div className={styles.header}>
      <p className={styles.tag}>{tag}</p>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.sub}>{sub}</p>
    </div>
  );
}
