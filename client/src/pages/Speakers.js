import React from "react";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar/Navbar";
import SpeakerData from "../components/SpeakerData";
import Footer from "../components/Footer";

function Speakers() {
  return (
    <>
      <header>
        <Logo />
        <Navbar />
      </header>

      <section className="bg-gray-200 grid h-screen grid-rows-[1fr_auto]">
        <SpeakerData />
        <Footer />
      </section>
    </>
  );
}

export default Speakers;
