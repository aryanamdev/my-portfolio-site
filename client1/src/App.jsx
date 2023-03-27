import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Projects from "./pages/Projects";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <div className="all heading-gradient text-white pt-10">
      <div className="universal-wrapper mx-auto">
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
