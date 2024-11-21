import React, { FC } from "react";
import styles from "./HeaderSection.module.scss";

interface HeaderSectionProps {}

const HeaderSection: FC<HeaderSectionProps> = () => (
  <header className={styles.HeaderSection}>
    <img src="images/fordel-logo.svg" alt="fordel logo" />

    <div className={styles.ButtonWrap}>
      <a href="" className="sm">
        Book a Session
      </a>

      <button className={styles.MenuButton}>
        <p className="overline">Menu</p>

        <img src="images/header-menu-icon.svg" alt="menu icon" />
      </button>
    </div>
  </header>
);

export default HeaderSection;
