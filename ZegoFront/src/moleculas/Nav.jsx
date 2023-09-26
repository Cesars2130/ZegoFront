import React from "react";
import "../../styles/moleculas.css";

export default function Nav({ aProps }) {
  return (
    <>
      <nav>
        {aProps.map((info) => (
          <a className="a" key={info} href={info.href}>
            {info.nombreInput}
          </a>
        ))}
      </nav>
    </>
  );
}
