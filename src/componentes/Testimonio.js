import '../css/Testimonio.css'

function Testimonio(props){
  return(
    <div className="contenedor-t">
      <img 
        className="img-t"
        src={ require(`../imagenes/testimonio-${props.imagen}.png`)}
        alt={`foto de ${props.imagen}`}
      />
      <div className="contenedor-txt-t">
        <p className="nombre-t"><strong>{props.nombre}</strong> en {props.pais}</p>
        <p className="cargo-t">{props.cargo} en <strong>{props.empresa}</strong></p>
        <p className="texto-t">{props.testimonio}</p>
      </div>
    </div>
  );
}

export default Testimonio;