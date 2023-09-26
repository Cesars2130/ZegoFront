import React from 'react'

export default function Nav({aProps}) {
  return (
    <>
        {aProps.map((info)=>(
            <nav key={info}> <a href={info.href}> {info.nombreInput}</a> </nav>
        ))}
    </>
  )
}
