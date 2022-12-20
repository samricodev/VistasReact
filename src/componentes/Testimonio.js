import React from 'react';
import '../css/Testimonio.css'

class Testimonio extends React.Component{
  render(props){
    return(
      <div className="contenedor-t">
        <img 
          className="img-t"
          src={ require(`../imagenes/testimonio-${this.props.imagen}.png`)}
          alt={`foto de ${this.props.nombre}`}
        />
        <div className="contenedor-txt-t">
          <p className="nombre-t"><strong>{this.props.nombre}</strong> en {this.props.pais}</p>
          <p className="cargo-t">{this.props.cargo} en <strong>{this.props.empresa}</strong></p>
          <p className="texto-t">{this.props.testimonio}</p>
        </div>
      </div>
    );
  }
}

export default Testimonio;