import React, { useState } from 'react';

function Card({ firstName, lastName, onInteract }) {
  const [interacted, setInteracted] = useState(false);

  const handleInteract = () => {
    setInteracted(true);
    onInteract();
  }

  return (
    <div className="card">
      <h2>Información ingresada:</h2>
      <p>Nombre: {firstName}</p>
      <p>Apellido: {lastName}</p>
      {!interacted && <button onClick={handleInteract}>Cerrar</button>}
    </div>
  );
}

export default Card;