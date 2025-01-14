import "./App.css";
import { Route, BrowserRouter, Routes, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import Portfolio from "./pages/portfolio/portfolio";
import Blogs from "./pages/blogs/blogs"
import Industries from "./pages/Industries";
import Products from "./pages/Products";
import Company from "./pages/Company";
import BFSI from "./pages/industries-pages/BFSI";
import Edu from "./pages/industries-pages/edu";
import Gov from "./pages/industries-pages/gov";
import Manu from "./pages/industries-pages/Manu";
import Pharmaceutical from "./pages/industries-pages/pharma";
import Tech from "./pages/industries-pages/tech";
import { useEffect } from "react";
import NavbarContact from "./components/navbar/NavbarContact";
import About from "./pages/contact-pages/about";
import Career from "./pages/contact-pages/career";
import CertIn from "./pages/contact-pages/cert-in";
import Key25 from "./pages/contact-pages/key25";
import Leadership from "./pages/contact-pages/leadership";
import ContactUs from "./pages/contact-pages/contact";
import Aos from "aos";
import "aos/dist/aos.css";
import Footer from "./components/footer/Footer";
import Faq from "./components/faq/Faq";
import ApiSec from "./pages/services-pages/ApiSec";
import WebAppSecu from "./pages/services-pages/WebAppSecu";
import MobAppPen from "./pages/services-pages/MobAppPen";
import WirePenTest from "./pages/services-pages/WirePenTest";
import OtIot from "./pages/services-pages/IoIot";
import CloudPen from "./pages/services-pages/CloudPen";
import Project1 from "./pages/portfolio_pages/project1";
import Project2 from "./pages/portfolio_pages/project2";
import Project3 from "./pages/portfolio_pages/project3";
import Project4 from "./pages/portfolio_pages/project4";
import Project5 from "./pages/portfolio_pages/project5";

import Product1 from "./pages/product/product1";
import Product2 from "./pages/product/product2";
import Product3 from "./pages/product/product3";
import Product4 from "./pages/product/product4";
import Product_pages from "./pages/product_pages/product_pages";
import Testimonials from "./pages/contact-pages/testimonials";

// import RedTeam from "./pages/services-pages/RedTeam";
// import BlueTeam from "./pages/services-pages/BlueTeam";
// import IntRedTeam from "./pages/services-pages/IntRedTeam";
// import ExtRedTeam from "./pages/services-pages/ExtRedTeam";
// import Soc from "./pages/services-pages/Soc";
// import DigForen from "./pages/services-pages/DigForen";

import LetsWorkTog from "./pages/LetsWorkTog";
import GetAQoute from "./pages/GetAQoute";
import NetPenTest from "./pages/services-pages/NetPenTest";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
}

function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop data-aos="fade-up" />
        <NavbarContact />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/my-portfolio" element={<Portfolio />}/>
          <Route path="/blogs" element={<Blogs/>}/>
          <Route path="/industries" element={<Industries />} />
          <Route path="/products" element={<Products />} />
          <Route path="/company" element={<Company />} />
          <Route path="/project-1" element={<Project1/>}/>
          <Route path="/project-2" element={<Project2/>}/>
          <Route path="/project-3" element={<Project3/>}/>
          <Route path="/project-4" element={<Project4/>}/>
          <Route path="/project-5" element={<Project5/>}/>
          
          <Route path="/product-1" element={<Product1/>}/>
          <Route path="/product-2" element={<Product2/>}/>
          <Route path="/product-3" element={<Product3/>}/>
          <Route path="/product-4" element={<Product4/>}/>
          <Route path="/product_pages" element={<Product_pages/>}/>

          <Route path="/net-pen-test" element={<NetPenTest />} />
          <Route path="/web-app-sec" element={<WebAppSecu />} />
          <Route path="/mob-app-pen" element={<MobAppPen />} />
          <Route path="/api-sec" element={<ApiSec />} />
          <Route path="/wire-pen-test" element={<WirePenTest />} />
          <Route path="/ot-iot" element={<OtIot />} />
          <Route path="/cloud-pen" element={<CloudPen />} />
          <Route path="/testimonials" element={<Testimonials/>}/>

          {/* <Route path="/red-team" element={<RedTeam />} />
          <Route path="/int-red-team" element={<IntRedTeam />} />
          <Route path="/ext-red-team" element={<ExtRedTeam />} />
          <Route path="/blue-team" element={<BlueTeam />} />
          <Route path="/soc" element={<Soc />} />
          <Route path="/dig-foren" element={<DigForen />} /> */}

          <Route path="/bfsi" element={<BFSI />} />
          <Route path="/education" element={<Edu />} />
          <Route path="/government" element={<Gov />} />
          <Route path="/manufacturing" element={<Manu />} />
          <Route path="/pharmaceutical" element={<Pharmaceutical />} />
          <Route path="/technology" element={<Tech />} />

          <Route path="/about" element={<About />} />
          <Route path="/career" element={<Career />} />
          <Route path="/cert-in" element={<CertIn />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/key25" element={<Key25 />} />
          <Route path="/leadership" element={<Leadership />} />

          <Route path="/lets-work-tog" element={<LetsWorkTog />} />
          <Route path="/get-a-qoute" element={<GetAQoute />} />
        </Routes>
        <Faq />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
