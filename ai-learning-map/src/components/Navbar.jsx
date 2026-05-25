import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

const links = [
  { href: "#pipeline", label: "Roadmap" },
  { href: "#books", label: "Books" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.inner}>
        <a href="#" className={styles.logo}>
          <span className={styles.logoIcon}>◈</span>
          <span>AI Map</span>
        </a>

        <div className={styles.links}>
          {links.map((l) => (
            <a key={l.href} href={l.href} className={styles.link}>
              {l.label}
            </a>
          ))}
        </div>

        <div className={styles.badge}>Week 1</div>
      </div>
    </nav>
  );
}
