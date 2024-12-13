import React from "react";
import styles from "./AboutMe.module.css";

const AboutMe = () => {
  return (
    <div className={styles["about-me"]}>
      <h1 className="about-me-title">About Me</h1>
      <div className="about-me-content">
        <img
          src="https://via.placeholder.com/150"
          alt="Eric Goyko"
          className="about-me-image"
        />
        <div className="about-me-text">
          <h2>I am Eric Goyko</h2>
          <p>
            My name is Eric Goyko. I am a 22-year-old, born and raised in
            Spokane, Washington. Currently, I am enrolled in the Software
            Development Program at Spokane Community College, where I am
            sharpening my coding skills.
          </p>
          <p>
            I have a passion for coding and am always looking for new
            opportunities to further develop my abilities in the software
            development field.
          </p>
        </div>
      </div>

      <section className="skills">
        <h2>Skills</h2>
        <ul>
          <li>HTML5, CSS, Responsive Website Design</li>
          <li>JavaScript, Node.js, PHP, Laravel</li>
          <li>SQL, MongoDB</li>
          <li>Android, Kotlin</li>
          <li>Frontend Developer</li>
          <li>Full Stack Developer</li>
          <li>Backend Developer</li>
          <li>Mobile Developer</li>
          <li>Web Design</li>
        </ul>
      </section>

      <section className="experience">
        <h2>Experience</h2>
        <p>
          College Course Assignments and Projects using Visual Studio Code,
          Android Studio, IntelliJ, Postman, MongoDB, React.
        </p>
      </section>

      <section className="education">
        <h2>Education</h2>
        <p>
          Software Development at Spokane Community College (Fall 2022 to Winter
          2024)
        </p>
      </section>

      <section className="portfolio">
        <h2>Portfolio</h2>
        <ul>
          <li>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
          <li>Android Studio Projects</li>
          <li>Visual Studio Code</li>
          <li>3 Month Internship at Jaik Solutions</li>
        </ul>
      </section>
    </div>
  );
};

export default AboutMe;
