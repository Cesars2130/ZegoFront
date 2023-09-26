import React from 'react'
import "../../styles/organismos.css"
import Cards from '../moleculas/Cards'

export default function Contenido() {

  const cProps = [
    {
      tituloCard: "MISION",
      contenidoCard:"En esta empresa la mision es lorem Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0NuaHmElqevtGf6NdFTFB34lfWUPt57okX-OxiKy36xKRqoKqvDcB-2KzKlzNmOJWFPo&usqp=CAU"

    },
    {
      tituloCard:"VISION",
      contenidoCard:"En esta empresa la vision es lorem Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0NuaHmElqevtGf6NdFTFB34lfWUPt57okX-OxiKy36xKRqoKqvDcB-2KzKlzNmOJWFPo&usqp=CAU"
    },
    {
      tituloCard:"VALORES",
      contenidoCard:"En esta empresa los valores lorem Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0NuaHmElqevtGf6NdFTFB34lfWUPt57okX-OxiKy36xKRqoKqvDcB-2KzKlzNmOJWFPo&usqp=CAU"
    }
  ]


  return (
    <>
        <Cards cProps={cProps}/>
    </>
  )
}
