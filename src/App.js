import { Routes, Route } from "react-router-dom";
import Navigation from "./Components/Navigation";
import Footer from "./Components/Footer";
import Home from "./Home";
import Search from "./Search";
import Contact from "./Contact";

export default function App() {
  return (
    <>
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
