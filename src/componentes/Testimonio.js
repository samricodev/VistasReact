import React from "react";
import '../css/Testimonio.css'

function Testimonio(){
  return(
    <div className="contenedor-t">
      <img 
        className="img-t"
        src={ require('../imagenes/people1.jpg')}
        alt="persona 1"
      />
      <div>
        <p className="nombre-t">Samuel</p>
        <p className="cargo-t">Ing en Software en Spotify</p>
        <p className="texto-t">lorem lorem fsedufh sdfhs dfjusdhfusdhf jusdhfsjehfsjufh sdujfhsfhsefhusefukghrfuiyhzsfuerhg ufh</p>
      </div>
    </div>
  );
}

export default Testimonio;