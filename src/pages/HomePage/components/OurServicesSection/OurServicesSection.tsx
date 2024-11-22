import React, { FC } from "react";
import styles from "./OurServicesSection.module.scss";

interface OurServicesSectionProps {}

const OurServicesSection: FC<OurServicesSectionProps> = () => (
  <div className={styles.OurServicesSection}>
    <div className={styles.OurServicesHeader}>
      <div className={styles.leftHeader}>
        <div className={styles.SoftHeader}>
          <h6 className="sv2">Services Overview</h6>
        </div>

        <div className={styles.BoldHeader}>
          <h2>Our Services</h2>
        </div>
      </div>

      <div className={styles.RightHeader}>
        <div className={styles.HeaderContent}>
          <p className="body">
            Fördel Studios specializes in a comprehensive suite of software
            development services, meticulously tailored to meet the unique needs
            of each client.
          </p>
        </div>
      </div>
    </div>

    <div className={styles.OurServicesBody}>
      <div className={styles.ServicesCard}>
        <div className={styles.ImageWrap}>
          <img
            src="images/ux-ui-design-services-img.svg"
            alt="UX/UI Design Services Image"
          />
        </div>

        <div className={styles.ServiceContent}>
          <div className={styles.ContentHeader}>
            <h5 className="sv1">UX/UI Design Services</h5>
          </div>

          <div className={styles.ContentBody}>
            <p className="bodyV2"></p>
          </div>

          <div className={styles.ContentTags}>
            <p className="overline">Innovative</p>

            <div className={styles.Circle}></div>

            <p className="overline">Iterative</p>
          </div>
        </div>
      </div>
      <div className={styles.ServicesCard}>
        <div className={styles.ImageWrap}>
          <img
            src="https://plus.unsplash.com/premium_photo-1663045286919-b66b756d93be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGV2ZWxvcG1lbnQlMjBzb2Z0d2FyZXxlbnwwfHwwfHx8MA%3D%3D"
            alt="UX/UI Design Services Image"
          />
        </div>

        <div className={styles.ServiceContent}>
          <div className={styles.ContentHeader}>
            <h5 className="sv1">Development Services</h5>
          </div>

          <div className={styles.ContentBody}>
            <p className="bodyV2"></p>
          </div>

          <div className={styles.ContentTags}>
            <p className="overline">Innovative</p>

            <div className={styles.Circle}></div>

            <p className="overline">Iterative</p>
          </div>
        </div>
      </div>

      <div className={styles.ServicesCard}>
        <div className={styles.ImageWrap}>
          <img
            src="https://images.unsplash.com/photo-1580983561371-7f4b242d8ec0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UXVhbGl0eSUyMGNvbnRyb2wlMjBzb2Z0d2FyZXxlbnwwfHwwfHx8MA%3D%3D"
            alt="UX/UI Design Services Image"
          />
        </div>

        <div className={styles.ServiceContent}>
          <div className={styles.ContentHeader}>
            <h5 className="sv1">Development Services</h5>
          </div>

          <div className={styles.ContentBody}>
            <p className="bodyV2"></p>
          </div>

          <div className={styles.ContentTags}>
            <p className="overline">Innovative</p>

            <div className={styles.Circle}></div>

            <p className="overline">Iterative</p>
          </div>
        </div>
      </div>

      <div className={styles.ServicesCard}></div>

      <div className={styles.ServicesCard}></div>

      <div className={styles.ServicesCard}></div>

      <div className={styles.ServicesCard}></div>

      <div className={styles.ServicesCard}></div>
    </div>
  </div>
);

export default OurServicesSection;
