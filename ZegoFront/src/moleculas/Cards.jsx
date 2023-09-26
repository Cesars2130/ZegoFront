import React from "react";
import "../../styles/moleculas.css";

export default function Cards ({cProps}) {
  return (
    <>
      <div className="cards_Container">
        {cProps.map((info) => (
          <div className="card_Cont">
            <div className="card_Img">
                <img src={info.url} alt="imagenPrueba" className="Img" />
            </div>
            <div className="text_Img">
              <h1> {info.tituloCard}</h1>
              <h4>{info.contenidoCard}</h4>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
