import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Dininghall from "./components/Dininghall";
export default function dininghallresearch() {
  return (
    <main className="px-10 md:px-20 lg:px-40">
      <Navbar />
      <Dininghall />
      <Footer />
    </main>
  );
}
