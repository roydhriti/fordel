import React, { FC } from "react";
import styles from "./HeroSection.module.scss";

interface HeroSectionProps {}

const HeroSection: FC<HeroSectionProps> = () => (
  <div className={styles.HeroSection}>
    <div className={styles.HeroHeaderContent}>
      <div className={styles.ContentWrap}>
        <div className={styles.SoftHeader}>
          <h6 className="sv2">A Software Development Company </h6>
        </div>

        <div className={styles.BoldHeader}>
          <h1>Reliability Focused Custom Software Development Company</h1>
        </div>
      </div>

      <div className={styles.ButtonWrap}>
        <a href="" className="lg">
          Book a Session
        </a>

        <button className={styles.MenuButton}>
          <p className="body">Company Profile</p>

          <img src="images/download-icon.svg" alt="menu icon" />
        </button>
      </div>
    </div>

    <div className={styles.HeroParaContent}>
      <div className={styles.IconDescriptionWrap}>
        <div className={styles.IconDescription}>
          <img src="images/hero-section-icon.svg" alt="description icon" />

          <h6 className="sv2">
            Guaranteed quality and timeliness with money-back guarantees for
            unmatched reliability
          </h6>
        </div>

        <div className={styles.IconDescription}>
          <img src="images/hero-section-icon.svg" alt="description icon" />

          <h6 className="sv2">
            Strategic software solutions designed to maximize your ROI
          </h6>
        </div>
      </div>
    </div>

    <div className={styles.BackgroundImage}>
      <img src="images/hero-img.svg" alt="Hero image" />
    </div>
  </div>
);

export default HeroSection;
