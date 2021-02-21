import React, { useState } from 'react';



function Nota({nota}){
  console.log(nota)
  return(
    <h1> prueba {nota.desc}</h1>
  )

}

export default Nota;