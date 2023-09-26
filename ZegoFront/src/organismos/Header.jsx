import React from "react";
import Head from "../atomos/Head";
import Nav from "../moleculas/Nav";

export default function Header() {

    const aProps = [
        {
            href: "/",
            nombreInput: "Inicio"
        },
        {
            href: "/",
            nombreInput: "Servicios"
        },
        {
            href: "/",
            nombreInput: "Clientes"
        },
        {
            href: "/",
            nombreInput: "Productos"
        }
    ]

    

  return (
    <>
      <header>
        <Head />
        <Nav aProps={aProps}/>
      </header>
    </>
  );
}
