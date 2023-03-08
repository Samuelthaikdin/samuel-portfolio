import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Emojifypage from "./components/Emojifypage";

export default function emojifypage() {
  return (
    <main className=" px-10 md:px-20 lg:px-40">
      <Navbar />
      <Emojifypage />

      <Footer />
    </main>
  );
}
