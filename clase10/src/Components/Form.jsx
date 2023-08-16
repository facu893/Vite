import React, { useState } from 'react';
import Card from './Card';

function Form() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [showCard, setShowCard] = useState(false); 

  const cleanForm = () => {
    setFirstName("");
    setLastName("");
    setShowCard(false);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    const nameRegex = /^[a-zA-Z\s]+$/;

    if (firstName.length < 3 || /^\s/.test(firstName) || !nameRegex.test(firstName)) {
      setError('Por favor, ingresa un nombre válido.');
      return;
    }

    if (lastName.length < 6 || !nameRegex.test(lastName)) {
      setError('Por favor, ingresa un apellido válido..');
      return;
    }

    setSubmitted(true);
    setShowCard(true);

  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Nombre:</label>
        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
        <label>Apellido:</label>
        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
        <button type="submit">Enviar</button>
        <button type="button" onClick={cleanForm}>Limpiar formulario</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {submitted && showCard && <Card firstName={firstName} lastName={lastName} onInteract={() => setShowCard(false)} />}
    </div>
  );
}

export default Form;