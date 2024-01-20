import "./styles.css";
import Home from "./routes/Home";
import { Route, Routes } from "react-router-dom";
import About from "./routes/About";
import Menu from "./routes/Menu";
import Contact from "./routes/Contact";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
