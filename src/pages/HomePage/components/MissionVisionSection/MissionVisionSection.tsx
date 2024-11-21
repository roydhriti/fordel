import React, { FC } from "react";
import styles from "./MissionVisionSection.module.scss";

interface MissionVisionSectionProps {}

const MissionVisionSection: FC<MissionVisionSectionProps> = () => (
  <div className={styles.MissionVisionSection}>
    <div className={styles.MissionVissionHeader}>
      <h6 className="sv2">Mission & Vision</h6>
    </div>

    <div className={styles.MissionVisionContent}>
      <div className={styles.ContentDiv}>
        <div className={styles.MissionImageWrap}>
          <img src="images/mission-icon.svg" alt="Mission icon" />
        </div>

        <div className={styles.ContentWrap}>
          <h4>Mission</h4>

          <p className="body">
            Fördel Studios is dedicated to developing custom software solutions
            that maximize ROI through optimal quality at optimized cost, with
            guaranteed timely delivery.
          </p>
        </div>
      </div>

      <div className={styles.ContentDiv}>
        <div className={styles.VisionImageWrap}>
          <img src="images/vision-icon.svg" alt="Vision icon" />
        </div>

        <div className={styles.ContentWrap}>
          <h4>Vision</h4>

          <p className="body">
            We aim to equip every business, globally, with high-quality,
            ROI-driven software solutions that not only meet immediate needs but
            also pave the way for sustainable growth and success in the infinite
            game of business.
          </p>
        </div>
      </div>
    </div>

    <div className={styles.ObjectiveWrap}>
      <div className={styles.ObjectiveHeader}>
        <div className={styles.ContentWrap}>
          <h2>How we achieve this objective</h2>
        </div>

        <div className={styles.ImageWrap}>
          <img src="images/objective-icon.svg" alt="Objective icon" />
        </div>
      </div>

      <div className={styles.ObjectiveBody}>
        <div className={styles.BodyContentWrap}>
          <div className={styles.BodyHeader}>
            <div className={styles.HeaderImageWrap}>
              <img src="images/high-roi-icon.svg" alt="High ROI icon" />
            </div>

            <div className={styles.HeaderTextWrap}>
              <h5 className="sv1">High ROI</h5>
            </div>
          </div>

          <div className={styles.BodyTextWrap}>
            <p className="bodyV2">
              Through strategic partnerships and a dual consultancy model, we
              guide our clients toward financial success with systematic support
              and data-driven solutions.
            </p>
          </div>
        </div>

        <div className={styles.BodyContentWrap}>
          <div className={styles.BodyHeader}>
            <div className={styles.HeaderImageWrap}>
              <img
                src="images/quality-control-icon.svg"
                alt="Quality Control icon"
              />
            </div>

            <div className={styles.HeaderTextWrap}>
              <h5 className="sv1">Quality Control</h5>
            </div>
          </div>

          <div className={styles.BodyTextWrap}>
            <p className="bodyV2">
              Our daily testing, rigorous code reviews, and adherence to SOLID
              design principles ensure the highest software quality.
            </p>
          </div>
        </div>

        <div className={styles.BodyContentWrap}>
          <div className={styles.BodyHeader}>
            <div className={styles.HeaderImageWrap}>
              <img
                src="images/optimized-costs-icon.svg"
                alt="Optimized Costs icon"
              />
            </div>

            <div className={styles.HeaderTextWrap}>
              <h5 className="sv1">Optimized Costs</h5>
            </div>
          </div>

          <div className={styles.BodyTextWrap}>
            <p className="bodyV2">
              We allocate resources based on task complexity and provide
              transparent pricing, ensuring cost-effective solutions without
              surprises.
            </p>
          </div>
        </div>

        <div className={styles.BodyContentWrap}>
          <div className={styles.BodyHeader}>
            <div className={styles.HeaderImageWrap}>
              <img
                src="images/guaranteed-timelines-icon.svg"
                alt="Guaranteed Timelines icon"
              />
            </div>

            <div className={styles.HeaderTextWrap}>
              <h5 className="sv1">Guaranteed Timelines</h5>
            </div>
          </div>

          <div className={styles.BodyTextWrap}>
            <p className="bodyV2">
              With detailed Gantt charts and dedicated project coordinators, we
              guarantee on-time delivery, every time.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default MissionVisionSection;
