import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Programs from "./components/Programs";
import ProgramDetails from "./components/ProgramDetails";
import "./App.css";
import Registracija from "./components/Registracija";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Korpa from "./components/Korpa";
import Vesti from "./components/Vesti";
import Blog from "./components/Blog";
import Karijera from "./components/Karijera";
import PopustZaNoveClanove from "./components/PopustZaNoveClanove";
import ZimskiTrening from "./components/ZimskiTrening";
import StudentskiPopust from "./components/StudentskiPopust";
import SavetiZaFitnes from "./components/SavetiZaFitnes";
import NutricijaZaFitnes from "./components/NutricijaZaFitnes";
import MentalnaPriprema from "./components/MentalnaPriprema";
import Footer from "./components/footer";
import OnlineTreninzi from "./components/OnlineTreninzi"; // Import nove komponente

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Naslovna</Link>
            </li>
            <li>
              <Link to="/about">O nama</Link>
            </li>
            <li>
              <Link to="/contact">Kontakt</Link>
            </li>
            <li>
              <Link to="/programs">Programi</Link>
            </li>
            <li>
              <Link to="/vesti">Vesti</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/karijera">Karijera</Link>
            </li>
            <li>
              <Link to="/online-treninzi">Online treninzi</Link> {/* Dodato */}
            </li>
          </ul>
        </nav>

        <div className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/registracija" element={<Registracija />} />
            <Route path="/korpa" element={<Korpa />} />
            <Route path="/programs/:programId" element={<ProgramDetails />} />
            <Route path="/vesti" element={<Vesti />} />
            <Route
              path="/popust-za-nove-clanove"
              element={<PopustZaNoveClanove />}
            />
            <Route path="/zimski-trening" element={<ZimskiTrening />} />
            <Route path="/studentski-popust" element={<StudentskiPopust />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/saveti-za-fitnes" element={<SavetiZaFitnes />} />
            <Route
              path="/blog/nutricija-za-fitnes"
              element={<NutricijaZaFitnes />}
            />
            <Route
              path="/blog/mentalna-priprema"
              element={<MentalnaPriprema />}
            />
            <Route path="/karijera" element={<Karijera />} />
            <Route path="/online-treninzi" element={<OnlineTreninzi />} />{" "}
            {/* Dodato */}
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
