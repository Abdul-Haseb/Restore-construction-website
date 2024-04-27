import React from "react";
import MainLayout from "../component/Layout/MainLayout";
import Hero from "../component/HeaderAndHero/Hero";
import Cards from "../component/HeaderAndHero/Cards";
import WhyUs from "../component/WhyUs/WhyUs";
import MarketSector from "../component/MarketSectors/MarketSector";
import Services from "../component/DivisionsOfServices/Services";
import ProjectGallery from "../component/ProjectGallery/ProjectGallery";
import NewsAndArticles from "../component/NewsAndArticles/NewsAndArticles";
import ContactForm from "../component/ContactUs/ContactForm";
import Testimonials from "../component/Testimonials/Testimonials";
import TrustedSupplies from "../component/TrustedSupplies/TrustedSupplies";

const HeroPage = () => {
  return (
    <MainLayout>
      <Hero />
      <Cards />
      <WhyUs />
      <MarketSector />
      <Services />
      <ProjectGallery />
      <NewsAndArticles />
      <ContactForm />
      <Testimonials />
      <TrustedSupplies />
    </MainLayout>
  );
};

export default HeroPage;
