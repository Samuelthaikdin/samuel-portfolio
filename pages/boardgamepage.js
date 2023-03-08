import React from "react";
import Navbar from "./components/Navbar";
import PrototypeBoardGame from "./components/PrototypeBoardGame";
import Footer from "./components/Footer";
export default function boardgamepage() {
  return (
    <main className="px-10 md:px-20 lg:px-40">
      <Navbar />
      <PrototypeBoardGame />
      <Footer />
    </main>
  );
}
