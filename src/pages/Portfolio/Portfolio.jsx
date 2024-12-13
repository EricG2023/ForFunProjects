import React from "react";
import styles from "./Portfolio.module.css";

const Portfolio = () => {
  return (
    <div className={styles.portfolio}>
      <header className={styles.header}>
        <h1>Eric Goyko's Portfolio</h1>
        <p>Showcasing my journey in coding and development!</p>
      </header>

      <section className={styles.projects}>
        <h2>My Projects</h2>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Project 1</h3>
            <p>A web application built with React and Node.js.</p>
          </div>
          <div className={styles.card}>
            <h3>Project 2</h3>
            <p>An Android app developed with Kotlin.</p>
          </div>
          <div className={styles.card}>
            <h3>Project 3</h3>
            <p>A RESTful API created using Laravel and MySQL.</p>
          </div>
        </div>
      </section>

      <section className={styles.skills}>
        <h2>My Skills</h2>
        <ul className={styles.skillsList}>
          <li>Frontend Development (HTML, CSS, JavaScript, React)</li>
          <li>Backend Development (Node.js, PHP, Laravel)</li>
          <li>Database Management (SQL, MongoDB)</li>
          <li>Mobile Development (Android, Kotlin)</li>
        </ul>
      </section>

      <footer className={styles.footer}>
        <p>Made with 💻 by Eric Goyko</p>
      </footer>
    </div>
  );
};

export default Portfolio;
