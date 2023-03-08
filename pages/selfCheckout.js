import React from "react";
import Navbar from "./components/Navbar";
import Selfcheckoutpage from "./components/Selfcheckoutpage";
import Footer from "./components/Footer";
export default function selfCheckout() {
  return (
    <main className="px-10 md:px-20 lg:px-40">
      <Navbar />
      <Selfcheckoutpage />
      <Footer />
    </main>
  );
}
