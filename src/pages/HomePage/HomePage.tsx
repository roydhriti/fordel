import React, { FC, useEffect, useState } from "react";
import styles from "./HomePage.module.scss";
import HeaderSection from "../../shared/components/HeaderSection/HeaderSection";
import HeroSection from "./components/HeroSection/HeroSection";
import MissionVisionSection from "./components/MissionVisionSection/MissionVisionSection";
import OurServicesSection from "./components/OurServicesSection/OurServicesSection";
import CaseStudiesSection from "./components/CaseStudiesSection/CaseStudiesSection";
import WhyUsSection from "./components/WhyUsSection/WhyUsSection";
import CtaSection from "./components/CtaSection/CtaSection";

interface HomePageProps {}

const HomePage: FC<HomePageProps> = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.HomePage}>
      <div
        className={`${styles.HeaderWrap} ${scrolled ? styles.Scrolled : ""}`}
      >
        <HeaderSection />
      </div>
      <HeroSection />
      <MissionVisionSection />
      <OurServicesSection />
      <CaseStudiesSection />
      <WhyUsSection />
      <CtaSection />
    </div>
  );
};

export default HomePage;
