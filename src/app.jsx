import { useEffect } from "preact/hooks";
import HeroPage from "./Pages/HeroPage";
import AboutUs from "./Pages/AboutUs"; // Import AboutUs component

import { BrowserRouter, Routes, Route } from "react-router-dom"; // Import BrowserRouter, Routes, and Route
import ServicesPage from "./Pages/ServicesPage";
import OurTeam from "./Pages/OurTeam";
import ProjectGalleryPage from "./Pages/ProjectGalleryPage";
import BookConsultaion from "./Pages/BookConsultaion";
import WorkFlowPage from "./Pages/WorkFlowPage";
import MarketCardsPage from "./Pages/MarketCardsPage";
import ProjectDetails from "./Pages/ProjectDetails";
import ServicesDetails from "./Pages/ServicesDetails";

const App = () => {
  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);
  return (
    <div className="max-w-[2000px] mx-auto">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HeroPage />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/ServicesPage" element={<ServicesPage />} />
          <Route path="/OurTeam" element={<OurTeam />} />
          <Route path="/ProjectGalleryPage" element={<ProjectGalleryPage />} />
          <Route path="/BookConsultaion" element={<BookConsultaion />} />
          <Route path="/MarketSector" element={<MarketCardsPage />} />
          <Route path="/WorkFlowPage" element={<WorkFlowPage />} />
          <Route path="/ProjectDetails" element={<ProjectDetails />} />
          <Route path="/Services" element={<ServicesDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
