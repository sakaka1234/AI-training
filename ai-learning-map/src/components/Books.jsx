import { useState } from "react";
import { books } from "../data";
import styles from "./Books.module.css";

export default function Books() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="books" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.tag}>Learning Resources</p>
          <h2 className={styles.title}>5 Essential Books</h2>
          <p className={styles.sub}>
            Each book plays a unique role in your AI learning journey — from
            foundations to real-world implementation.
          </p>
        </div>

        <div className={styles.grid}>
          {books.map((book, i) => (
            <BookCard
              key={i}
              book={book}
              index={i}
              isHovered={hovered === i}
              onHover={() => setHovered(i)}
              onLeave={() => setHovered(null)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function BookCard({ book, index, isHovered, onHover, onLeave }) {
  return (
    <article
      className={`${styles.card} ${isHovered ? styles.cardHover : ""}`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      style={{ "--book-color": book.tagColor, "--book-dim": book.tagDim }}
    >
      {/* Top row */}
      <div className={styles.cardTop}>
        <span className={styles.badge}>{book.tag}</span>
        <span className={styles.chapter}>{book.chapter}</span>
      </div>

      {/* Book number */}
      <div className={styles.bookNum} aria-hidden>
        0{index + 1}
      </div>

      {/* Title */}
      <h3 className={styles.bookTitle}>{book.title}</h3>
      <p className={styles.bookAuthor}>{book.author}</p>

      {/* Divider */}
      <div className={styles.divider} />

      {/* Role */}
      <p className={styles.bookRole}>{book.role}</p>

      {/* Covers */}
      <div className={styles.covers}>
        {book.covers.map((c, j) => (
          <span key={j} className={styles.coverTag}>
            {c}
          </span>
        ))}
      </div>
    </article>
  );
}
