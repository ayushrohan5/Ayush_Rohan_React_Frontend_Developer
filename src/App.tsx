import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

export default function App() {
  return (
    // Wrap entire app with ThemeProvider for global theme state
    <ThemeProvider>
      <BrowserRouter>
        {/* Persistent Header */}
        <Header />

        {/* Pages handled by React Router */}
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
