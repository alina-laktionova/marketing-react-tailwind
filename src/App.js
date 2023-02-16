import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";
import Layout from "./components/Layout";
import About from "./pages/About";
import Clients from "./pages/Clients";
import Contact from "./pages/Contacts";
import Home from "./pages/Home";

const ScrollToTop = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

function App() {
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/clients" element={<Clients />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Layout>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
}

export default App;
