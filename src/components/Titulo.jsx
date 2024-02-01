import { useState } from "react";

function Titulo({ mensaje }) {
  const [texto, setTexto] = useState("");

  return (
    <>
      <h1>Hello {mensaje + texto}</h1>
      <button onClick={() => setTexto(' (from changed state)')}>Click me!</button>
    </>
  );
}

export default Titulo;
