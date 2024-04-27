import { useEffect } from "preact/hooks";
import Cards from "./component/HeaderAndHero/Cards";
import Header from "./component/HeaderAndHero/Header";
import Hero from "./component/HeaderAndHero/Hero";
import WhyUs from "./component/WhyUs/WhyUs";
import MarketSector from "./component/MarketSectors/MarketSector";
import ProjectGallery from "./component/ProjectGallery/ProjectGallery";
import NewsAndArticles from "./component/NewsAndArticles/NewsAndArticles";
import ContactForm from "./component/ContactUs/ContactForm";
import TrustedSupplies from "./component/TrustedSupplies/TrustedSupplies";
import Testimonials from "./component/Testimonials/Testimonials";
import Footer from "./component/Footer/Footer";
import MainLayout from "./component/Layout/MainLayout";
import HeroPage from "./Pages/HeroPage";
import BookConsultaion from "./Pages/BookConsultaion";
import ServicesPage from "./Pages/ServicesPage";
import ProjectGalleryPage from "./Pages/ProjectGalleryPage";
import OurTeam from "./Pages/OurTeam";

const App = () => {
  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);
  return (
    <div className="max-w-[2000px] mx-auto ">
      {/* <Header />

      <Hero />

      <Cards />

      <WhyUs />

      <MarketSector />


      <ProjectGallery />

      <NewsAndArticles />

      <ContactForm />
      <Services />

      <Testimonials />

      <TrustedSupplies />

      <Footer /> */}
      {/* <HeroPage /> */}
      {/* <BookConsultaion /> */}
      {/* <ServicesPage /> */}
      {/* <ProjectGalleryPage /> */}
      <OurTeam />
    </div>
  );
};

export default App;
