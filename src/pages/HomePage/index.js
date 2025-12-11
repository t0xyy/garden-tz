import React from "react";
import Banner from "../../components/Banner";
import CategoriesSection from "../../components/CategoriesSection";
import DiscountSection from "../../components/DiscountSection";
import ContactSection from "../../components/ContactSection";
import MapBlock from "../../components/MapBlock";
import styles from "./HomePage.module.css";
import SaleSection from "../../components/SaleSection";


export default function HomePage() {
  return (
    <div className={styles.page}>
      <Banner />
      <CategoriesSection />
      <DiscountSection />
      <SaleSection />
      <ContactSection />
      <MapBlock />
    </div>
  );
}
