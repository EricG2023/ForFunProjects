import React from "react";
import styles from "./WebsiteShowcase.module.css";

const WebsiteShowcase = () => {
  return (
    <div className={styles.websiteShowcase}>
      {/* Navbar */}
      <nav className={styles.navbar}>
        <div className={styles.logo}>MyWebsite</div>
        <ul className={styles.navLinks}>
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header className={styles.hero}>
        <h1>Welcome to MyWebsite</h1>
        <p>Your one-stop solution for modern web design and development</p>
        <button className={styles.ctaButton}>Get Started</button>
      </header>

      {/* Services Section */}
      <section id="services" className={styles.services}>
        <h2>Our Services</h2>
        <div className={styles.serviceCards}>
          <div className={styles.card}>
            <h3>Web Development</h3>
            <p>Building fast, responsive, and user-friendly websites.</p>
          </div>
          <div className={styles.card}>
            <h3>UI/UX Design</h3>
            <p>Creating intuitive and visually appealing designs.</p>
          </div>
          <div className={styles.card}>
            <h3>SEO Optimization</h3>
            <p>Improving your site's ranking and visibility.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={styles.about}>
        <h2>About Us</h2>
        <p>
          We are a team of passionate developers and designers committed to
          delivering high-quality digital solutions. Our mission is to help
          businesses succeed in the digital world.
        </p>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>&copy; 2024 MyWebsite. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default WebsiteShowcase;
