import React from "react";
import Header from "../src/organismos/Header";
import Banner from "./organismos/Banner";
import Contenido from "./organismos/Contenido"
import Footer from "./organismos/Footer";

export default function LandigPage() {
  return (
    <>
      <Header />
      <Banner />
      <Contenido/>
      <Footer/>
    </>
  );
}
