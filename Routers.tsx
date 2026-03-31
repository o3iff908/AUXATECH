import { Route, Routes } from "react-router-dom";

// PAGES
import Home6Light from "./src/pages/site/Home6Light";
import About2LightPage from "./src/pages/site/About2LightPage";
import Services3LightPage from "./src/pages/site/Services3LightPage";
import ProjectDetailsLightPage from "./src/pages/site/ProjectDetailsLightPage";
import ProjectLightPage from "./src/pages/site/ProjectLightPage";
import ContactUsLightPage from "./src/pages/site/ContactUsLightPage";
import Team2LightPage from "./src/pages/site/Team2LightPage";

// 404
import NotFoundPage from "./src/pages/site/NotFoundPage";

const Routers = () => {
  return (
    <Routes>

      {/* الصفحة الرئيسية */}
        <Route path="/" element={<Home6Light />} />

      {/* الصفحات */}
        <Route path="/about" element={<About2LightPage />} />
        <Route path="/team" element={<Team2LightPage />} />
        <Route path="/services" element={<Services3LightPage />} />
        <Route path="/projects" element={<ProjectLightPage />} />
        <Route path="/project-details/:id" element={<ProjectDetailsLightPage />} />
        <Route path="/contact" element={<ContactUsLightPage />} />

      {/* 404 */}
        <Route path="*" element={<NotFoundPage />} />

    </Routes>
  );
};

export default Routers;