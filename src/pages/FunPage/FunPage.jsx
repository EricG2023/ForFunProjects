import React from "react";
import styles from "./FunPage.module.css";

const FunPage = () => {
  return (
    <div className={styles.funPage}>
      <header className={styles.header}>
        <h1>Welcome to the Fun Zone!</h1>
        <p>Experience random cool effects and animations.</p>
      </header>

      <section className={styles.animationSection}>
        <h2>Random Animations</h2>
        <div className={styles.animatedBox}></div>
        <div className={styles.bouncingCircle}></div>
      </section>

      <section className={styles.gradientTextSection}>
        <h2 className={styles.gradientText}>Gradient is Cool</h2>
        <p>
          Sometimes, it’s nice to relax and look at some smooth gradient colors.
        </p>
      </section>

      <footer className={styles.footer}>
        <p>
          Made with ❤️ by someone who loves CSS!
        </p>
      </footer>
    </div>
  );
};

export default FunPage;
