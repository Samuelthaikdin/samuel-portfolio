import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProjectSection from "./components/ProjectSection";

export default function projects() {
  return (
    <main className=" px-10 md:px-20 lg:px-40">
      <Navbar />
      <ProjectSection />

      <Footer />
    </main>
  );
}
