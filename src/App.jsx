import React from 'react';
import { useSelector } from "react-redux";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./App.css";
import LoginAdmin from "./components/auth/LoginAdmin";
import Footer from "./components/footer";
import Header from "./components/header";
import withBanner from './hoc/withBanner';
import About from "./pages/about";
import AdminDashboards from "./pages/admin/dashboard";
import ContactUs from './pages/contact';
import Home from "./pages/home";
import Media from './pages/media';
import Products from './pages/products';
import BioBasedOrganicSolidFertilizer from './pages/products/OrganicFertilizers/BioBasedOrganicSolidFertilizer';
import OrganicActiveCapsuleFertilizer from './pages/products/OrganicFertilizers/OrganicActiveCapsuleFertilizer';
import OrganicLiquidFertilizer from './pages/products/OrganicFertilizers/OrganicLiquidFertilizer';
import ProtectedRoute from "./state-management/admin/login/ProtectedRoute";

import ConcreteBondingPowder from './pages/products/ConstructionChemicals/ConcreteBondingPowder';
import NanotechWaterproofingLiquidChemical from './pages/products/ConstructionChemicals/NanotechWaterproofingLiquidChemical';
// Images 
import { CapsuleFertilizer, CarFoamWashCleanerImg, ConcreteBondingPowderImg, contactUsImg, DishwashGelImg, FloorCleanerImg, GlassAndSurfaceCleanerImg, liquidFertilizer, NanotechWaterProofImg, OxidationCleanerImg, RustCleanerImg, solidFertilize, TextileWashMaticLiquidImg } from './Images';
import GlassAndSurfaceCleaner from './pages/products/RegularCleaningAgents/GlassAndSurfaceCleaner';
import RustCleaner from './pages/products/CustomCleaningAgent/RustCleaner';
import OxidationCleaner from './pages/products/CustomCleaningAgent/OxidationCleaner';
import CustomFloorCleaner from './pages/products/CustomCleaningAgent/CustomFloorCleaner';
import DishwasherGel from './pages/products/RegularCleaningAgents/DishwasherGel';
import TextileWashMaticLiquid from './pages/products/RegularCleaningAgents/TextileWashMaticLiquid';
import FloorCleaner from './pages/products/RegularCleaningAgents/FloorCleaner';
import CustomProfileCleaner from './pages/products/CustomCleaningAgent/CustomProfileCleaner';
import CarFoamWashCleaner from './pages/products/RegularCleaningAgents/CarFoamWashCleaner';
import ScrollToTop from './components/shared/ScrollToTop';



function App() {
  const isAuthenticated = useSelector((state) => state.adminLogin.isAuthenticated);

  // Organic Fertilizer 
  const OrganicLiquidFertilizer__ = withBanner(OrganicLiquidFertilizer, `${liquidFertilizer}`, 'Organic Liquid Fertilizer');
  const BioBasedOrganicSolidFertilizer__ = withBanner(BioBasedOrganicSolidFertilizer, `${solidFertilize}`, 'Bio based Organic solid Fertilizer');
  const OrganicActiveCapsuleFertilizer__ = withBanner(OrganicActiveCapsuleFertilizer, `${CapsuleFertilizer}`, 'Organic Active Capsule Fertilizer');

  // Construction Chemicals
  const ConcreteBondingPowder__ = withBanner(ConcreteBondingPowder, `${ConcreteBondingPowderImg}`, 'Concrete Bonding Powder');
  const NanotechWaterproofingLiquidChemical__ = withBanner(NanotechWaterproofingLiquidChemical, `${NanotechWaterProofImg}`, 'Nano technology based Water proofing Chemical');

  // Regular cleaning agents
  const FloorCleaner__ = withBanner(FloorCleaner, `${FloorCleanerImg}`, 'Floor Cleaner');
  const GlassAndSurfaceCleaner__ = withBanner(GlassAndSurfaceCleaner, `${GlassAndSurfaceCleanerImg}`, 'Glass and Surface Cleaner');
  const DishwasherGel__ = withBanner(DishwasherGel, `${DishwashGelImg}`, 'Dishwasher Gel');
  const TextileWashMaticLiquid__ = withBanner(TextileWashMaticLiquid, `${TextileWashMaticLiquidImg}`, 'Textile Washing Matic Liquid');
  const CarFoamWashCleaner__ = withBanner(CarFoamWashCleaner, `${CarFoamWashCleanerImg}`, 'Car Foam Wash Cleaner');

  // Custom cleaning agents
  const RustCleaner__ = withBanner(RustCleaner, `${RustCleanerImg}`, 'Rust Cleaner');
  const OxidationCleaner__ = withBanner(OxidationCleaner, `${OxidationCleanerImg}`, 'Oxidation Cleaner');
  const CustomFloorCleaner__ = withBanner(CustomFloorCleaner, `${FloorCleanerImg}`, 'Custom Floor Cleaner');
  const CustomProfileCleaner__ = withBanner(CustomProfileCleaner, `${FloorCleanerImg}`, 'Custom Profile Cleaner');

  // ------------
  const Media__ = withBanner(Media, `${liquidFertilizer}`, 'Media');
  const ContactUs__ = withBanner(ContactUs, `${contactUsImg}`, 'Contact Us');

  
  return (
    <Router>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/admin/login" element={<LoginAdmin />} />
        {/* <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/admin/dashboard" element={<AdminDashboards />} />
        </Route> */}
        <Route element={<ProtectedRoute />}>
          <Route path="/admin/dashboard" element={<AdminDashboards />} />
        </Route>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        {/* Products Starts */}
        {/* Organic Fertilizer  */}
        <Route path="/products/organic-liquid-fertilizer" element={<OrganicLiquidFertilizer__ />} />
        <Route path="/products/bio-based-organic-solid-fertilizer" element={<BioBasedOrganicSolidFertilizer__ />} />
        <Route path="/products/organic-active-capsule-fertilizer" element={<OrganicActiveCapsuleFertilizer__ />} />

        {/* Construction Chemicals */}
        <Route path="/products/concrete-bonding-powder" element={<ConcreteBondingPowder__ />} />
        <Route path="/products/nano-technology-based-water-proofing-chemical" element={<NanotechWaterproofingLiquidChemical__ />} />

        {/* Regular cleaning agents */}
        <Route path="/products/floor-cleaner" element={<FloorCleaner__ />} />
        <Route path="/products/glass-and-surface-cleaner" element={<GlassAndSurfaceCleaner__ />} />
        <Route path="/products/dishwasher-gel" element={<DishwasherGel__ />} />
        <Route path="/products/textile-washing-matic-liquid" element={<TextileWashMaticLiquid__ />} />
        <Route path="/products/car-foam-wash-cleaner" element={<CarFoamWashCleaner__ />} />

        {/* Custom cleaning agents */}
        <Route path="/products/rust-cleaner" element={<RustCleaner__ />} />
        <Route path="/products/oxidation-cleaner" element={<OxidationCleaner__ />} />
        <Route path="/products/custom-floor-cleaner" element={<CustomFloorCleaner__ />} />
        <Route path="/products/custom-profile-cleaner" element={<CustomProfileCleaner__ />} />

        {/* Products End */}

        <Route path="/media" element={<Media__ />} />
        <Route path="/contact" element={<ContactUs__ />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;



// import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
// import "slick-carousel/slick/slick-theme.css";
// import "slick-carousel/slick/slick.css";
// import "./App.css";
// import Footer from "./components/footer";
// import Header from "./components/header";
// import About from "./pages/about";
// import Home from "./pages/home";
// import Location from "./pages/location";
// import OurTeam from "./pages/ourTeam";
// import Services from "./pages/service";
// import LoginAdmin from "./components/auth/LoginAdmin";
// import OfferOfMonth from "./pages/OfferOfMonth";
// import Gallery from "./pages/gallery";
// import AdminDashboards from "./pages/admin/dashboard"
// import ProtectedRoute from "./state-management/admin/login/ProtectedRoute";
// import { useSelector } from "react-redux";



// function App() {

//   const isAuthenticated = useSelector((state) => state.login.isAuthenticated);

//   return (
//     <Router>
//       <Header />
//       <Routes>
//         <Route path="/admin" element={<LoginAdmin />} />
//         <ProtectedRoute
//           path="/admin/dashboard"
//           element={<AdminDashboards />}
//           isAuthenticated={isAuthenticated}
//         />
//         {/* <Route path="/admin/dashboard" element={<AdminDashboards/>}/> */}
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/services" element={<Services />} />
//         <Route path="/offer-of-month" element={<OfferOfMonth />} />
//         <Route path="/location" element={<Location />} />
//         <Route path="/ourteam" element={<OurTeam />} />
//         <Route path="/gallery" element={<Gallery />} />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// }

// export default App;
